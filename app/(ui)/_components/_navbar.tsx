"use client";
import React, { useState } from "react";
import Link from "next/link";
import JagguarLogo from "@/app/(ui)/_components/_logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-red-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-white text-lg font-bold">
            <JagguarLogo />
          </Link>
        </div>
        <div
          className={`hidden lg:flex lg:gap-x-12 lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex space-x-4 lg:flex-grow">
            <NavItem href="/ui/ourstory">Our Story</NavItem>
            <NavItem href="/ui/services">Services</NavItem>
            <NavItem href="/ui/portfolio">Portfolio</NavItem>
            <NavItem href="/ui/ourclients">Our Clients</NavItem>
            <NavItem href="/ui/contactus">Contact Us</NavItem>
          </ul>
        </div>
        <div className="md:hidden">
          {/* Hamburger  */}
          <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
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
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export function NavItem({ href, children }: { href: any; children: any }) {
  return (
    <li>
      <Link href={href} className="text-white hover:text-gray-300">
        {children}
      </Link>
    </li>
  );
}
