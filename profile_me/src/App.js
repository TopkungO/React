import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//bootstrap
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

//link
import Home from "./Components/Home";
import Services from "./Components/Services";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <NavBar className="bg-dark" variant="dark">
        <Container>
          <NavBar.Brand>
            <Link className="nav-link" to={"/home"}>
              Profile
            </Link>
          </NavBar.Brand>
          <Nav className="justify-content-end">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
            <Link to={"/about"} className="nav-link">
              About
            </Link>
            <Link to={"/services"} className="nav-link">
              Services
            </Link>
            <Link to={"/portfolio"} className="nav-link">
              portfolio
            </Link>
            <Link to={"/contact"} className="nav-link">
              Contact
            </Link>
          </Nav>
        </Container>
      </NavBar>

      <Container>
        <div className="wrapper mt-3">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
      </Container>
    </div>
  );
}

export default App;
