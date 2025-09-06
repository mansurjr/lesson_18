import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import NotFound from "./404";
import Home from "./Main/Main";
import SignUp from "./SignUp";
import MainProfileView from "./Main/MainProfileView";
import Posts from "./Posts/Posts";
import PostsDetailView from "./Posts/PostsDetailView";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostsDetailView />} />
        <Route path="/user/:id" element={<MainProfileView />} />
      </Route>
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />a
    </Routes>
  );
};

export default AppRouter;
