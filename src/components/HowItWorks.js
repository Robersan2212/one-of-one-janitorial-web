'use client';
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

// Make sure execution.jpg is in public/components/assets/how-it-works/execution.jpg

export default function HowItWorks() {
  const imageContainerRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev
  const subsections = [
    {
      image: "/how-it-works/execution.jpg",
      title: "Contact",
      subtitle: "Get in Touch",
      description: "Reach out to us via phone or email to discuss your office cleaning requirements. We will customize a cleaning plan tailored to your needs.",
    },
    {
      image: "/how-it-works/clay-banks-cEzMOp5FtV4-unsplash.jpg",
      title: "Assessment",
      subtitle: "Site Visit & Quote",
      description: "We visit your location, assess your needs, and provide a transparent, no-obligation quote for our services.",
    },
    {
      image: "/how-it-works/khang-nguyen-wEJ0MdL9ITY-unsplash.jpg",
      title: "Execution",
      subtitle: "Professional Cleaning",
      description: "Our team arrives on schedule and delivers a thorough, high-quality cleaning tailored to your business.",
    },
  ];

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

  const handleNav = (dir) => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setIndex((prev) => (prev + dir + subsections.length) % subsections.length);
      setAnimating(false);
    }, 350); // match transition duration
  };
  const { image, title, subtitle, description } = subsections[index];

  return (
    <section className="w-full min-h-[60vh] flex flex-col py-16 px-4 overflow-auto border-t-2 border-b-2 border-[#e6c49a]" style={{ backgroundColor: '#2E463F' }}>
      <h2 className="text-[#f3f3e6] text-5xl md:text-6xl font-light mb-24 text-center w-full">How it works</h2>
      <div className="relative flex flex-col md:flex-row items-center justify-center w-full h-full flex-1 min-h-[60vh]">
        {/* Desktop Arrows absolutely positioned at ends, vertically centered */}
        <button
          aria-label="Previous"
          onClick={() => handleNav(-1)}
          className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 bg-[#2E463F]/70 hover:bg-[#2E463F]/90 text-[#e6c49a] rounded-full w-10 h-10 border-2 border-[#e6c49a] z-20"
          style={{ outline: 'none' }}
        >
          <svg width="24" height="24" fill="none" stroke="#e6c49a" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0 pl-0 md:pl-32">
          <div ref={imageContainerRef} className="relative w-full max-w-4xl min-h-[600px] md:min-h-[1500px] rounded-lg overflow-hidden shadow-lg" style={{height: '100%', minHeight: 600}}>
            <div
              style={{
                transform: `scale(${scale})`,
                transition: 'transform 0.2s cubic-bezier(.4,0,.2,1)',
                height: '100%',
                width: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                opacity: animating ? 0 : 1,
                pointerEvents: animating ? 'none' : 'auto',
                zIndex: 1,
              }}
              className={`transition-all duration-350 ${animating ? (direction === 1 ? 'translate-x-12' : '-translate-x-12') : 'translate-x-0'}`}
            >
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 767px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
        {/* Right: Text */}
        <div
          className={`w-full md:w-1/2 flex flex-col justify-center items-start pl-0 md:pl-8 transition-all duration-350 ${animating ? (direction === 1 ? 'translate-x-12 opacity-0' : '-translate-x-12 opacity-0') : 'translate-x-0 opacity-100'}`}
          style={{ pointerEvents: animating ? 'none' : 'auto' }}
        >
          <h2 className="text-[#b7e3fa] text-4xl md:text-5xl font-light mb-6">{title}</h2>
          <h3 className="text-[#b7e3fa] text-2xl font-normal mb-4">{subtitle}</h3>
          <p className="text-[#e6c49a] text-lg max-w-lg">
            {description}
          </p>
        </div>
        <button
          aria-label="Next"
          onClick={() => handleNav(1)}
          className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 bg-[#2E463F]/70 hover:bg-[#2E463F]/90 text-[#e6c49a] rounded-full w-10 h-10 border-2 border-[#e6c49a] z-20"
          style={{ outline: 'none' }}
        >
          <svg width="24" height="24" fill="none" stroke="#e6c49a" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        {/* Mobile arrows at the bottom, centered */}
        <div className="flex md:hidden w-full justify-center gap-8 mt-4">
          <button
            aria-label="Previous"
            onClick={() => handleNav(-1)}
            className="flex items-center justify-center bg-[#2E463F]/70 hover:bg-[#2E463F]/90 text-[#e6c49a] rounded-full w-10 h-10 border-2 border-[#e6c49a]"
            style={{ outline: 'none' }}
          >
            <svg width="24" height="24" fill="none" stroke="#e6c49a" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button
            aria-label="Next"
            onClick={() => handleNav(1)}
            className="flex items-center justify-center bg-[#2E463F]/70 hover:bg-[#2E463F]/90 text-[#e6c49a] rounded-full w-10 h-10 border-2 border-[#e6c49a]"
            style={{ outline: 'none' }}
          >
            <svg width="24" height="24" fill="none" stroke="#e6c49a" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
} 