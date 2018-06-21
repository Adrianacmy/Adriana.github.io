import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';

import PostsList from './components/posts_list';

import './index.css';
import App from './App';

// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


// import React from 'react';
// import ReactDOM from 'react-dom';


// import  PostsNew  from './components/posts_new';
// import  PostsDetail  from './components/posts_detail';

// import App from './components/app';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          {/* <Route path="/posts/new" component={PostsNew} /> */}
          {/* <Route path="/posts/:id" component={PostsDetail} /> */}
          <Route path="/posts" component={PostsList} />
          <Route path="/" component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#root'));
