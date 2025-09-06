import React from "react";
import { useParams, Link } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import { useFetch } from "../../hooks/useFetch";

const UserView = () => {
  const { id } = useParams();
  const { data: user, loading, error } = useFetch(`users/${id}`);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[80vh]">
        <PuffLoader color="blue" />
      </div>
    );

  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="flex justify-center items-center min-h-[80vh] px-6 py-12">
      <div className="grid md:grid-cols-2 gap-10 bg-white rounded-xl shadow-lg p-6 max-w-4xl w-full">
        {/* Avatar */}
        <div>
          <img
            src={`https://i.pravatar.cc/400?u=${user.id}`}
            alt={user.name}
            className="w-full h-80 object-cover bg-gray-100 rounded-lg shadow-md"
          />
        </div>

        {/* User Details */}
        <div>
          <h1 className="text-3xl font-bold">{user.name}</h1>
          <p className="text-gray-600 mt-2">{user.email}</p>

          <div className="mt-6 space-y-2 text-gray-700">
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a
                href={`http://${user.website}`}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline">
                {user.website}
              </a>
            </p>
            <p>
              <strong>Company:</strong> {user.company?.name}
            </p>
            <p>
              <strong>Address:</strong>{" "}
              {`${user.address?.suite}, ${user.address?.street}, ${user.address?.city} (${user.address?.zipcode})`}
            </p>
          </div>

          <div className="mt-6">
            <Link to="/" className="text-blue-500 hover:underline">
              ← Back to Users
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserView;
