"use client";
import Link from "next/link";
import { useState } from "react";
import { Hamburger } from "./Hamburger";
import { usePathname } from "next/navigation";
import { navLinks, organization } from "@/content/global";
import Image from "next/image";

export const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const NavLinks = () => {
    return navLinks.map((link) => (
      <Link
        key={link.id}
        href={link.url}
        onClick={() => setMobileMenuOpen(false)}
        className={`text-foreground hover:text-secondary ${pathname === link.url ? "border-b-2 border-secondary text-secondary" : ""}`}
      >
        {link.label}
      </Link>
    ));
  };

  return (
    <header className="top-0 z-10 h-32 w-full bg-background shadow-md">
      <div className="flex h-full items-center justify-center">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center justify-center text-xl font-bold text-primary"
          >
            <Image
              src="/Omkar Sangeet logo.png"
              className="h-28 w-28"
              width={100}
              height={100}
              alt="Picture of the author"
            />
            <div>{organization.logo}</div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden space-x-6 md:flex">
            <NavLinks />
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
              className="text-2xl text-foreground"
            >
              <Hamburger backgroundColor="bg-foreground" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed w-full bg-background shadow-md md:hidden">
          <nav className="flex flex-col items-center space-y-4 p-4">
            <NavLinks />
          </nav>
        </div>
      )}
    </header>
  );
};
