'use client';
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const sets = [
  { before: "/before-after/before1-new.jpg", after: "/before-after/after1-new.jpg", label: "Carpet cleaning" },
  { before: "/before-after/before2.jpg", after: "/before-after/after2.jpg", label: "Tile & Grout" },
  { before: "/before-after/before3.jpg", after: "/before-after/after3.jpg", label: "Upholstery" },
  { before: "/before-after/before4.jpg", after: "/before-after/after4.jpg", label: "Office Floor" },
];

export default function BeforeAfter() {
  const [index, setIndex] = useState(0);
  const [vanishing, setVanishing] = useState(false);
  const intervalRef = useRef();

  // Auto-advance every 15 seconds
  useEffect(() => {
    const next = () => {
      setVanishing(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % sets.length);
        setVanishing(false);
      }, 200);
    };
    intervalRef.current = setInterval(next, 15000);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Manual navigation resets timer
  const handleNav = (dir) => {
    clearInterval(intervalRef.current);
    setVanishing(true);
    setTimeout(() => {
      setIndex((prev) => (prev + dir + sets.length) % sets.length);
      setVanishing(false);
      // Restart interval
      intervalRef.current = setInterval(() => {
        setVanishing(true);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % sets.length);
          setVanishing(false);
        }, 200);
      }, 15000);
    }, 200);
  };

  const { before, after } = sets[index];

  // Determine dimensions for current images
  let beforeWidth = 2048, beforeHeight = 1536;
  let afterWidth = 2048, afterHeight = 1536;
  if (index === 0) {
    // First set: both are 2048x1536
    beforeWidth = 2048; beforeHeight = 1536;
    afterWidth = 2048; afterHeight = 1536;
  } else {
    // All other sets: before is 1536x2048, after is 1536x2048
    beforeWidth = 1536; beforeHeight = 2048;
    afterWidth = 1536; afterHeight = 2048;
  }

  return (
    <section className="w-full min-h-[65vh] flex flex-col py-10 px-4" style={{ backgroundColor: '#243833', background: '#243833' }}>
      <h2 className="text-[#f3f3e6] text-5xl md:text-6xl font-light mb-8 text-center">Before & After</h2>
      <div className="flex-grow flex flex-col justify-center items-center">
        <div className="flex items-center justify-center w-full max-w-7xl mx-auto">
          {/* Left arrow */}
          <button
            aria-label="Previous"
            onClick={() => handleNav(-1)}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#2e463f]/20 transition mr-2"
          >
            <svg width="24" height="24" fill="none" stroke="#e6c49a" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          {/* Images */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-20">
            <div className="flex flex-col items-center">
              <div className={`w-full aspect-[3/4] rounded-xl overflow-hidden bg-[#222] transition-all duration-200 ${vanishing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                <Image src={before} alt="Before cleaning" className="object-cover w-full h-full" sizes="(max-width: 767px) 100vw, 60vw" width={beforeWidth} height={beforeHeight} />
              </div>
              <div className="mt-2 text-[#f2f6a7] text-2xl font-bold">Before</div>
            </div>
            <div className="flex flex-col items-center">
              <div className={`w-full aspect-[3/4] rounded-xl overflow-hidden bg-[#222] transition-all duration-200 ${vanishing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                <Image src={after} alt="After cleaning" className="object-cover w-full h-full" sizes="(max-width: 767px) 100vw, 60vw" width={afterWidth} height={afterHeight} />
              </div>
              <div className="mt-2 text-[#f2f6a7] text-2xl font-bold">After</div>
            </div>
          </div>
          {/* Right arrow */}
          <button
            aria-label="Next"
            onClick={() => handleNav(1)}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#2e463f]/20 transition ml-2"
          >
            <svg width="24" height="24" fill="none" stroke="#e6c49a" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
} 