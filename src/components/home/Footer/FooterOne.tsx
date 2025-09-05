"use client";

import { footerData } from "./footerData";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../ui/accordion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t  bg-white text-black  ">
      <div className=" mx-auto px-4 sm:px-6 lg:px-6 py-10 ">
        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-2  ">
          <div className="grid grid-cols-3">
            {footerData.map((section, idx) => (
              <div className="" key={idx}>
                <h3 className="font-bold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        className="text-base text-gray-500 hover:text-gray-800"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Subscription Section */}
          <div className="col-span-1">
            <h3 className="flex gap-1 items-center font-bold mb-2 text-gray-900">
              <span className="text-[8px] rounded p-1 bg-black text-white">
                STYLO
              </span>
              JOIN CLUB-STYLO AND ENJOY BESPOKE BENEFITS
            </h3>
            <p className=" mb-4 text-base text-gray-500">
              Receive 15% off on your first purchase when you sign up. Plus,
              free shipping and more.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your e-mail address"
                className="w-full border px-3 py-2 text-sm"
              />
              <button className="bg-black text-white px-4 py-2 text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          <div className="mb-6">
            <h3 className="font-semibold mb-2 ">
              JOIN CLUB-STYLO AND ENJOY BESPOKE BENEFITS
            </h3>
            <p className="text-base text-gray-500 mb-4">
              Receive 15% off on your first purchase when you sign up. Plus,
              free shipping and More.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your e-mail address"
                className="w-full border px-3 py-2 text-sm"
              />
              <button className="bg-black text-white px-4 py-2 text-sm">
                Subscribe
              </button>
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {footerData.map((section, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-base font-semibold">
                  {section.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <Link
                          href={link.href}
                          className="text-base text-gray-500 hover:text-gray-800"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </footer>
  );
}
