import React, { Component } from "react";
import { Route, Redirect, HashRouter } from "react-router-dom";
import NavItem from "../Nav";
import About from "../About";
import Projects from '../Projects';
// import Contact from '../../components/Contact';
// import Resume from '../../components/Resume';


class Header extends Component {
  render() {
    return (
      <HashRouter>
        <header>
          <NavItem />
        </header>

        <div className="content">
          <Route exact path="/" render={() => <Redirect to="/about" />} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={About}/>
          <Route path="/resume" component={About}/>
        </div>
      </HashRouter>
    );
  }
}

export default Header;