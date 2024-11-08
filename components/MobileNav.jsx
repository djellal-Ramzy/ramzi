"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

import { usePathname } from "next/navigation";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

function MobileNav() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-tahiti" />
      </SheetTrigger>
      <SheetContent className="flex flex-col ">
        <div className="mt-32 text-center text-2xl">
          {/*logo*/}
          <Link href={"/"}>
            <h1 className="text-4xl font-semibold">
              Djellal<span className="text-tahiti">.</span>
            </h1>
          </Link>
        </div>
        {/*nav*/}
        <nav className="flex flex-col items-center justify-center gap-8 ">
          {links.map((link, index) => {
            return (
              <Link
                className={`${
                  pathname === link.path &&
                  "text-tahiti border-b-2  border-tahiti"
                } capitalize font-medium transition-all hover:text-tahiti`}
                href={link.path}
                key={index}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
