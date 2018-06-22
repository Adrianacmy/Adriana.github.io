import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import ReactMarkdown from 'react-markdown;
import { fetchPosts } from '../actions';

import _ from 'lodash';

// class MarkdownPost extends Component{
//   render(){

// const input = '# This is a header\n\nAnd this is a paragraph';
// return (
//   <ReactMarkdown source={input} />
// )

//   }
// }

// export default MarkdownTest

class PostsList extends Component{

  componentDidMount(){
    this.props.fetchPosts();
  }

  renderPosts(){
    return _.map(this.props.posts, post => {

      const className = `${post.title} ? 'collection-item' : ''`;

      return (
          <li key={post.id} className={ className } >
            { post.title }
          </li>
        );
    });
  }

  render(){
    return (
      
      <ul className="collection">
        fdafdaf
        { this.renderPosts() }

      </ul>
            
    );
  }
}



function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostsList);