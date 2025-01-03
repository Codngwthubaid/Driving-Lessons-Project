"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image';
import MainLogo from "@/public/img/MainLogo.png"


const Navbar = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
  };

  return (
    <header className="bg-black fixed w-full z-20 ">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className='flex justify-center items-center'>
          <Link href="/">
            <Image
              src={MainLogo}
              alt="Logo"
              className='w-[300px] '
            />
          </Link>
        </div>
        <ul className="hidden md:flex justify-between items-center">
          <li className="mr-8 p-1">
            <Link href="/" className="text-xl text-green-400 hover:font-semibold">Home</Link>
          </li>
          <li className="mr-8 p-1">
            <Link href="/pages/about" className="text-xl text-green-400 hover:font-semibold">Over ons</Link>
          </li>
          <li className="mr-8 p-1">
            <Link href="/pages/courses" className="text-xl text-green-400 hover:font-semibold">Pakketten</Link>
          </li>
          <li className="mr-8 p-1">
            <Link href="/pages/pricing" className="text-xl text-green-400 hover:font-semibold">Tarieven</Link>
          </li>
          <li className="mr-8 p-1">
            <Link href="/pages/contact" className="text-xl text-green-400 hover:font-semibold">Contact</Link>
          </li>
        </ul>
        <div className="md:hidden flex justify-center" onClick={handleMobileMenu}>
          <Sheet>
            <SheetTrigger>
              <svg xmlns="http://www.w3.org/2000/svg" fill='white' x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
                <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
              </svg>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetDescription>
                  <ul className='h-[100vh] flex flex-col justify-center border border-red-500'>
                    <li onClick={handleMobileMenu} className="py-2 transition duration-300 ease-in-out" style={{ transitionDelay: '100ms' }}>
                      <Link href="/" className="text-xl text-gray-700 hover:font-semibold">Home</Link>
                    </li>
                    <li onClick={handleMobileMenu} className="py-2 transition duration-300 ease-in-out" style={{ transitionDelay: '200ms' }}>
                      <Link href="/pages/about" className="text-xl text-gray-700 hover:font-semibold">Over ons</Link>
                    </li>
                    <li onClick={handleMobileMenu} className="py-2 transition duration-300 ease-in-out" style={{ transitionDelay: '300ms' }}>
                      <Link href="/pages/courses" className="text-xl text-gray-700 hover:font-semibold">Pakketten</Link>
                    </li>
                    <li onClick={handleMobileMenu} className="py-2 transition duration-300 ease-in-out" style={{ transitionDelay: '300ms' }}>
                      <Link href="/pages/pricing" className="text-xl text-gray-700 hover:font-semibold">Tarieven</Link>
                    </li>
                    <li onClick={handleMobileMenu} className="py-2 transition duration-300 ease-in-out" style={{ transitionDelay: '300ms' }}>
                      <Link href="/pages/contact" className="text-xl text-gray-700 hover:font-semibold">Contact</Link>
                    </li>
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>

  );
};

export default Navbar;
