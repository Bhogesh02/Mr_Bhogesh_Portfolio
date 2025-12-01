



import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/#about", label: "ABOUT" },
    { href: "/#experience", label: "EXPERIENCE" },
    { href: "/#skills", label: "SKILLS" },
    { href: "/#education", label: "EDUCATION" },
    // { href: "/blog", label: "BLOGS" },
    { href: "/#projects", label: "PROJECTS" },
  ];

  return (
    <nav className="bg-transparent w-full">
      <div className="flex items-center justify-between py-5 px-4 md:px-8">
        <div className="flex flex-shrink-0 items-center">
          <a
            href="/"
            className="text-[#16f2b3] text-2xl md:text-3xl font-bold">
            Mr_Tamminana Bhogesh
          </a>
        </div>

        {/* Hamburger Icon for mobile */}
        <button
          className="md:hidden flex items-center p-2 text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex md:flex-row md:space-x-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                className="block px-4 py-2 no-underline outline-none hover:no-underline"
                href={link.href}
              >
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                  {link.label}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Nav Drawer */}
      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-[#18143a] bg-opacity-95 z-50 flex flex-col items-center pt-24 animate-fade-in">
          <ul className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  className="block px-8 py-3 rounded-lg text-lg font-semibold text-white hover:bg-pink-600 transition-colors duration-300"
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;