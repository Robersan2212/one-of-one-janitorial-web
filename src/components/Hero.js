"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import heroImage1 from "@/components/assets/hero1.jpg";

export default function Hero() {
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Zoom out from 1 to 0.85 as you scroll down 0 to 1000px
      const newZoom = Math.max(0.85, 1 - Math.min(scrollY / 1000, 0.15));
      setZoom(newZoom);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Show thin border in hero border color only when zoomed out
  const borderStyle = zoom < 0.99 ? '2px solid #e6c49a' : '0px';

  return (
    <section className="w-full flex flex-col md:flex-row bg-[#F5F3ED] relative">
      {/* Text: always first in JSX for correct stacking */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:min-h-0 px-4 sm:px-8 py-8 sm:py-16 md:py-0 md:pl-20 gap-6 bg-[#2E463F] relative md:order-1">
        <div className="w-full h-full flex flex-col justify-center items-center text-center" style={{
          transition: "transform 0.3s cubic-bezier(.4,0,.2,1)",
          transform: `scale(${zoom})`,
        }}>
          <h1 className="text-[#f3f3e6] text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            One of One Janitorial Services Commercial <br />Spaces | Offices
          </h1>
          <p className="text-[#e6c49a] text-base sm:text-lg md:text-xl mt-4">
            We guarantee a spotless environment every time.
          </p>
          <button className="mt-8 bg-[#8ec0b1] hover:bg-[#6a968b] text-[#254137] font-semibold px-6 sm:px-8 py-3 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-[#e6c49a] focus:ring-offset-2 transition">
            Contact Us
          </button>
        </div>
      </div>
      {/* Hero Image: always second in JSX, but order-2 on desktop */}
      <div className="w-full md:w-1/2 relative aspect-[16/10] sm:min-h-[350px] md:min-h-screen border-b md:border-b-0 md:border-l-2 border-[#e6c49a] overflow-hidden md:order-2" style={{background: '#2E463F'}}>
        <div
          style={{
            width: "100%",
            height: "100%",
            transition: "transform 0.3s cubic-bezier(.4,0,.2,1), border 0.3s cubic-bezier(.4,0,.2,1)",
            transform: `scale(${zoom})`,
            border: borderStyle,
            boxSizing: 'border-box',
          }}
        >
          <Image
            src={heroImage1}
            alt="The One-of-One cleaning team in Logan, Utah, ready to serve Cache Valley residents."
            fill
            style={{ objectFit: 'cover', objectPosition: '60% center' }}
            priority
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
} 