"use client";
import React, { useState, useEffect, useRef } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarRef = useRef(null);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeSidebar = (e: MouseEvent) => {
    if (
      sidebarRef.current &&
      !(sidebarRef.current as Node).contains(e.target as Node)
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("click", closeSidebar);
    }

    return () => {
      document.removeEventListener("click", closeSidebar);
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const scrollToItinerary = () => {
    const itinerarySection = document.getElementById("itinerary-section");
    console.log("Itinerary section:", itinerarySection);
    if (itinerarySection) {
      itinerarySection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Itinerary section not found");
    }
  };

  return (
    <div className={`relative ${inter.className}`} style={{ position: "sticky", top: 0, width: "100%", zIndex: 100 }}>
      <header
        className="relative text-black py-3 px-4 md:px-14 lg:px-24 flex mt-5 md:mt-10 justify-between items-center p-4 bg-white-rgba"
      >
        <div className="flex items-start">

          <NextLink href="/" passHref>
            <div className="relative h-[3rem] w-[10rem] md:h-[3rem] md:h-[3.5rem] justify-centre" >
              <Image
                src="/logo.png"
                alt="Logo"
                width={265}
                height={65}
                className=" h-[3rem] w-[10rem] md:h-[2.5rem] md:w-[12.5rem] flex items-center justify-center object-contain"
              />
            </div>
          </NextLink>
          <NextLink href="/" passHref>
            <Image
              src="/hackjklu-text.png"
              alt="Text"
              width={265}
              height={65}
              className="h-[2rem] w-[10rem] md:h-[2.5rem] md:w-[12.5rem] flex items-center justify-center"
            />
          </NextLink>
        </div>

        {/* Hamburger menu */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="navbar-burger flex flex-col items-center py-1.5 px-2"
          >
            <span className="block w-8 h-[0.15rem] bg-black rounded"></span>
            <span className="block w-8 h-[0.15rem] bg-black mt-[0.35rem] rounded"></span>
            <span className="block w-8 h-[0.15rem] bg-black mt-[0.35rem] rounded"></span>
          </button>
        </div>

        <nav className="hidden lg:flex  space-x-[4rem] ${menuOpen ? 'hidden' : 'block'}">
          <NextLink href="/" passHref>
            <span
              className={`cursor-pointer text-[1.2rem] ${pathname === "/" ? "underline decoration-[#A9A9A9] underline-offset-[1.7rem] decoration-2 text-gray-100" : "hover:underline decoration-[#A9A9A9] underline-offset-[1.7rem] decoration-5 hover:text-gray-100 text-gray-400"}`}
            >
              Home
            </span>
          </NextLink>
          <NextLink href="/events" passHref>
            <span
              className={`cursor-pointer text-[1.2rem] ${pathname === "/events" ? "underline decoration-[#A9A9A9] underline-offset-[1.7rem] decoration-2 text-gray-100" : "hover:underline decoration-[#A9A9A9] underline-offset-[1.7rem] decoration-2 hover:text-gray-100 text-gray-400"}`}
            >
              Events
            </span>
          </NextLink>
          <NextLink href="/team" passHref>
            <span
              className={`cursor-pointer text-[1.2rem] ${pathname === "/team" ? "underline decoration-[#A9A9A9] underline-offset-[1.7rem] decoration-2 text-gray-100" : "hover:underline decoration-[#A9A9A9] underline-offset-[1.7rem] decoration-2 hover:text-gray-100 text-gray-400"}`}
            >
              Team
            </span>
          </NextLink>
        </nav>
      </header>
      {/* Sidebar - Mobile View */}
      {menuOpen && (
        <div
          ref={sidebarRef}
          className="lg:hidden fixed top-0 right-0 h-full w-1/2 bg-black p-4 shadow-md z-50 overflow-y-auto"
        >
          <div className="mt-[1.5rem] ml-[0.3rem]">
            <NextLink href="/" passHref>
              <span
                className={`cursor-pointer text-1.5rem text-white block mb-4`}
              >
                Home
              </span>
            </NextLink>
            <NextLink href="/about" passHref>
              <span
                className={`cursor-pointer text-1.5rem text-white block mb-4`}
              >
                About
              </span>
            </NextLink>
            <NextLink href="/team" passHref>
              <span
                className={`cursor-pointer text-1.5rem text-white block mb-4`}
              >
                Team
              </span>
            </NextLink>
            <NextLink href="/itinerary" passHref>
              <span
                className={`cursor-pointer text-1.5rem text-white block mb-4`}
              >
                Itinerary
              </span>
            </NextLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;