"use client";
import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
type Props = {};

const Navbar = (props: Props) => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const handleLinkClick = (): void => {
    setNavbarOpen(false);
  };
  return (
    <header className="max-w-[1400px] mx-auto px-10 md:px-5">
      <nav className="flex md:hidden h-[204px] justify-between items-center text-white text-[23px]">
        <Logo width={100} height={100} />
        <ul className="flex gap-[19px] items-center">
          <li className="">
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Experiance</Link>
          </li>
          <li>
            <Link href="/">Work</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </nav>
      <nav className="md:block gap-[66px] hidden">
        <div className="flex items-center justify-between items-center mt-10">
          <Logo width={75} height={75} />
          <div className="z-50">
            <Hamburger
              toggled={navbarOpen}
              toggle={setNavbarOpen}
              duration={0.3}
              easing="ease-in"
              color="#ffffff"
            />
          </div>
        </div>
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 top-0 bg-third w-[100%] h-screen
          ${navbarOpen ? "translate-y-0" : "-translate-y-full"} h-screen`}
          style={{ transition: "transform 0.3s ease-in-out" }}
        >
          <ul className="text-[23px] font-normal text-center text-white flex flex-col gap-10 pt-[60px]">
            <li className="">
              <Link href="/" onClick={handleLinkClick}>
                About
              </Link>
            </li>
            <li>
              <Link href="/" onClick={handleLinkClick}>
                Experiance
              </Link>
            </li>
            <li>
              <Link href="/" onClick={handleLinkClick}>
                Work
              </Link>
            </li>
            <li>
              <Link href="/" onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
