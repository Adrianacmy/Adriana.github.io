import React from 'react';
import img20 from '../images/img20.jpg';
import img26 from '../images/img26.jpg';
import img25 from '../images/img25.jpg';

class RecentPost extends React.Component {
  render() {
    return (

      <div className="recentposts">
        <h6 className="left">RECENT POSTS
        <div><hr  /></div></h6>

        <div className="card horizontal">

          <div className="card-image">
            <img src={img25} />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p>Post Category: Post Tfdaffdafdafddfdafitle</p>
            </div>
            <div className="card-action">
              <p>- 05 Oct , 2016</p>
            </div>
          </div>
          </div>
        <div className="card horizontal">

          <div className="card-image">
            <img src={img20} />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p>Post Category: Post Tfdaffdafdafddfdafitle</p>
            </div>
            <div className="card-action">
              <p>- 05 Oct , 2016</p>
            </div>
          </div>
        </div>
        <div className="card horizontal">
          <div className="card-image">
            <img src={img26} />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p  >Post Category: Poaeqreew fdafdsaf Title</p>
            </div>
            <div className="card-action">
              <p>- 05 Oct , 2016</p>
            </div>
          </div>
          </div>
      </div>
    )
  }
}

export default RecentPost;