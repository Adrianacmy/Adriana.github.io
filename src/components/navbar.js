import React, { Component } from 'react';

import Search from './search';


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
      
      <nav className="white row">
        <div className="nav-wrapper">
          <div className="container">
          <ul className="left hide-on-small-and-down">
            <li><a href="sass.html">home</a></li>
            <li><a href="sass.html">project</a></li>
            <li><a href="sass.html">blog</a></li>
            <li><a href="sass.html">contact</a></li>
          </ul>
          <Search />
          </div>
        </div>
      </nav>


       <ul id="slide-out" className="sidenav">
    <li><div className="user-view">
      {/* <div class="background">
        <img src="images/office.jpg"/>
      </div> */}
      <a href="#user">HOME</a>
      <a href="#name">PROJECT</a>
      <a href="#email">BLOG</a>
    </div></li>
    <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
    <li><a href="#!">Second Link</a></li>
    <li><div className="divider"></div></li>
    <li><a className="subheader">Subheader</a></li>
    <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
  </ul>
  <a href="#" data-target="slide-out" className="sidenav-trigger hide-on-med-and-up"><i className="material-icons">menu</i></a>
        


      </div>
    );
  }
}

export default Navbar;