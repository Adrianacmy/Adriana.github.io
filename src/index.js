import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';

import PostsList from './components/posts_list';
import postsIndex from './components/postsIndex';
// import PostsDetails from './components/postsDetail';

import './index.css';
import App from './App';


import  PostsNew  from './components/posts_new';
// import  PostsDetail  from './components/posts_detail';
import  PostsDetailsFake from './components/postsDetail';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          {/* <Route path="/posts/:id" component={PostsDetail} /> */}
          <Route path="/posts" component={ PostsList } />
          <Route path="/PostsDetails" component={ PostsDetailsFake } />
          <Route path="/postsIndex" component={ postsIndex } />
          <Route path="/" component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#root'));
