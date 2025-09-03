"use client";

import "../../styles/globals.css";

import Link from "next/link";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });
// import Image from "next/image";
// import styloNavLogo from '../../../public/Image/styloMiniLogo.png';

//  <Image src={styloNavLogo} alt="Picture of the Stylo logo"
//       width={120}
//       height={50}  />


import { Menu,  } from "lucide-react";
import { SlBag } from "react-icons/sl";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex h-14 items-center justify-between px-4">
        
        {/* Left - Mobile Menu */}
        <div className="flex items-center gap-4">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Menu    className="stroke-1" size="25" />
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <nav className="flex flex-col  font-bold gap-4 mt-8">
                <Link href="/men" onClick={() => setOpen(false)}>MEN</Link>
                <Link href="/women" onClick={() => setOpen(false)}>WOMEN</Link>
                <Link href="/secondhand" onClick={() => setOpen(false)}>SECONDHAND</Link>
                <Link href="/outlet" onClick={() => setOpen(false)}>OUTLET</Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link  href="" className="text-[18px] md:hidden" ><FiSearch /></Link>

          {/* Desktop Menu */}
          <nav className="hidden font-medium md:flex items-center gap-4 text-sm ">
            <Link href="/men" className=" border-b-black hover:border-b-2">MEN</Link>
            <Link href="/women" className=" border-b-black hover:border-b-2">WOMEN</Link>
            <Link href="/kids" className=" border-b-black hover:border-b-2 hidden lg:block">KIDS</Link>
            <Link href="/newArrival" className=" border-b-black hover:border-b-2 p-0 m-0 hidden lg:block">NEW ARRIVAL</Link>
          </nav>
        </div>

        {/* Center - Logo */}
        <Link href="/" className={`text-3xl lg:mr-39 mr-0 md:mr-5 font-extrabold typedLogo tracking-widest ${playfair.className}`}>
          Stylo
        </Link>

        {/* Right - Icons */}
        <div className="flex items-center gap-6">
        
            <div className=" hidden md:flex 
 items-center gap-2  "><Link  href="" ><FiSearch className="text-[18px]" /></Link>
            <Link href="" className="text-[#707070]">search</Link>
            </div>
           <Link href="" className="hidden"> <p className="text-sm font-bold">EN</p></Link>
          
          <Link className="hidden md:block"  href="/account">
           
              <FaUser className=" "  />
          
          </Link>
          <Link href="/wishlist">
           
              <FiHeart className=" " />
          
          </Link>
          <Link href="/cart">
           
              <SlBag className="" />
           
          </Link>
        </div>
      </div>
    </header>
  );
}
