import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import Footer from './components/footer'
import home from './components/home'
import about from './components/about'
import contact from './components/contact'
import projects from './components/projects'


class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <Route exact path="/" render={() => <Redirect to="/home" />}
        />
        <nav className="navbar navbar-expand-lg navbar-dark">

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to='/home' className="nav-link">Home</Link>

              </li>
              <li className="nav-item">
                <Link to='/about' className="nav-link">About Me</Link>
              </li>
              <li className="nav-item">
                <Link to='/projects' className="nav-link">Projects</Link>
              </li>
              <li className="nav-item">
                <Link to='/contact' className="nav-link">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Route path="/home" exact component={home} />
        <Route path="/about" component={about} />
        <Route path="/projects" component={projects} />
        <Route path="/contact" component={contact} />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
