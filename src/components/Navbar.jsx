import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="bg-blue-950 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div class="text-white font-semibold font-roboto font-sans text-2xl ml-5">
          ANHE
        </div>

        <ul className="flex space-x-4">
          <li m-2 p-2>
            {/* <a href="/" className="text-white hover:text-blue-500">
              Home
            </a> */}
            <Link
              to="/"
              className="text-white hover:text-blue-500"
              activeClassName="font-bold"
            >
              Home
            </Link>
          </li>

          <li m-2 p-2>
            <Link
              to="/about"
              className="text-white hover:text-blue-500"
              activeClassName="font-bold"
            >
              About
            </Link>
          </li>
          <li m-2 p-2>
            <Link
              to="/insurance"
              className="text-white hover:text-blue-500"
              activeClassName="font-bold"
            >
              Insurance
            </Link>
          </li>
          <li m-2 p-2>
            <Link
              to="/Policy"
              className="text-white hover:text-blue-500"
              activeClassName="font-bold"
            >
              Privacy Policy
            </Link>
          </li>
          <li m-2 p-2>
            <Link
              to="/contact"
              className="text-white hover:text-blue-500"
              activeClassName="font-bold"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex justify-center text-white ">
          <div>
            <button className="bg-sky-500 rounded-md  p-3 font-semibold">
              Get a Quote
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
