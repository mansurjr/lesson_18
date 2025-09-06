import React from "react";
import { useNavigate } from "react-router-dom";
import ProductSkeleton from "../../components/Skeleton";

const MainView = ({ data = [], loading, error }) => {
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Users</h1>
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
      <h1 className="text-3xl font-bold mb-6 text-center">Users</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <img
              src={`https://i.pravatar.cc/300?u=${user.id}`}
              alt={user.name}
              className="w-full h-48 object-cover bg-gray-50"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg">{user.name}</h2>
              <p className="text-sm text-gray-500">{user.email}</p>

              <div className="mt-3 text-sm text-gray-600">
                <p>Username: {user.username}</p>
                <p>Company: {user.company?.name}</p>
                <p>Website: {user.website}</p>
              </div>

              <button
                onClick={() => navigate(`/user/${user.id}`)}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition cursor-pointer">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainView;
