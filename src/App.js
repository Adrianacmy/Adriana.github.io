import  M from 'materialize-css/dist/js/materialize.js';
import React, { Component } from 'react';
// import logo from './logo.svg';
// import img1 from './imgs/1.jpg';
// import MarkdownTest from './components/posts_list';

import './index.css';


import Navbar from './components/navbar';
import NameTag from './components/nametag';
import Slider from './components/slider';
import PostsIndex from './components/postsIndex';
import Sidebar from './components/sidebar';


class App extends Component {
    componentDidMount(){
      document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.dropdown-trigger');
        var instances = M.Dropdown.init(elems, {});

        var instance2 = M.Carousel.init({
          fullWidth: true
        });

        // init Modal
        // var elemsM = document.querySelectorAll('.modal');
        // var instance2 = M.Modal.init(elemsM, {});
      });
    }

  render() {
    return (
      <div>
        <Navbar />
        <NameTag />
        <Slider />
        <div className="main container">
        <div className="row">
          <div className="posts col s12 m8">
            <PostsIndex />
          </div>
          <div className="sidebar col s12 m4">
            <Sidebar />
          </div>
        </div>
          
      </div>
     </div>
    );
  }
}

export default App;