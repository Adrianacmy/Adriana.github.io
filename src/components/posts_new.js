import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import $ from 'jquery';

import { createPost } from '../actions';
import M from 'materialize-css/dist/js/materialize.js';

class PostsNew extends React.Component {

  componentDidMount(){

    $('#textarea1').val('New Text');
    M.textareaAutoResize($('#textarea1'));
       
    // document.addEventListener('DOMContentLoaded', function() {
    //   var elems = document.querySelector('#textarea1');
    //   elems.value = 'Content';
    //   // $('#textarea1').val('New Text');
    //   var instances = M.textareaAutoResize(elems, {});
    //   // M.textareaAutoResize($('#textarea1'));
    // });

  
  }

  renderTextArea(field) {
    const className = `input-field ${field.meta.touched && field.meta.error ? 'red lighten-2' : ''}`;
    return (
      <div className={className}>
        <textarea
          placeholder="Content"
          className="materialize-textarea"
          rows="40"
          cols="40" 
          {...field.input}
          />
        <div className="helper-text">
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    );
  }

  renderField(field) {
    const className = `input-field ${field.meta.touched && field.meta.error ? 'red lighten-2' : ''}`;
    return (
      <div className={className}>
        <input
          type="text"
          className="form-control"
          placeholder={field.placeholder}
          {...field.input}
        />
        <div className="helper-text">
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    // this ==== component
    // console.log(values);
    this.props.createPost(values, () => {
      this.props.history.push("/");
    });
  }

  render() {

    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          placeholder="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          placeholder="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          placeholder="Content"
          name="content"
          component={this.renderTextArea}
          id="textarea1"
        />
        <button className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate_post(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a title";
  }

  if (!values.categories) {
    errors.categories = "Enter a category";
  }

  if (!values.content) {
    errors.content = "Enter some content";
  }

  return errors;
}


export default reduxForm({
  validate: validate_post,
  form: 'PostsNewForm'
})(
  connect(null, { createPost })(PostsNew)
);