import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';


import Navbar from './navbar';
import NameTag from './nametag';
import Footer from './footer';

// const ReactMarkdown = require('react-markdown')
import ReactMarkdown from 'react-markdown';


class PostsDetail extends Component {

  componentDidMount() {
    if (!this.props.post) {
      const { id } = this.props.match.params;
      // console.log( id);
      this.props.fetchPost(id);
    }
  }

  onDeleteClick(){
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => this.props.history.push("/"));
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>

        <Link className="btn btn-success" to="/posts/">Back to Post Index</Link>
        Loading...
        </div>
    }

    if (!post.title | !post.content | post.categories) {
      return <div>
        <Link className="btn btn-success" to="/posts/">Back to Post Index</Link>
        Not enough information
      </div>
    }
    console.log(post);
    return (
     
      <div>
         <Navbar />
        <NameTag />
        <Link className="btn btn-success" to="/posts/">Back to Post Index</Link>
        <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>Delet Post</button>
        <h3>{post.title}</h3>
        <h6>categories: {post.categories}</h6>
       
        <ReactMarkdown source={post.content} />

      <Footer />

      </div>
    );
  }
}


function mapStateToProps({ posts }, ownProps) { //2nd arg is the component props
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsDetail);