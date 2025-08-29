
export const loading = () => ({ type: "LOADING" });
export const error = (err) => ({ type: "ERROR", payload: err });
export const fetchPostsSuccess = (posts) => ({ type: "FETCH_POSTS_SUCCESS", payload: posts });
export const addPostSuccess = (post) => ({ type: "ADD_POST_SUCCESS", payload: post });
export const updatePostSuccess = (post) => ({ type: "UPDATE_POST_SUCCESS", payload: post });
export const deletePostSuccess = (id) => ({ type: "DELETE_POST_SUCCESS", payload: id });
