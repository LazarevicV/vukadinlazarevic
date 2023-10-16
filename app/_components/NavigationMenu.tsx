"use client";

import React from "react";
import Link from "next/link";

export default function NavigationMenu() {
  const links = [
    { href: "/", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const handleSmoothScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50, // Adjust for header height
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="bg-gray-800 py-6 podesi-visinu-contenta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white">My Portfolio</h1>
        <nav className="mt-4 flex justify-between">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              // onClick={(
              //   event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
              // ) => handleSmoothScroll(event, link.href.substring(1))}
              className="text-gray-300 px-3 py-2 rounded-md text-2xl font-medium charging-effect cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
