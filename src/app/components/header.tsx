"use client";
import React, { useState } from "react";
import Link from "next/link";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-2xl font-bold text-gray-800">Malbusaat</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link href="/shop" className="text-gray-600 hover:text-gray-900">Shop</Link>
            <Link href="/categories" className="text-gray-600 hover:text-gray-900">Categories</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            <span className="text-gray-600 cursor-pointer">🛒</span>
            <span className="text-gray-600 cursor-pointer">👤</span>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block text-gray-600 hover:text-gray-900">Home</Link>
            <Link href="/shop" className="block text-gray-600 hover:text-gray-900">Shop</Link>
            <Link href="/categories" className="block text-gray-600 hover:text-gray-900">Categories</Link>
            <Link href="/contact" className="block text-gray-600 hover:text-gray-900">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};








// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false); // Burger menu state
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Shop dropdown state

//   return (
//     <div className="relative z-50 bg-gradient-to-r from-black via-black to-red-500">
//       <div className="backdrop-blur-xl bg-white/10 p-4 rounded-xl shadow-lg">
//         <nav className="flex items-center justify-between rounded-xl bg-gradient-to-r from-black via-red-500 to-black text-white opacity-90 p-4">
//           {/* Logo */}
//           <Image src="/vercel.svg" alt="Logo" width={40} height={40} />

//           {/* Desktop Navigation */}
//           <ul className="hidden md:flex gap-10 text-xl">
//             <li className="cursor-pointer hover:text-gray-400">Home</li>
//             <li
//               className="relative cursor-pointer"
//               onMouseEnter={() => setIsDropdownOpen(true)}
//               onMouseLeave={() => setIsDropdownOpen(false)}
//             >
//               <div className="flex items-center gap-2 hover:text-gray-400">
//                 Shop
//                 <svg
//                   width="10"
//                   height="7"
//                   className={`transition-transform ${
//                     isDropdownOpen ? "rotate-180" : ""
//                   }`}
//                   viewBox="0 0 10 7"
//                 >
//                   <path
//                     d="m1 1 4 4 4-4"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                   />
//                 </svg>
//               </div>
//               {isDropdownOpen && (
//                 <ul className="absolute left-0 mt-2 w-48 bg-black text-white rounded-lg shadow-lg py-2">
//                   <li className="px-4 py-2 hover:bg-gray-700">White Oud</li>
//                   <li className="px-4 py-2 hover:bg-gray-700">Oud e Misar</li>
//                   <li className="px-4 py-2 hover:bg-gray-700">Prince</li>
//                 </ul>
//               )}
//             </li>
//             <li className="cursor-pointer hover:text-gray-400">About Us</li>
//             <li className="cursor-pointer hover:text-gray-400">Contact</li>
//           </ul>

//           {/* Sign In (Desktop) */}
//           <span className="hidden md:flex gap-4 cursor-pointer">Sign In</span>

//           {/* Hamburger Icon (Only visible on mobile) */}
//           <button
//             className="md:hidden focus:outline-none"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <svg
//               width="30"
//               height="30"
//               viewBox="0 0 24 24"
//               fill="white"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M3 6h18M3 12h18m-18 6h18"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//               />
//             </svg>
//           </button>
//         </nav>

//         {/* Mobile Menu (Opens when isOpen = true) */}
//         <div
//           className={`fixed top-0 right-0 h-full w-64 bg-black text-white shadow-lg p-6 transform transition-transform duration-300 ${
//             isOpen ? "translate-x-0" : "translate-x-full"
//           }`}
//         >
//           {/* Close Button */}
//           <button
//             className="absolute top-4 right-4 text-white text-2xl"
//             onClick={() => setIsOpen(false)}
//           >
//             ✕
//           </button>

//           {/* Mobile Navigation */}
//           <ul className="flex flex-col gap-6 text-lg mt-10">
//             <li onClick={() => setIsOpen(false)}>Home</li>
//             <li
//               className="cursor-pointer"
//               onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//             >
//               Shop
//               {isDropdownOpen && (
//                 <ul className="mt-2 bg-gray-900 rounded-lg">
//                   <li className="px-4 py-2 hover:bg-gray-700">White Oud</li>
//                   <li className="px-4 py-2 hover:bg-gray-700">Oud e Misar</li>
//                   <li className="px-4 py-2 hover:bg-gray-700">Prince</li>
//                 </ul>
//               )}
//             </li>
//             <li onClick={() => setIsOpen(false)}>About Us</li>
//             <li onClick={() => setIsOpen(false)}>Contact</li>
//             <li onClick={() => setIsOpen(false)}>Sign In</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Navbar;
