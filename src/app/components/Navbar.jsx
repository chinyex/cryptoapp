"use client";
import Image from "next/image";
import React from "react";
import ThemeToggle from "./ThemeToggle";
import { MenuIcon, X, Search, ChevronDown } from "lucide-react";
import Link from "next/link";

const menuItems = [
  { name: "Home", link: "/" },
  { name: "Features", link: "/features" },
  { name: "RoadMap", link: "/roadmap" },
  {
    name: "Pages",
    link: "#",
    dropdown: [
      { name: "Blog Grid Page", link: "/blog-grid" },
      { name: "Token Sale Page", link: "/token-sale" },
      { name: "Support Page", link: "/support" },
      { name: "Sign In", link: "/signin" },
      { name: "Sign Up", link: "/signup" },
    ],
  },
  { name: "Support", link: "/support" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = React.useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const togglePages = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  return (
    <div>
      <nav className="flex justify-between items-center p-4 bg-gray-900 shadow-md fixed top-0 left-0 right-0 z-10">
        <Image src={"/logo-white.svg"} alt="Logo" width={100} height={50} />

        {/* PC nav menuItems */}
        <div className="hidden md:flex gap-8 items-center">
          {menuItems.map((item, index) => (
            <div key={index} className="relative">
              {!item.dropdown ? (
                <Link
                  href={item.link}
                  className="text-gray-500 hover:text-green-300 transition-all"
                >
                  {item.name}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => togglePages(index)}
                    className="flex items-center gap-1 text-gray-500 hover:text-green-300 transition-all"
                  >
                    {item.name}
                    <ChevronDown
                      className={`${
                        openDropdownIndex === index ? "rotate-180" : ""
                      } transition-transform duration-200`}
                    />
                  </button>

                  {openDropdownIndex === index && (
                    <ul className="absolute left-0 bg-white dark:bg-gray-800 shadow-lg rounded-lg mt-2 p-4 w-48 z-20">
                      {item.dropdown.map((subItem, subIndex) => (
                        <li key={subIndex} className="py-2">
                          <Link
                            href={subItem.link}
                            className="block text-gray-500 hover:text-green-300 transition-all"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </div>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center justify-center space-x-8">
          {/* Search bar */}
          <div className="flex items-center justify-center space-x-0.5">
            <div className="hidden md:flex items-center border border-gray-300 dark:border-gray-700 rounded-full p-2">
              <Search className="text-gray-500" />
            </div>
            {/* Theme toggle */}
            <ThemeToggle />
          </div>

          {/* Sign In Button */}
          <button className="rounded-full border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-green-300 p-3 px-8 md:block hidden transition-all">
            Sign in
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`p-2 rounded-lg ${
              isOpen ? "border-2 border-green-300" : ""
            } dark:hover:bg-gray-700 md:hidden`}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-10 h-8" />
            ) : (
              <MenuIcon className="w-10 h-8" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 p-4 space-y-4">
          {menuItems.map((item, index) => (
            <div key={index} className="relative">
              {!item.dropdown ? (
                <Link
                  href={item.link}
                  className="block text-gray-500 hover:text-green-300 transition-all py-2"
                >
                  {item.name}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => togglePages(index)}
                    className="flex items-center justify-between w-full text-gray-500 hover:text-green-300 transition-all py-2"
                  >
                    {item.name}
                    <ChevronDown
                      className={`${
                        openDropdownIndex === index ? "rotate-180" : ""
                      } transition-transform duration-200`}
                    />
                  </button>

                  {openDropdownIndex === index && (
                    <ul className="pl-4 space-y-2 mt-2">
                      {item.dropdown.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subItem.link}
                            className="block text-gray-400 hover:text-green-300 transition-all py-1"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
        
      )}
    </div>
  );
};

export default Navbar;
