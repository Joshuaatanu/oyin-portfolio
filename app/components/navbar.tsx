"use client";

import { useState } from "react";
import Link from "next/link";
import { FaInstagram, FaDribbble, FaBehance } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 h-screen bg-black text-white flex flex-col justify-between py-8 px-6 w-20 lg:w-64 transition-all duration-300">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wide lg:text-3xl">OS</div>

      {/* Nav Links */}
      <ul className="space-y-6 mt-10 text-sm lg:text-base">
        {["HOME", "ABOUT", "SERVICES", "WORKS"].map((item, index) => (
          <li key={index}>
            <Link
              href={`/${item.toLowerCase()}`}
              className="relative block w-max font-medium uppercase tracking-wide text-gray-400 hover:line-through hover:s transition duration-200"
            >
              {item}
              {/* Underline Effect */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Social Icons */}
      <div className="flex flex-col space-y-4">
        <Link href="https://www.behance.net/" target="_blank">
          <FaBehance className="w-6 h-6 text-gray-400 hover:text-white transition duration-200" />
        </Link>
        <Link href="https://dribbble.com/" target="_blank">
          <FaDribbble className="w-6 h-6 text-gray-400 hover:text-white transition duration-200" />
        </Link>
        <Link href="https://www.instagram.com/" target="_blank">
          <FaInstagram className="w-6 h-6 text-gray-400 hover:text-white transition duration-200" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
