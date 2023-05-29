"use client";

import React, { useState } from "react";
import Logo from "src/components/logo";
import Link from "next/link";

type ILink = {
  label: string;
  path: string;
  subLinks?: ILink[];
};
// Define your navigation links here
const links: ILink[] = [
  {
    label: "Home",
    path: "/",
    subLinks: [],
  },
  {
    label: "Server",
    path: "/users",
    subLinks: [
      {
        label: "SSG Users",
        path: "/users",
        subLinks: [],
      },
      {
        label: "ISR Users",
        path: "/isr/users",
      },
      {
        label: "SSR Users",
        path: "/ssr/users",
      },
    ],
  },
  {
    label: "Client",
    path: "/client/users",
    subLinks: [
      {
        label: "SSG Users",
        path: "/client/users",
      },
      {
        label: "SSR Users",
        path: "/client/ssr/users",
      },
      {
        label: "ISR Users",
        path: "/client/isr/users",
      },
      {
        label: "Cookie SSR Users",
        path: "/client/ssr/cookies",
      },
    ],
  },
];

interface IMenuLinkProps {
  link: ILink;
}
const MenuLink: React.FC<{ link: ILink }> = ({ link }) => {
  const hasSubLinks = link.subLinks && link.subLinks.length > 0;
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <li
      className={"relative group"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={link.path}
        className={`block pl-3 pr-4 py-2 ${
          hasSubLinks ? "flex items-center justify-between" : ""
        } hover:text-blue-600 hover:border-b-2 hover:border-blue-600 text-base font-medium text-white`}
      >
        {link.label}
        {hasSubLinks && (
          <span
            className={`ml-2 w-4 h-4 transition-transform transform group-hover:rotate-90`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        )}
      </Link>
      {hasSubLinks && (
        <ul className="hidden group-hover:block pl-6 absolute w-full min-w-[190px] bg-gray-900">
          {link.subLinks?.map((subLink) => (
            <MenuLink key={subLink.path} link={subLink} />
          ))}
        </ul>
      )}
    </li>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="text-white relative">
                <Logo />
              </a>
            </div>
            <div className="hidden sm:block">
              <ul className="ml-10 flex space-x-4">
                {links.map((link) => (
                  <MenuLink key={link.path} link={link} />
                ))}
              </ul>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center sm:hidden">
              <button
                onClick={toggleNavbar}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${isOpen ? "block" : "hidden"} sm:hidden`}
          id="mobile-menu"
        >
          <ul className="pt-2 pb-3 space-y-1">
            {links.map((link) => (
              <MenuLink key={link.path} link={link} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
