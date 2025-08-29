
import React from "react";
import { useDispatch } from "react-redux";
import { deletePost, updatePost } from "../redux/thunks";

export default function PostDetails({ post, canEdit }){
  const dispatch = useDispatch();
  const onDelete = () => {
    if(window.confirm("Delete this post?")){
      dispatch(deletePost(post.id));
    }
  };
  const onEdit = () => {
    const newTitle = prompt("New title:", post.title);
    if(newTitle && newTitle.trim().length > 0){
      dispatch(updatePost({ ...post, title: newTitle }));
    }
  };
  return (
    <div className="card h-100 shadow-sm">
      {post.image && <img src={post.image} className="card-img-top" alt={post.title} />}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.description}</p>
        <div className="mt-auto">
          <div className="d-flex justify-content-between">
            <small className="text-muted">{new Date(post.date).toLocaleDateString()} • {post.category} • by {post.author || "anon"}</small>
            <small className="text-muted">★ {post.popularity ?? 0}</small>
          </div>
          {canEdit && (
            <div className="mt-2">
              <button className="btn btn-warning btn-sm me-2" onClick={onEdit}>Edit</button>
              <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
