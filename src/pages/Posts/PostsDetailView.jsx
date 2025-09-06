import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { PuffLoader } from "react-spinners";

const PostsDetailView = () => {
  const { id } = useParams();
  const { data: post, loading, error } = useFetch(`posts/${id}`);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[80vh]">
        <PuffLoader color="blue" />
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-500 text-lg mt-10">{error}</p>;
  }

  return (
    <div className="flex justify-center items-center min-h-[80vh] px-6 py-12">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl w-full">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700 mb-6">{post.body}</p>
      </div>
    </div>
  );
};

export default PostsDetailView;
