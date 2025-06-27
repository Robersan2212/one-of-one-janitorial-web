import React from "react";

const services = [
  {
    title: "Customizable schedules",
    description:
      "We offer flexible cleaning schedules tailored to your business needs, ensuring your workspace is always at its best.",
  },
  {
    title: "Deep Cleaning Services",
    description:
      "Our deep cleaning tackles hard-to-reach areas, eliminating dust and germs for a thorough refresh of your office space.",
  },
  {
    title: "Disinfection & Sanitization",
    description:
      "Focused on high-touch areas, our disinfection services help reduce the spread of germs, promoting a healthier workplace.",
  },
  {
    title: "Eco-Friendly Cleaning",
    description:
      "Using green cleaning products, we deliver a safe, environmentally-conscious service while maintaining the highest cleanliness standards.",
  },
];

export default function Services() {
  return (
    <section className="w-full py-20 px-4" style={{ backgroundColor: '#29443a' }}>
      <h2 className="text-[#f3f3e6] text-6xl font-light mb-20 text-left max-w-6xl mx-auto">Services</h2>
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
        {services.map((service, i) => (
          <div
            key={i}
            className="flex flex-col items-start border-l md:border-l-0 md:border-t-0 md:border-r md:border-b-0 border-[#e6c49a] px-2 md:px-8"
            style={{ borderLeft: i === 0 ? 'none' : undefined, borderRight: i === 3 ? 'none' : undefined }}
          >
            <h3 className="text-[#e6c49a] text-2xl font-normal mb-4 leading-tight">{service.title}</h3>
            <p className="text-[#b7e3fa] text-lg leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 