import React from "react";
import { PuffLoader } from "react-spinners";
import ProductSkeleton from "../../components/Skeleton";
import { useFetch } from "../../hooks/useFetch";
import MainView from "./MainView";

const Home = () => {
  const { data, loading, error } = useFetch("users");
  return <MainView data={data} loading={loading} error={error} />;
};

export default Home;
