import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Carousel, Todo, News } from "./pages";
import Navbar from "./templates/Navbar";
// import ReactDOM from "react-dom";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-solid-svg-icons";
// import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

// library.add(fab, faCheckSquare, faCoffee);

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/carousel" component={Carousel} />
      <Route path="/todo" component={Todo} />
      <Route path="/news" component={News} />
      {/* <div className="App"> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* </div> */}
    </Router>
  );
}

export default App;
