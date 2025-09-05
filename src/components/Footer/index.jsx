import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6 mt-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <span className="font-medium">Fake API</span>
        <span className="mt-2 md:mt-0">
          © {new Date().getFullYear()} All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
