"use client";
import Link from "next/link";
import { useState } from "react";
import { Hamburger } from "./Hamburger";
import { usePathname } from "next/navigation";

export const Header = ({ organizationName, navLinks }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const NavLinks = () => {
    return navLinks.map((link) => (
      <Link
        key={link.id}
        href={link.url}
        className={`text-foreground hover:text-primary ${pathname === link.url ? "text-primary" : ""}`}
      >
        {link.label}
      </Link>
    ));
  };

  return (
    <header className="fixed top-0 z-10 h-16 w-full bg-background shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-secondary">
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
            className="text-2xl text-foreground"
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
