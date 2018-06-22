import { combineReducers } from 'redux';


import PostReducer from './reducers_posts';

const rootReducer = combineReducers({
  posts: PostReducer,
});



export default rootReducer;

