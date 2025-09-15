"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Testimonials() {
  const logos = [
    { src: "/trust_us_one.jpg", alt: "Trust Us Logo One" },
    { src: "/trust_us_two.jpeg", alt: "Trust Us Logo Two" },
    { src: "/trust_us_three.jpeg", alt: "Trust Us Logo Three" },
    { src: "/trust_us_four.jpeg", alt: "Trust Us Logo Four" },
  ];

  const cardRefs = useRef([]);
  const [visible, setVisible] = useState(Array(logos.length).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisible((prev) => {
              const next = [...prev];
              next[index] = true;
              return next;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-[#2E463F] py-20 px-4 border-t-2 border-b-2 border-[#e6c49a] flex flex-col items-center">
      <h2 className="text-[#f3f3e6] text-5xl md:text-6xl font-light mb-20 text-center" style={{ fontFamily: 'var(--font-playfair), serif' }}>Companies that trust us</h2>
      <div className="w-full max-w-4xl flex justify-center items-center gap-6 sm:gap-8 md:gap-10 flex-wrap">
        {logos.map((logo, index) => (
          <div
            key={logo.src}
            ref={(el) => (cardRefs.current[index] = el)}
            data-index={index}
            className={`w-[360px] h-[360px] bg-white/5 rounded-xl border border-white/10 flex items-center justify-center p-6 transition-all duration-700 ease-out ${
              visible[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            <Image src={logo.src} alt={logo.alt} width={320} height={320} className="object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}