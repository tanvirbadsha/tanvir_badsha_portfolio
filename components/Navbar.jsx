"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

function Navbar() {
  const sideMenuRef = useRef();
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, [isScroll]);
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };
  return (
    <header className={`min-h-[15vh] md:min-h-[20vh] `}>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image
          src={assets.header_bg_color}
          alt="header background color"
          className="w-full"
        />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        <a href="#top">
          <Image src={assets.logo} className="w-30 mr-14" alt="website_logo" />
        </a>
        <ul className="hidden md:flex justify-evenly items-center gap-6 lg:gap-8 py-3 rounded-full px-12 bg-white shadow-sm bg-opacity-50">
          <li>
            <a href="#top" className="font-ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-ovo">
              About me
            </a>
          </li>
          <li>
            <a href="#services" className="font-ovo">
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="font-ovo">
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-ovo">
              Contact Me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button>
            <Image src={assets.moon_icon} alt="moon icon" className="w-6" />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
          >
            Contact{" "}
            <Image src={assets.arrow_icon} alt="arrow_icon" className="w-3" />
          </a>
          <button className="block md:hidden" onClick={openMenu}>
            <Image
              src={assets.menu_black}
              alt="3 dot mobile menu"
              className="w-6"
            />
          </button>
        </div>
        {/* ---------- mobile menu ----------- */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 -right-64 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt="close button"
              className="w-5 cursor-pointer"
            />
          </div>
          <li onClick={closeMenu}>
            <a href="#top" className="font-ovo">
              Home
            </a>
          </li>
          <li onClick={closeMenu}>
            <a href="#about" className="font-ovo">
              About me
            </a>
          </li>
          <li onClick={closeMenu}>
            <a href="#services" className="font-ovo">
              Services
            </a>
          </li>
          <li onClick={closeMenu}>
            <a href="#work" className="font-ovo">
              My Work
            </a>
          </li>
          <li onClick={closeMenu}>
            <a href="#contact" className="font-ovo">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
