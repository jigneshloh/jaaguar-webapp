"use client";
import React, { useState } from 'react';
import { NavItem } from './_navbar';
import JagguarLogo from './_logo';
import Link from 'next/link';

export default function Navbar2() {
 const [isOpen, setIsOpen] = useState(false);

 return (
    <nav className="bg-red-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-white text-lg font-bold">
            <JagguarLogo />
          </Link>
        </div>
    
     {/* <div className={`w-full block flex-grow lg:flex lg:items-center 
     lg:w-auto ${isOpen ? "block" : "hidden"}`}
     > */}
           <div
          className={` w-full block flex-grow  lg:flex  lg:items-center lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >

    
       {/* <div className="text-sm lg:flex-grow"> */}
         {/* <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           First Link
         </a>
         <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           Second Link
         </a>
         <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           Third Link
         </a>
         <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           Fourth Link
         </a> */}
            <ul className="text-sm lg:flex-grow">
          <NavItem href="/ui/ourstory">Our Story</NavItem>
            <NavItem href="/ui/services">Services</NavItem>
            <NavItem href="/ui/portfolio">Portfolio</NavItem>
            <NavItem href="/ui/ourclients">Our Clients</NavItem>
            <NavItem href="/ui/contactus">Contact Us</NavItem>
            </ul>
       {/* </div> */}
       <div>
         <button className="inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white">
           Click Me
         </button>
       </div>
     </div>
     <div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
       >
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
     </div>
     </div>
   </nav>
 );
};