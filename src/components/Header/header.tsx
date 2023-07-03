"use client";

import { useState } from "react";
import MenuItem from "./components/MenuItem/MenuItem";

export const Header: React.FunctionComponent = () => {
  const [showMobileMenu, isShowingMobileMenu] = useState<boolean>(false);
  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav className="bg-white border-gray-200 px-4 lg:px-6  py-5 container mx-auto">
        <div className="flex flex-wrap justify-between items-center mx-auto ">
          <div>
            <h2 className="lg:text-3xl text-2xl text-red-500 uppercase">
              Emma felsing
            </h2>
          </div>
          <div className="flex items-right">
            <button
              onClick={() => isShowingMobileMenu(!showMobileMenu)}
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {/* here */}
          <div
            className={`${
              !showMobileMenu && "hidden"
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <MenuItem
                  isVisible={(value: boolean) => isShowingMobileMenu(value)}
                  link="#trusted"
                  text="Trusted by"
                />
              </li>
              <li>
                <MenuItem
                  link="#about"
                  text="About"
                  isVisible={(value: boolean) => isShowingMobileMenu(value)}
                />
              </li>
              <li>
                <MenuItem
                  link="#portfolio"
                  text="Portfolio"
                  isVisible={(value: boolean) => isShowingMobileMenu(value)}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
