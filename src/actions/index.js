import axios from 'axios';

export const FETCH_POSTS = 'fetch_post';

const API_KEY = "adriana4567klu";
const ROOT_URL = "http://reduxblog.herokuapp.com/api/";

export function fetchPosts(){
  const request = axios.get(`${ROOT_URL}posts?key=${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  }

}