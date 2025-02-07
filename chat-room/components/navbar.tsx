// components/Navbar.js
"use client";
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
const Navbar = () => {
  const {data:session,status}=useSession();
   if(!(status==="loading"))
  return (
    <nav className="bg-gray-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">
          <Link href="/">
            ChatApp
          </Link>
        </div>
        <div className="space-x-6">
          {session?
          <>
           
            <span onClick={()=>{signOut()}} className="text-white hover:text-gray-300 cursor-pointer">Signout</span>
          
          </>:  
           
            <span onClick={()=>{signIn()}} className="text-white hover:text-gray-300 cursor-pointer">Signin/Signup</span>
          
          }
          
          <Link href="/about">
            <span className="text-white hover:text-gray-300 cursor-pointer">About</span>
          </Link>
          <Link href="/rooms">
            <span className="text-white hover:text-gray-300 cursor-pointer">Join Room</span>
          </Link>
          <Link href="/contact">
            <span className="text-white hover:text-gray-300 cursor-pointer">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
