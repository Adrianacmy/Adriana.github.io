import  M from 'materialize-css/dist/js/materialize.js';
import React, { Component } from 'react';
import logo from './logo.svg';
import img1 from './imgs/1.jpg';
import './App.css';

class App extends Component {
    componentDidMount(){
      // document.addEventListener('DOMContentLoaded', function() {
        // init carousel
        // let elems = document.querySelectorAll('.carousel');
        // let instances = M.Carousel.init(elems, {});

        // init Modal
        // var elemsM = document.querySelectorAll('.modal');
        // var instance2 = M.Modal.init(elemsM, {});
      // });
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        

      </div>
    );
  }
}

export default App;