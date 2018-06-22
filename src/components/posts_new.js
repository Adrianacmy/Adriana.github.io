import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createPost } from '../actions';

class PostsNew extends React.Component{

  renderField (field){
    const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : '' }`; 
    return (
      <div className={className}>
        <input 
        type="text"
        className="form-control"
        placeholder={field.placeholder}
        {...field.input}
        />
        <div className="text-help">
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values){
    // this ==== component
    // console.log(values);
    this.props.createPost(values, () => {
      this.props.history.push("/");
    });
  }

  render(){

    const {handleSubmit} = this.props;

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
          component={this.renderField}
        />
        <button className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate_post(values){
  const errors = {};

  if(!values.title){
    errors.title = "Enter a title";
  }

  if(!values.categories){
    errors.categories = "Enter a category";
  }

  if(!values.content){
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