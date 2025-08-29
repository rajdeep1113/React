
import axios from "axios";
import { loading, error, fetchPostsSuccess, addPostSuccess, updatePostSuccess, deletePostSuccess } from "./actions";

const API = "http://localhost:5000/posts";

export const fetchPosts = () => async (dispatch) => {
  try{
    dispatch(loading());
    const res = await axios.get(API);
    dispatch(fetchPostsSuccess(res.data));
  }catch(e){
    dispatch(error(e.message));
  }
};

export const addPost = (post) => async (dispatch) => {
  try{
    dispatch(loading());
    const res = await axios.post(API, post);
    dispatch(addPostSuccess(res.data));
  }catch(e){
    dispatch(error(e.message));
  }
};

export const updatePost = (post) => async (dispatch) => {
  try{
    dispatch(loading());
    const res = await axios.put(`${API}/${post.id}`, post);
    dispatch(updatePostSuccess(res.data));
  }catch(e){
    dispatch(error(e.message));
  }
};

export const deletePost = (id) => async (dispatch) => {
  try{
    dispatch(loading());
    await axios.delete(`${API}/${id}`);
    dispatch(deletePostSuccess(id));
  }catch(e){
    dispatch(error(e.message));
  }
};
