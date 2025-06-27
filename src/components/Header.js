'use client';
import React, { useState } from "react";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "Our Services", id: "services" },
  { label: "Contact Us", id: "contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header className="w-full bg-[#1A2A25] border-b border-[#e6c49a] sticky top-0 z-20 flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 py-3">
      <div className="flex items-center w-full sm:w-auto justify-between">
        <span className="flex items-center max-w-[180px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[520px] w-full">
          <svg
            viewBox="0 0 520 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="ONENONE logo"
            className="w-full h-auto"
            preserveAspectRatio="xMinYMid meet"
          >
            {/* O */}
            <circle cx="50" cy="60" r="40" stroke="#e6c49a" strokeWidth="4" fill="none" />
            {/* N */}
            <path d="M110 100 V20 L170 100 V20" stroke="#e6c49a" strokeWidth="4" strokeLinejoin="round" fill="none" />
            {/* E (closed circle with a horizontal bar) */}
            <g transform="translate(0,0)">
              <circle cx="210" cy="60" r="40" stroke="#e6c49a" strokeWidth="4" fill="none" />
              <line x1="170" y1="60" x2="250" y2="60" stroke="#e6c49a" strokeWidth="4" />
            </g>
            {/* O */}
            <circle cx="290" cy="60" r="40" stroke="#e6c49a" strokeWidth="4" fill="none" />
            {/* N */}
            <path d="M350 100 V20 L410 100 V20" stroke="#e6c49a" strokeWidth="4" strokeLinejoin="round" fill="none" />
            {/* Reversed E (flipped horizontally, moved closer to N) */}
            <g transform="translate(925,0) scale(-1,1)">
              <path d="M450 60 m 0 -40 a 40 40 0 1 1 0 80" stroke="#e6c49a" strokeWidth="4" fill="none" />
              <line x1="450" y1="60" x2="490" y2="60" stroke="#e6c49a" strokeWidth="4" />
            </g>
          </svg>
        </span>
        {/* Hamburger menu button for mobile */}
        <button
          className="sm:hidden ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#e6c49a]"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
        >
          <svg width="28" height="28" fill="none" stroke="#e6c49a" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      {/* Navigation links */}
      <nav
        className={`flex-col sm:flex-row flex gap-6 sm:gap-8 w-full sm:w-auto items-center sm:items-center transition-all duration-300 overflow-hidden ${menuOpen ? 'flex' : 'hidden sm:flex'}`}
      >
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => handleNav(link.id)}
            className="bg-transparent border-none p-0 m-0 text-[#e6c49a] hover:text-[#f2f6a7] transition-colors text-base font-medium focus:outline-none focus:text-[#f2f6a7] cursor-pointer"
            style={{ outline: 'none' }}
          >
            {link.label}
          </button>
        ))}
      </nav>
    </header>
  );
} 