import React, {Fragment, useState } from "react";
import Image from 'next/image'
import logo from '../public/assets/logo.png'
import { Menu, Transition } from '@headlessui/react'

const Navbar = () => {
  return <div className="bg-[#0e0e10] mb-[2px] z-10 fixed w-full h-14 flex-nowrap justify-between items-center">
         {/* left side */}
         <div className="flex grow items-center justify-start">
            <Image src={logo} width="36" height="36" alt="logo" />
            <p className="p-4 font-bold hover:text-[#9147ff]">Browse</p>
            <div className="p-4">
               <Menu>
                <Menu.Button></Menu.Button>
               </Menu>
            </div>
         </div>
          {/* middle section*/}
           {/* right side */}
  </div>;
};

export default Navbar;
