import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';

const API_KEY = "adriana4567klu";
const ROOT_URL = "http://reduxblog.herokuapp.com/api/";

export function fetchPosts(){
  const request = axios.get(`${ROOT_URL}posts?key=${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  }

}

export function featchPost(id){
  const request = axios.get(`${ROOT_URL}posts/${id}?key=${API_KEY}`);

  return {
    type: FEATCH_POST,
    payload: request
  };
}