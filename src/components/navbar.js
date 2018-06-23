import React, { Component } from 'react';

import '../index.css';

class Navbar extends Component{
  render(){
    return (
    <div>
      <ul id="dropdown1" className="dropdown-content">
        <li><a href="#!">one</a></li>
        <li><a href="#!">two</a></li>
        <li className="divider"></li>
        <li><a href="#!">three</a></li>
      </ul>
      <nav className="white">
        <div className="nav-wrapper">
          <div className="container">
          <ul className="left hide-on-med-and-down">
            <li><a href="sass.html">home</a></li>
            <li><a href="sass.html">project</a></li>
            <li><a href="sass.html">blog</a></li>
            <li><a href="sass.html">contact</a></li>
           
          </ul>
         
          </div>
        </div>
      </nav>
      </div>
    );
  }
}

export default Navbar;