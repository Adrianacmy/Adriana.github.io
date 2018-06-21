import  M from 'materialize-css/dist/js/materialize.js';
import React, { Component } from 'react';
import logo from './logo.svg';
// import img1 from './imgs/1.jpg';
import MarkdownTest from './components/posts_list';

class App extends Component {
    componentDidMount(){
      document.addEventListener('DOMContentLoaded', function() {
        // init carousel
        var elems = document.querySelectorAll('.dropdown-trigger');
        var instances = M.Dropdown.init(elems, {});

        // M.AutoInit();
        // init Modal
        // var elemsM = document.querySelectorAll('.modal');
        // var instance2 = M.Modal.init(elemsM, {});
      });
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo responsive-img" alt="logo" /> */}
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        

        <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Drop Me!</a>

        <ul id='dropdown1' class='dropdown-content'>
          <li><a href="#!">one</a></li>
          <li><a href="#!">two</a></li>
          <li class="divider" tabindex="-1"></li>
          <li><a href="#!">three</a></li>
          <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
          <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
        </ul>
        
        <MarkdownTest />

      </div>
    );
  }
}

export default App;