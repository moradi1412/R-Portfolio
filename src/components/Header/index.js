import React, { Component } from "react";
import { Route, Redirect, HashRouter } from "react-router-dom";
import NavItem from "../Nav";
import About from "../About";
import Projects from '../Projects';
import ContactForm from '../../components/contact'
import resume from "../resume";


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
          <Route path="/contact" component={ContactForm}/>
          <Route path="/resume" component={resume}/>
        </div>
      </HashRouter>
    );
  }
}

export default Header;