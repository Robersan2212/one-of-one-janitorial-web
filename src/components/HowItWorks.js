'use client';
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import execution from "../components/assets/how-it-works/execution.jpg";

// Make sure execution.jpg is in public/components/assets/how-it-works/execution.jpg

export default function HowItWorks() {
  const imageContainerRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageContainerRef.current) return;
      const rect = imageContainerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Only apply effect when section is in view
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calculate scroll progress within the section (0 to 1)
        const progress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0), 1);
        // Zoom: scale from 1 to 1.15 as user scrolls through section
        setScale(1 + progress * 0.15);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full min-h-[60vh] flex flex-col py-16 px-4 overflow-auto border-t-2 border-b-2 border-[#e6c49a]" style={{ backgroundColor: '#2E463F' }}>
      <h2 className="text-[#f3f3e6] text-5xl md:text-6xl font-light mb-24 text-center w-full">How it works</h2>
      <div className="flex flex-col md:flex-row items-center justify-center w-full h-full flex-1 min-h-[60vh]">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
          <div ref={imageContainerRef} className="relative w-full max-w-3xl min-h-[400px] md:min-h-[530px] rounded-lg overflow-hidden shadow-lg" style={{height: '100%', minHeight: 400}}>
            <div style={{transform: `scale(${scale})`, transition: 'transform 0.2s cubic-bezier(.4,0,.2,1)', height: '100%', width: '100%', position: 'absolute', top: 0, left: 0}}>
              <Image
                src={execution}
                alt="Window cleaning in progress"
                fill
                className="object-cover"
                sizes="(max-width: 767px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
        {/* Right: Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:pl-16">
          <h2 className="text-[#b7e3fa] text-4xl md:text-5xl font-light mb-6">Contact</h2>
          <h3 className="text-[#b7e3fa] text-2xl font-normal mb-4">Get in Touch</h3>
          <p className="text-[#e6c49a] text-lg max-w-lg">
            Reach out to us via phone or email to discuss your office cleaning requirements. We will customize a cleaning plan tailored to your needs.
          </p>
        </div>
      </div>
    </section>
  );
} 