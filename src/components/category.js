import React from 'react';

class Category extends React.Component{
  render(){
    return (
      <div className="category">
      <h6>CATEGORIES<div><hr/></div></h6>
      <a href="#!"><span className="badge">1</span>Javascript</a>
      <a href="#!"><span className="badge">4</span>React</a>
      <a href="#!" >Python</a>
      <a href="#!"><span className="badge">14</span>Django</a>
    </div>
             
    );
  }
}

export default Category;