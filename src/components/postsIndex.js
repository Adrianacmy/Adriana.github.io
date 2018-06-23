import React from 'react';

import  img17  from '../images/img17.gif';
import  img19  from '../images/img3.jpg';
import  img13  from '../images/img13.jpg';



class PostsIndex extends React.Component {

  render() {
    return (
      <div className="postsIndex">
      <div className="row center">
        <div>
        <span className="card-title">Post Category
        <div><hr/></div></span>
        <h5>Post Category: Post Title</h5>
        <p>Posted on October 5, 2019 by Adriana</p>
          <div className="card">
            <div className="card-image">
              <img src={img17} className="responsive-img"/>
              {/* <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a> */}
            </div>
            <div className="card-content">
              <p>All children, except one, grow up. know they soon know thhat they will grow up, and the way Wendfdafdand the way </p>
            </div>
          </div>
          <div className="readmore"><a href="#"><strong>  READ MORE</strong></a></div>
          <hr className="hro"/>
        </div>
      </div>

     <div className="row center">
        <div>
        <span className="card-title">Post Category
        <div><hr/></div></span>
        <h5>Post Category: Post Title</h5>
        <p>Posted on October 5, 2019 by Adriana</p>
          <div className="card">
            <div className="card-image">
              <img src={img19} className="responsive-img"/>
              {/* <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a> */}
            </div>
            <div className="card-content">
              <p>All children, except one, grow up. They soon know tey soon know they soon know they soon know they soon know thhat they will grow up, and the way Wendfdafdand the way </p>
            </div>
          </div>
          <div className="readmore"><a href="#"><strong>  READ MORE</strong></a></div>
        </div>
      </div>
      <hr className="hro"/>
      
      <div className="row center">
        <div>
        <span className="card-title">Post Category
        <div><hr/></div></span>
        <h5>Post Category: Post Title</h5>
        <p>Posted on October 5, 2019 by Adriana</p>
          <div className="card">
            <div className="card-image">
              <img src={img13} className="responsive-img"/>
              {/* <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a> */}
            </div>
            <div className="card-content">
              <p>All children, except one, grow up. They soon know tey soon know they soon know they soon know they soon know thhat they will grow up, and the way Wendfdafdand the way </p>
            </div>
          </div>
          <div className="readmore"><a href="#"><strong>  READ MORE</strong></a></div>
        </div>
      </div>
      <hr className="hro"/>

      </div>
    );
  }
}


export default PostsIndex;