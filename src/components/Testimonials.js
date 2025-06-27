import React from "react";

const testimonials = [
  {
    name: "Maria G.",
    text: "The team is always punctual, professional, and leaves our office spotless. Highly recommended!",
    company: "Logan Dental Care"
  },
  {
    name: "James R.",
    text: "Their attention to detail is unmatched. We trust them with all our commercial spaces.",
    company: "Cache Valley Tech"
  },
  {
    name: "Linda S.",
    text: "Reliable, thorough, and friendly. Our business has never looked better!",
    company: "GreenLeaf Marketing"
  },
  {
    name: "Carlos M.",
    text: "They truly care about their work and it shows. Our staff and clients notice the difference.",
    company: "Summit Law Group"
  }
];

export default function Testimonials() {
  return (
    <section className="w-full bg-[#2E463F] py-20 px-4 border-t-2 border-b-2 border-[#e6c49a] flex flex-col items-center">
      <h2 className="text-[#f3f3e6] text-3xl sm:text-4xl md:text-5xl font-light mb-12 text-center">Testimonials & Companies that trust us</h2>
      <div className="w-full max-w-6xl flex flex-col sm:flex-row items-stretch justify-center divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-[#e6c49a] bg-[#2E463F]">
        {testimonials.map((t, i) => (
          <div key={i} className="flex-1 px-6 py-8 flex flex-col items-center text-center">
            <p className="text-[#e6c49a] text-lg md:text-xl mb-4">“{t.text}”</p>
            <div className="text-[#b7e3fa] font-semibold text-base mb-1">{t.name}</div>
            <div className="text-[#8ec0b1] text-sm">{t.company}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 