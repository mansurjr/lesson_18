import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import NotFound from "./404";
import Home from "./Main/Main";
import SignUp from "./SignUp";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/user" element={<User />} /> */}
        {/* <Route path="/product/:id" element={<ProductView />} /> */}
        {/* <Route path="/user/:id" element={<UserView />} /> */}

      </Route>
        <Route path="*"  element={<SignUp />} />
a
      {/* <Route path="/login" element={<Login />} /> */}
    </Routes>
  );
};

export default AppRouter;
