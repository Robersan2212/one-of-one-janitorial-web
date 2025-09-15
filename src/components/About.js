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
        <h2 className="text-[#f3f3e6] text-5xl md:text-6xl font-light mb-8 text-center mx-auto">About</h2>
        <p className="text-[#e6c49a] text-lg md:text-xl max-w-2xl text-center mx-auto">
          As our grandmother once said, "We might be poor, but we are not dirty people." While our grandmother's life lesson speaks for itself, it is the cornerstone of our services and beliefs to help your business succeed.
        </p>
        <div className="mt-10 w-full max-w-4xl mx-auto rounded-xl overflow-hidden border border-[#e6c49a]/40 shadow-lg">
          <div className="w-full aspect-video bg-black">
            <video
              src="https://ppxnikhfnswnkntf.public.blob.vercel-storage.com/Marvin.mp4"
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            >
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
} 