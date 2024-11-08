"use client";

import React from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";
const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];
 
export default function Nav() {
    const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return <Link className={`${pathname === link.path && 'text-tahiti border-b-2  border-tahiti'} capitalize font-medium transition-all hover:text-tahiti`} href={link.path} key={index}>{link.name}</Link>;
      })}
    </nav>
  );
}
