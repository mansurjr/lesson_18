import React from "react";
import { useNavigate } from "react-router-dom";
import ProductSkeleton from "../../components/Skeleton";

const MainView = ({ data, loading, error }) => {
  const navigate = useNavigate();

  if (loading) {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Users</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: users.length }).map((_, i) => (
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
      <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-48 object-contain bg-gray-50"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg">{item.title}</h2>
              <p className="text-sm text-gray-500 line-clamp-2">
                {item.description}
              </p>

              <div className="mt-3 text-sm text-gray-600">
                <p>Brand: {item.brand}</p>
                <p>Stock: {item.stock}</p>
              </div>

              <button
                onClick={() => navigate(`/product/${item.id}`)}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition cursor-pointer">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainView;
