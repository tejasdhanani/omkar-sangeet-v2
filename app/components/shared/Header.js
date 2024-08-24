"use client";
import Link from "next/link";
import { useState } from "react";
import { Hamburger } from "./Hamburger";

export const Header = ({ organizationName, navLinks }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const NavLinks = () => {
    return navLinks.map((link) => (
      <Link
        key={link.id}
        href={link.url}
        className="text-foreground hover:text-primary"
      >
        {link.label}
      </Link>
    ));
  };

  return (
    <header className="bg-background fixed z-10 w-full shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="text-foreground text-2xl font-bold">
          <div>{organizationName}</div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden space-x-6 md:flex">
          <NavLinks />
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
            className="text-foreground text-2xl"
          >
            <Hamburger backgroundColor="bg-foreground" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="bg-background shadow-md md:hidden">
          <nav className="flex flex-col items-center space-y-4 p-4">
            <NavLinks />
          </nav>
        </div>
      )}
    </header>
  );
};
