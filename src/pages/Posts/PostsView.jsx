import React from "react";
import { useNavigate } from "react-router-dom";
import ProductSkeleton from "../../components/Skeleton";

const PostsView = ({ posts, loading, error }) => {
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Posts</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <ProductSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <p className="mt-5 font-normal text-2xl text-center text-red-500">
        {error}
      </p>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Posts</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition p-4 flex flex-col justify-between">
            <h2 className="font-semibold text-lg line-clamp-2">{post.title}</h2>
            <p className="text-sm text-gray-600 mt-2 line-clamp-3">
              {post.body}
            </p>

            <button
              onClick={() => navigate(`/posts/${post.id}`)}
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition cursor-pointer">
              Read More →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsView;
