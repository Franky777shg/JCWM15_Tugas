import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Carousel, Todo, News, Table } from "./pages";
import Navbar from "./templates/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/carousel" component={Carousel} />
      <Route path="/todo" component={Todo} />
      <Route path="/news" component={News} />
      <Route path="/table" component={Table} />
    </Router>
  );
}

export default App;
