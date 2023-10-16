"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./navigationmenu.module.css"; // Import CSS module for styles

export default function NavigationMenu() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h1 className="text-3xl font-bold text-white">My Portfolio</h1>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className={`text-gray-300 focus:outline-none menu-icon ${
              isMenuOpen ? "open" : ""
            }`}
          >
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
          <div
            className={`overlay ${
              isMenuOpen ? "active" : ""
            } transition ease-in-out duration-150`}
            onClick={toggleMenu}
          >
            <nav className={`nav-links  ${isMenuOpen ? "active" : ""} `}>
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-white block py-2 text-2xl hover:text-gray-300 hover:scale-105 transition-transform duration-200 ease-in-out"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <nav className="hidden lg:flex flex-grow items-center justify-center bg-slate-800">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-gray-300 px-3 py-2 rounded-md text-2xl font-medium cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
