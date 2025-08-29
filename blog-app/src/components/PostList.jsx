
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/thunks";
import PostDetails from "./PostDetails";

export default function PostList(){
  const { posts, loading, error } = useSelector(s => s.postsState);
  const dispatch = useDispatch();
  const isAuth = !!localStorage.getItem("auth");

  const [sortBy, setSortBy] = useState("date_desc");
  const [category, setCategory] = useState("all");
  const [author, setAuthor] = useState("all");

  useEffect(() => { dispatch(fetchPosts()); }, [dispatch]);

  const categories = useMemo(() => ["all", ...new Set(posts.map(p => p.category).filter(Boolean))], [posts]);
  const authors = useMemo(() => ["all", ...new Set(posts.map(p => p.author || "anon"))], [posts]);

  const filtered = useMemo(() => {
    let data = [...posts];
    if(category !== "all") data = data.filter(p => p.category === category);
    if(author !== "all") data = data.filter(p => (p.author || "anon") === author);
    if(sortBy === "date_desc") data.sort((a,b) => new Date(b.date) - new Date(a.date));
    if(sortBy === "date_asc") data.sort((a,b) => new Date(a.date) - new Date(b.date));
    if(sortBy === "pop_desc") data.sort((a,b) => (b.popularity ?? 0) - (a.popularity ?? 0));
    if(sortBy === "pop_asc") data.sort((a,b) => (a.popularity ?? 0) - (b.popularity ?? 0));
    return data;
  }, [posts, sortBy, category, author]);

  return (
    <div className="container my-4">
      <h2 className="mb-3">All Blog Posts</h2>

      <div className="row g-2 align-items-end mb-3">
        <div className="col-sm-4">
          <label className="form-label">Sort by</label>
          <select className="form-select" value={sortBy} onChange={e=>setSortBy(e.target.value)}>
            <option value="date_desc">Newest first</option>
            <option value="date_asc">Oldest first</option>
            <option value="pop_desc">Popularity ↓</option>
            <option value="pop_asc">Popularity ↑</option>
          </select>
        </div>
        <div className="col-sm-4">
          <label className="form-label">Filter by Category</label>
          <select className="form-select" value={category} onChange={e=>setCategory(e.target.value)}>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div className="col-sm-4">
          <label className="form-label">Filter by Author</label>
          <select className="form-select" value={author} onChange={e=>setAuthor(e.target.value)}>
            {authors.map(a => <option key={a} value={a}>{a}</option>)}
          </select>
        </div>
      </div>

      {loading && <div className="alert alert-info">Loading...</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <div className="row g-3">
        {filtered.map(p => (
          <div className="col-md-4" key={p.id}>
            <PostDetails post={p} canEdit={isAuth} />
          </div>
        ))}
        {filtered.length === 0 && !loading && <p>No posts found.</p>}
      </div>
    </div>
  );
}
