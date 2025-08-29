
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/thunks";

export default function PostForm(){
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    title: "", description: "", image: "", category: "", author: "", popularity: 0
  });

  const submit = (e) => {
    e.preventDefault();
    if(!form.title.trim() || !form.description.trim()){
      alert("Title and description are required"); return;
    }
    const payload = {
      ...form,
      id: Date.now(),
      date: new Date().toISOString()
    };
    dispatch(addPost(payload));
    alert("Post added!");
    setForm({ title: "", description: "", image: "", category: "", author: "", popularity: 0 });
  };

  const set = (k) => (e) => setForm(prev => ({ ...prev, [k]: e.target.value }));

  return (
    <div className="container my-4">
      <h2>Add New Post</h2>
      <form onSubmit={submit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Title *</label>
          <input className="form-control" value={form.title} onChange={set("title")} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Category</label>
          <input className="form-control" value={form.category} onChange={set("category")} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Author</label>
          <input className="form-control" value={form.author} onChange={set("author")} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Image URL</label>
          <input className="form-control" value={form.image} onChange={set("image")} />
        </div>
        <div className="col-12">
          <label className="form-label">Description *</label>
          <textarea className="form-control" rows="4" value={form.description} onChange={set("description")} />
        </div>
        <div className="col-md-4">
          <label className="form-label">Popularity (0-100)</label>
          <input type="number" className="form-control" value={form.popularity} onChange={set("popularity")} min="0" max="100" />
        </div>
        <div className="col-12">
          <button className="btn btn-primary">Add Post</button>
        </div>
      </form>
    </div>
  );
}
