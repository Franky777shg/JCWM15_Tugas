import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button, Dropdown, FormControl } from "react-bootstrap";
import axios from "axios";
import moment from "moment";
import countries from "../data/country";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <Button
    variant="primary"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    &#x25bc;
  </Button>
));

const CustomMenu = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = useState("");

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type the country..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
);

function NewsList() {
  const [news, setNews] = useState([]);
  const [dropdownTitle, setDropdownTitle] = useState("USA");

  useEffect(() => {
    axios
      .get(
        "http://newsapi.org/v2/top-headlines?country=us&apiKey=62d487980ee14a93b97e615cd1bf30d3"
      )
      .then((res) => {
        setNews(res.data.articles);
      })
      .catch((err) => console.error(err));
  }, []);

  const maxWords = (words) => {
    if (words == null) {
      return "No Description.";
    } else if (words.split(" ").length > 15) {
      const newWords = words.split(" ").slice(0, 15).join(" ");
      return `${newWords} ...`;
    }

    return words;
  };

  const convertDate = (date) => {
    const sliceDate = date.slice(0, 10);
    const newDate = moment(sliceDate, "YYYYMMDD").startOf("hour").fromNow();

    return newDate;
  };

  const handleCountry = ({ name, code }) => {
    axios
      .get(
        `http://newsapi.org/v2/top-headlines?country=${code}&apiKey=62d487980ee14a93b97e615cd1bf30d3`
      )
      .then((res) => {
        setNews(res.data.articles);
        setDropdownTitle(name);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
          {dropdownTitle}
        </Dropdown.Toggle>

        <Dropdown.Menu as={CustomMenu}>
          {countries.map((country, i) => (
            <Dropdown.Item
              onClick={() => handleCountry(country)}
              eventKey={`${i + 1}`}
            >
              {country.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <Row>
        {news.map((item, i) => (
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            style={{ marginBottom: "10px", marginTop: "10px" }}
            key={i}
          >
            <Card
              style={{
                height: "550px",
              }}
            >
              <Card.Img
                variant="top"
                src={
                  item.urlToImage == null
                    ? "https://www.city.sakura.lg.jp/sakura/tulip/images/noimage.jpg"
                    : item.urlToImage
                }
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  {maxWords(item.description)}
                </Card.Text>
                <Button variant="primary" href={item.url} target="_blank">
                  Go somewhere
                </Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  Last updated {convertDate(item.publishedAt)}
                </small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default NewsList;
