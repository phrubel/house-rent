import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center ">
        <Link to="/">
          <h1 className="text-2xl text-violet-700 font-bold mb-6 sm:text-center xl:text-left">
            Elite <span className="text-rose-500">Rentals.</span>
          </h1>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            className="hover:bg-cyan-600 px-4 py-3 rounded-lg transition"
            to=""
          >
            Sign in
          </Link>
          <Link
            className="bg-cyan-500 hover:bg-cyan-600 px-4 py-3 text-white rounded-lg transition"
            to=""
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
