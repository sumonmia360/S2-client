"use client";

import "../../styles/globals.css";
import Link from "next/link";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });



import { Menu,  } from "lucide-react";
import { SlBag } from "react-icons/sl";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white    top-0 z-50  sticky right-0 left-0   ">
      <div className="mx-auto flex h-14 items-center bg-white justify-between  px-4">
        
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
                <Link href="/kids" onClick={() => setOpen(false)}>KIDS</Link>
                <Link href="/newArrival" onClick={() => setOpen(false)}>NEW ARRIVAL</Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link  href="" className="text-[18px] md:hidden" ><FiSearch /></Link>

          {/* Desktop Menu */}
          <nav className="hidden font-medium md:flex items-center gap-4 text-sm ">
            <Link href="/men" className="  text-base font-semibold   hover:underline  decoration-2 hover:underline-offset-3 ">MEN</Link>
            <Link href="/women" className=" text-base font-semibold   hover:underline  decoration-2 hover:underline-offset-3">WOMEN</Link>
            <Link href="/kids" className=" text-base font-semibold   hover:underline  decoration-2 hover:underline-offset-3 hidden lg:block">KIDS</Link>
            <Link href="/newArrival" className=" text-base font-semibold   hover:underline  decoration-2 hover:underline-offset-3 p-0 m-0 hidden lg:block">NEW ARRIVAL</Link>
          </nav>
        </div>

        {/* Center - Logo */}
        <Link href="/#" className={`text-3xl lg:mr-25 mr-0 md:ml-5 font-extrabold typedLogo tracking-widest ${playfair.className}`}>
          Stylo
        </Link>

        {/* Right - Icons */}
        <div className="flex items-center gap-6">
        
            <div className=" hidden md:flex 
 items-center gap-2  "><Link  href="" ><FiSearch className="text-[18px]" /></Link>
            <Link href="" className="text-[#707070]">search</Link>
            </div>
           <Link href="" className="hidden md:block"> <p className="text-sm font-bold">EN</p></Link>
          
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
