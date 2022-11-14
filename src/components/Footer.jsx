import React from "react";
import { Link } from "react-router-dom";

import Copyright from "./Copyright";

// import icon
import { FaFacebook, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer-1 bg-black text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4"
          >
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
              <h5 className="text-xl font-bold mb-6">Features</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <p className="border-b border-solid border-transparent hover:text-violet-700 cursor-pointer">
                    Cool stuff
                  </p>
                </li>
                <li className="mb-2">
                  <p className="border-b border-solid border-transparent hover:text-violet-700 cursor-pointer">
                    Random feature
                  </p>
                </li>
                <li className="mb-2">
                  <p className="border-b border-solid border-transparent hover:text-violet-700 cursor-pointer">
                    Team feature
                  </p>
                </li>
                <li className="mb-2">
                  <p className="border-b border-solid border-transparent hover:text-violet-700 cursor-pointer">
                    Stuff for developers
                  </p>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
              <h5 className="text-xl font-bold mb-6">Resources</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <p className="border-b border-solid border-transparent  hover:text-violet-800 cursor-pointer">
                    Resource
                  </p>
                </li>
                <li className="mb-2">
                  <p className="border-b border-solid border-transparent  hover:text-violet-800 cursor-pointer">
                    Resource name
                  </p>
                </li>
                <li className="mb-2">
                  <p className="border-b border-solid border-transparent  hover:text-violet-800 cursor-pointer">
                    Another resource
                  </p>
                </li>
                <li className="mb-2">
                  <p className="border-b border-solid border-transparent  hover:text-violet-800 cursor-pointer">
                    Final resource
                  </p>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <h5 className="text-xl font-bold mb-6">About</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <p className="border-b border-solid border-transparent hover:text-violet-800 cursor-pointer">
                    Team
                  </p>
                </li>
                <li className="mb-2">
                  <p className="border-b border-solid border-transparent hover:text-violet-800 cursor-pointer">
                    Locations
                  </p>
                </li>
                <li className="mb-2">
                  <p className="border-b border-solid border-transparent hover:text-violet-800 cursor-pointer">
                    Privacy
                  </p>
                </li>
                <li className="mb-2">
                  <p className="border-b border-solid border-transparent hover:text-violet-800 cursor-pointer">
                    Terms
                  </p>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <h5 className="text-xl font-bold mb-6">Help</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <p className="border-b border-solid border-transparent hover:text-violet-800 cursor-pointer">
                    Support
                  </p>
                </li>
                <li className="mb-2">
                  <p className="border-b border-solid border-transparent hover:text-violet-800 cursor-pointer">
                    Help Center
                  </p>
                </li>
                <li className="mb-2">
                  <p className="border-b border-solid border-transparent hover:text-violet-800 cursor-pointer">
                    Contact Us
                  </p>
                </li>
              </ul>
            </div>
            <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
              <Link to="/">
                <h1 className="text-2xl text-violet-700 font-bold mb-6 sm:text-center xl:text-left">
                  Elite <span className="text-rose-500">Rentals.</span>
                </h1>
              </Link>
              <div className="flex sm:justify-center xl:justify-start">
                <a
                  href="https://www.facebook.com/parvezhasanrubel42"
                  className="w-8 h-8 text-center underline-none  text-white py-1 text-gray-600 cursor-pointer"
                >
                  <FaFacebook className="text-semibold" />
                </a>
                <a
                  href="https://twitter.com/phrubel42"
                  className="w-8 h-8 text-center underline-none text-white py-1 ml-2 text-gray-600 cursor-pointer"
                >
                  <FaTwitterSquare className="text-semibold" />
                </a>
                <a
                  href="https://www.instagram.com/phrubel42/"
                  className="w-8 h-8 text-center underline-none text-white py-1 ml-2 text-gray-600 cursor-pointer "
                >
                  <FaInstagramSquare className="text-semibold" />
                </a>
              </div>
            </div>
          </div>
          <Copyright />
        </div>
      </footer>
    </>
  );
};

export default Footer;
