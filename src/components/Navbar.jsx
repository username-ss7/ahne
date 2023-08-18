import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <nav className="bg-blue-950 p-3 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-semibold font-roboto font-sans text-2xl ml-5">
          ANHE
        </div>

        <div className="lg:hidden">
          {/* Hamburger Icon */}

          <button
            className="text-white p-2 focus:outline-none"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Drawer */}

        {isDrawerOpen && (
          <div className="lg:hidden absolute top-0 right-0 h-screen w-64 bg-blue-950 text-white p-4 transition-transform transform translate-x-0">
            <button
              className="text-white p-2 focus:outline-none absolute top-2 right-2"
              onClick={() => setIsDrawerOpen(false)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-blue-500"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-white hover:text-blue-500"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/insurance"
                  className="text-white hover:text-blue-500"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  Insurance
                </Link>
              </li>

              <li>
                <Link
                  to="/Policy"
                  className="text-white hover:text-blue-500"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-white hover:text-blue-500"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/DropShipping"
                  className="text-white hover:text-blue-500"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  DropShipping
                </Link>
              </li>

              <li>
                <Link
                  to="/TandT"
                  className="text-white hover:text-blue-500"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  Tours&Travel
                </Link>
              </li>

              <li>
                <Link
                  to="/Detail"
                  className="text-white hover:text-blue-500"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  Details
                </Link>
              </li>
            </ul>

            <div className="mt-4">
              <button className="bg-sky-500 rounded-md p-3 font-semibold">
                Get a Quote
              </button>
            </div>
          </div>
        )}

        <ul className="hidden lg:flex space-x-4">
          <li>
            <Link
              to="/"
              className="text-white hover:text-blue-500"
              activeClassName="font-bold"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="text-white hover:text-blue-500"
              activeClassName="font-bold"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/insurance"
              className="text-white hover:text-blue-500"
              activeClassName="font-bold"
            >
              Insurance
            </Link>
          </li>

          <li>
            <Link
              to="/Policy"
              className="text-white hover:text-blue-500"
              activeClassName="font-bold"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white hover:text-blue-500"
              activeClassName="font-bold"
            >
              Contact
            </Link>
          </li>

          <li>
                <Link
                  to="/DropShipping"
                  className="text-white hover:text-blue-500"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  DropShipping
                </Link>
              </li>

              <li>
                <Link
                  to="/TandT"
                  className="text-white hover:text-blue-500"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  Tours&Travel
                </Link>
              </li>

              <li>
                <Link
                  to="/Detail"
                  className="text-white hover:text-blue-500"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  Details
                </Link>
              </li>
        </ul>

        <div className="hidden lg:flex justify-center text-white ">
          <button className="bg-sky-500 rounded-md p-3 font-semibold">
            Get a Quote
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
