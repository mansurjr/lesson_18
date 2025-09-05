import React from "react";
import { NavLink } from "react-router-dom";
import { NAVBAR_MENU } from "../../static";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold text-blue-600">Fake API</h1>

        <nav className="flex gap-6">
          {NAVBAR_MENU?.map((menu, inx) => (
            <NavLink
              key={inx}
              to={menu.link}
              className={({ isActive }) =>
                `uppercase font-medium
                 ${
                   isActive
                     ? "text-blue-600 border-b-2 border-blue-600"
                     : "text-gray-700 hover:text-blue-500"
                 }`
              }>
              {menu.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
