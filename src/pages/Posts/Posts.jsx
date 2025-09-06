import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import ProductSkeleton from "../../components/Skeleton";
import PostsView from "./POstsView";

const Posts = () => {
  const { data = [], loading, error } = useFetch("posts?_limit=15");
  return (<PostsView posts={data} loading={loading} error={error} />)
};

export default Posts;
