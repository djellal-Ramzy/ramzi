import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <div className="bg-primary py-8 xl:py-12">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href={"/"}>
          <h1 className="text-4xl">
            Djellal<span className="text-tahiti">.</span>
          </h1>
        </Link>

        {/* Nav */}
        <div className="hidden xl:flex items-center justify-around gap-8">
          <Nav />
          <Link href={"/contact"}>
            <Button>click hire</Button>
          </Link>
        </div>

        {/* Nav mobile*/}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
