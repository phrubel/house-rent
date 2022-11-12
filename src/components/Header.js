import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/img/logo.svg";

const Header = () => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center ">
      <Link to='/'>
        <img src={logo} alt="" />
      </Link>

      <div className="flex items-center gap-6">
        <Link className="hover:bg-cyan-600 px-4 py-3 rounded-lg transition" to="">Sign in</Link>
        <Link className="bg-cyan-500 hover:bg-cyan-600 px-4 py-3 text-white rounded-lg transition" to="">Sign Up</Link>
      </div>
      </div>

    </header>
  );
};

export default Header;
