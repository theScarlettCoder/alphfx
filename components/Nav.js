import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "@headlessui/react";

import WhiteLogo from "../public/img/header/logo-w.png";
import ColorLogo from "../public/img/header/logo.png";
import DropdownLink from "./DropdownLink";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(WhiteLogo);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNav(true);
      setLogo(ColorLogo);
    } else {
      setNav(false);
      setLogo(WhiteLogo);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <header
      className={`header ${
        nav ? "bg-white" : ""
      } w-full fixed top-0 left-0 right-0 py-5 h-auto z-50 transition ease-in-out duration-500 `}
    >
      <nav className="flex   justify-between  items-center z-50 w-[70%] my-[1rem] mx-auto">
        <Link href="/" className="flex-1">
          <Image src={logo} alt="White Logo" width={200} height={100} />
        </Link>

        <div
          className={`menu-btn flex justify-between items-center flex-1 gap-15 font-bold text-xs  transition ease-in-out duration-500  ${
            nav ? "text-[#4e585d]" : "text-white"
          }`}
        >
          <Link href="/"> Home </Link>
          <Link href="/guide"> Guide </Link>
          <Link href="/open-trade"> Open Trade </Link>
          <Link href="/guide"> Try demo </Link>
          <Menu as="div" className="relative inline-block">
            <Menu.Button className="">Account</Menu.Button>
            <Menu.Items className="absolute top-10 right-0 w-40 origin-top-left bg-white shadow-lg rounded-lg overflow-hidden">
              <Menu.Item>
                <DropdownLink href="/login" className="dropdown-link">
                  Login
                </DropdownLink>
              </Menu.Item>

              <Menu.Item>
                <DropdownLink href="/signup" className="dropdown-link">
                  Sign up
                </DropdownLink>
              </Menu.Item>
            </Menu.Items>
          </Menu>
          <Link href="/contactus"> Contact us </Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
