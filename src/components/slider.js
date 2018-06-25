import React from 'react';
import  M from 'materialize-css/dist/js/materialize.js';


import  img4  from '../images/img4.jpg';
import  img10  from '../images/img10.jpg';
import  img11  from '../images/img11.jpg';
import  img12  from '../images/img12.jpg';


class Slider extends React.Component{
  componentDidMount(){
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.carousel');
      let instance3 = M.Carousel.init(elems, {
        fullWidth: true,
        noWrap: false
      });
      
      
    });
  }

  render(){
    return (
      <div className="carousel carousel-slider">
      <a className="carousel-item" href="#one!"><img src={img11} /></a>
      <a className="carousel-item" href="#one!"><img src={img10} /></a>
      <a className="carousel-item" href="#one!"><img src={img4} /></a>
      <a className="carousel-item" href="#one!"><img src={img12} /></a>
    </div> 
    );
  }
}

export default Slider;