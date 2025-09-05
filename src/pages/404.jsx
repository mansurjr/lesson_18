import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 px-6">
      <h1 className="text-[120px] font-extrabold text-blue-600 drop-shadow-lg">
        404
      </h1>
      <h2 className="text-3xl font-bold text-gray-800 mt-2">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 mt-4 max-w-md text-center">
        The page you’re looking for doesn’t exist or has been moved. Please
        check the URL or go back to the homepage.
      </p>

      <Link
        to="/"
        className="mt-8 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-lg shadow hover:from-blue-600 hover:to-blue-800 transition">
        ← Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
