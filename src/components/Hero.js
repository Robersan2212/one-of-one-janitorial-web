"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import heroImage1 from "@/components/assets/hero1.jpg";

export default function Hero() {
  const [zoom, setZoom] = useState(1);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Zoom out from 1 to 0.85 as you scroll down 0 to 1000px
      let newZoom = Math.max(0.85, 1 - Math.min(scrollY / 1000, 0.15));
      
      // Reduce zoom by 25% for tablet screens
      if (isTablet) {
        newZoom = newZoom * 0.75; // 25% reduction
      }
      
      setZoom(newZoom);
    };

    const checkScreenSize = () => {
      // Check if screen width is between 1024px and 1366px (iPad Pro dimensions)
      const width = window.innerWidth;
      setIsTablet(width >= 1024 && width <= 1366);
      setIsMobile(width < 1024);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", checkScreenSize);
    
    // Check initial screen size
    checkScreenSize();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  // Show thin border in hero border color only when zoomed out
  const borderStyle = zoom < 0.99 ? '2px solid #e6c49a' : '0px';

  return (
    <section className={`w-full flex bg-[#F5F3ED] relative ${isTablet ? 'flex-col' : 'flex-col md:flex-row'}`}>
      {/* Text: always first in JSX for correct stacking */}
      <div className={`w-full flex flex-col justify-center items-center px-4 sm:px-8 gap-6 bg-[#2E463F] relative ${isTablet ? 'w-full py-40' : 'md:w-1/2 lg:w-1/2 md:min-h-0 md:py-0 md:pl-20 md:order-1 py-8 sm:py-16'}`}>
        <div className="w-full h-full flex flex-col justify-center items-center text-center" style={{
          transition: "transform 0.3s cubic-bezier(.4,0,.2,1)",
          transform: `scale(${zoom})`,
        }}>
          <h1 className="text-[#f3f3e6] text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-center" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            One of One Janitorial Services Commercial <br />Spaces | Offices
          </h1>
          <p className="text-[#e6c49a] text-base sm:text-lg md:text-xl mt-4">
            We guarantee a spotless environment every time.
          </p>
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="mt-8 bg-[#8ec0b1] hover:bg-[#6a968b] text-[#254137] font-semibold px-6 sm:px-8 py-3 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-[#e6c49a] focus:ring-offset-2 transition cursor-pointer"
          >
            Contact Us
          </button>
        </div>
      </div>
      {/* Hero Image: always second in JSX, but order-2 on desktop */}
      <div className={`w-full relative border-b overflow-hidden ${isTablet ? 'w-full border-b min-h-[150px]' : 'sm:min-h-[751px] md:min-h-[400px] lg:min-h-[450px] xl:min-h-[825px] md:w-1/2 lg:w-1/2 lg:border-b-0 lg:border-t-0 md:border-l-2 lg:border-l-2 md:overflow-hidden md:order-2'}`} style={{background: '#2E463F'}}>
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
          {(isMobile || isTablet) ? (
            <img
              src={heroImage1.src}
              alt="The One-of-One cleaning team in Logan, Utah, ready to serve Cache Valley residents."
              style={{ 
                width: '100%',
                height: '100%',
                objectFit: isTablet ? 'contain' : 'cover',
                objectPosition: isTablet ? 'center' : '60% center',
                backgroundColor: isTablet ? '#2E463F' : 'transparent',
                transform: isTablet ? 'scale(1.109)' : 'scale(1)'
              }}
            />
          ) : (
            <Image
              src={heroImage1}
              alt="The One-of-One cleaning team in Logan, Utah, ready to serve Cache Valley residents."
              fill
              style={{ 
                objectFit: 'cover', 
                objectPosition: '60% center'
              }}
              priority
              sizes="(max-width: 767px) 100vw, 50vw"
            />
          )}
        </div>
      </div>
    </section>
  );
} 