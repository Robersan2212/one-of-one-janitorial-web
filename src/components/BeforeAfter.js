'use client';
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import before1 from "../components/assets/before-after/before1.jpg";
import after1 from "../components/assets/before-after/After1.jpg";
import before2 from "../components/assets/before-after/before2.jpg";
import after2 from "../components/assets/before-after/after2.jpg";
import before3 from "../components/assets/before-after/before3.jpg";
import after3 from "../components/assets/before-after/after3.jpg";
import before4 from "../components/assets/before-after/before4.jpg";
import after4 from "../components/assets/before-after/after4.jpg";

const sets = [
  { before: before1, after: after1, label: "Carpet cleaning" },
  { before: before2, after: after2, label: "Tile & Grout" },
  { before: before3, after: after3, label: "Upholstery" },
  { before: before4, after: after4, label: "Office Floor" },
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

  return (
    <section className="w-full min-h-[65vh] flex flex-col py-10 px-4" style={{ backgroundColor: '#243833', background: '#243833' }}>
      <h2 className="text-[#f3f3e6] text-5xl md:text-6xl font-light mb-8 text-center">Before & After</h2>
      <div className="flex-grow flex flex-col justify-center items-center">
        <div className="flex items-center justify-center w-full max-w-5xl mx-auto">
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
              <div className={`w-full aspect-[16/12] rounded-xl overflow-hidden bg-[#222] transition-all duration-200 ${vanishing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                <Image src={before} alt="Before cleaning" className="object-cover w-full h-full" sizes="(max-width: 767px) 100vw, 60vw" />
              </div>
              <div className="mt-2 text-[#f2f6a7] text-2xl font-bold">Before</div>
            </div>
            <div className="flex flex-col items-center">
              <div className={`w-full aspect-[16/12] rounded-xl overflow-hidden bg-[#222] transition-all duration-200 ${vanishing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                <Image src={after} alt="After cleaning" className="object-cover w-full h-full" sizes="(max-width: 767px) 100vw, 60vw" />
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