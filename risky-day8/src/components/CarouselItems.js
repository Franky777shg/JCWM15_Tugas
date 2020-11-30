import React from "react";
import { Carousel } from "react-bootstrap";

function CarouselItems() {
  const toWords = (num) => {
    const words = ["", "First", "Second", "Third", "Fourth"];

    return words[num];
  };
  const wallpapers = [
    {
      src:
        "https://512pixels.net/downloads/macos-wallpapers-thumbs/10-14-Day-Thumb.jpg",
      name: "Catalina",
      description: "10.14",
    },
    {
      src:
        "https://512pixels.net/downloads/macos-wallpapers-thumbs/10-13--thumb.jpg",
      name: "High Sierra",
      description: "10.13",
    },
    {
      src:
        "https://512pixels.net/downloads/macos-wallpapers-thumbs/10-12--thumb.jpg",
      name: "Sierra",
      description: "10.12",
    },
  ];
  return (
    <>
      <Carousel>
        {wallpapers.map((wallpaper, i) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={wallpaper.src}
              alt={toWords(i + 1)}
            />
            <Carousel.Caption>
              <h3>{wallpaper.name}</h3>
              <p>{wallpaper.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default CarouselItems;
