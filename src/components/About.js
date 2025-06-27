'use client';
import React, { useRef, useEffect, useState } from "react";

export default function About() {
  const contentRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full flex flex-col items-center justify-center py-20 px-4 border-t-2 border-b-2 border-[#e6c49a]" style={{ backgroundColor: '#243833' }}>
      <div
        ref={contentRef}
        className={`transition-all duration-700 ease-out transform ${visible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
      >
        <h2 className="text-[#f3f3e6] text-5xl md:text-6xl font-light mb-8 text-center">About</h2>
        <p className="text-[#e6c49a] text-lg md:text-xl max-w-2xl text-center mb-10">
          As our grandmother once said, "We might be poor, but we are not dirty people." While our grandmother's life lesson speaks for itself, it is the cornerstone of our services and beliefs to help your business succeed.
        </p>
        {/* Video Placeholder */}
        <div className="w-full flex justify-center">
          <div className="relative w-full max-w-xl aspect-video bg-[#18302b] border-2 border-dashed border-[#e6c49a] rounded-xl flex items-center justify-center">
            <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="32" fill="#e6c49a" fillOpacity="0.2" />
              <polygon points="26,20 48,32 26,44" fill="#e6c49a" />
            </svg>
            <span className="sr-only">Video placeholder</span>
          </div>
        </div>
      </div>
    </section>
  );
} 