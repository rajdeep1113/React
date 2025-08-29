
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

export default function App(){
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add" element={
          <PrivateRoute>
            <PostForm />
          </PrivateRoute>
        } />
      </Routes>
    </div>
  );
}
