import React from "react";
import { Link } from "react-router-dom";
import {House, CircleUser, LogIn, BookCopy } from "lucide-react"

const NavBar2 = () => {
  const navItems = [
    { name: "Home", icon: <House color="#000000" />, path: "/" },
    { name: "About", icon: <BookCopy color="#000000" />, path: "/about" },
    { name: "Contact", icon:<CircleUser color="#000000" />, path: "/contact" },
    { name: "Login", icon: <LogIn color="#000000" />, path: "/login" }
  ];

  return (
    <div>
      <nav className="bg-gradient-to-l from-blue-200 to-yellow-200 p-4">
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="flex items-center hover:bg-blue-200 p-2 rounded-md"
              >
                {item.icon}
                <span className="ml-2">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar2;
