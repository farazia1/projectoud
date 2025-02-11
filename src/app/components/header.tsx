"use client";
import Image from 'next/image';
import React, { useState, useRef } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement | null>(null);

  return (
    <div className=" relative z-50 bg-gradient-to-r  from-black via-black to-red-500 ">

<div className="backdrop-blur-xl bg-white/10 p-10 rounded-xl shadow-lg">
      <nav className='flex  items-center  justify-between rounded-xl bg-gradient-to-r  from-black  via-red-500 to-black  text-white opacity-70 mt-4 p-4'>
        <Image src="/vercel.svg" alt="not found" width={20} height={20} />
        <ul className='flex gap-10 text-xl'>
          <li>Home</li>
          <li 
            className='relative' 
            ref={dropdownRef} 
            onMouseEnter={() => setIsOpen(true)} 
            onMouseLeave={() => setIsOpen(false)}
          >
            <div className="flex items-center gap-2 cursor-pointer hover:text-gray-400">
              shop
              <svg
                role="presentation"
                focusable="false"
                width="10"
                height="7"
                className={`icon icon-chevron-bottom transition-transform ${
                  isOpen ? 'rotate-180' : ''
                }`}
                viewBox="0 0 10 7"
                >
                <path
                  d="m1 1 4 4 4-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            {isOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-gradient-to-r  from-black via-black to-red-500 text-white rounded-lg shadow-lg py-2">
                <li className="px-4 py-2 hover:bg-gray-100">White Oud</li>
                <li className="px-4 py-2 hover:bg-gray-100">Oud e Misar</li>
                <li className="px-4 py-2 hover:bg-gray-100">Prince</li>
              </ul>
            )}
          </li>
          <li>About us</li>
          <li>Contact</li>
        </ul>
        <span className='flex gap-4'>
          <span>sign in</span>
        </span>
      </nav>
            </div>
            </div>

  );
};

export default Header;
