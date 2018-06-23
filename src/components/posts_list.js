import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import _ from 'lodash';

import { fetchPosts } from '../actions';






class PostsList extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }


  renderPosts() {
    return _.map(this.props.posts, post => {
      const className = `${ post.title ? 'list-group-item' : '' }`;
      return (
        <li key={post.id} className={className}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>

        
      );
    });
  }

  render() {
    console.log(this.props.posts);
    return (
      <div>
        {/* <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-success">
            Add a post
          </Link>
        </div> */}
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>);
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostsList);