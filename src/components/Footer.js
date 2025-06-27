import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-[#e6c49a] bg-[#1A2A25] text-[#b7e3fa] py-8 px-4 flex flex-col items-center">
      {/* Social Icons */}
      <div className="flex gap-6 mb-4">
        {/* Facebook */}
        <a href="#" aria-label="Facebook" className="bg-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#e6c49a] transition">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.525 8.273H15.75V7.125C15.75 6.705 16.005 6.6 16.185 6.6H17.475V4.125H15.75C13.755 4.125 13.5 5.505 13.5 6.825V8.273H12V10.5H13.5V19.125H15.75V10.5H17.25L17.525 8.273Z" fill="#1A2A25"/>
          </svg>
        </a>
        {/* Twitter (X) */}
        <a href="#" aria-label="Twitter" className="bg-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#e6c49a] transition">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.53 3H20.5L14.62 10.09L21.5 19H15.93L11.77 13.67L7.09 19H4.1L10.34 11.47L3.75 3H9.43L13.22 7.84L17.53 3ZM16.5 17.5H18.07L8.5 4.98H6.82L16.5 17.5Z" fill="#1A2A25"/>
          </svg>
        </a>
        {/* Instagram */}
        <a href="#" aria-label="Instagram" className="bg-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#e6c49a] transition">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="#1A2A25" strokeWidth="2"/>
            <circle cx="12" cy="12" r="5" fill="none" stroke="#1A2A25" strokeWidth="2"/>
            <circle cx="17.5" cy="6.5" r="1.5" fill="#1A2A25"/>
          </svg>
        </a>
      </div>
      {/* Copyright */}
      <div className="text-[#b7e3fa] text-sm text-center mt-2">
        &copy; {new Date().getFullYear()} One-of-One Janitorial Services. All rights reserved.
      </div>
    </footer>
  );
} 