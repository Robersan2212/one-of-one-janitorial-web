import React from "react";

const faqs = [
  {
    question: "How often should I schedule cleaning?",
    answer:
      "The frequency of cleaning depends on your needs and lifestyle. For most homes, a weekly or bi-weekly cleaning is recommended to maintain a clean and healthy environment.",
  },
  {
    question: "What cleaning products do you use?",
    answer:
      "We use environmentally friendly and non-toxic cleaning products to ensure the safety of your family, pets, and the environment. Our products are highly effective and eco-conscious.",
  },
  {
    question: "Do I need to provide cleaning equipment?",
    answer:
      "No, we come fully equipped with all the necessary cleaning supplies and tools. You just need to sit back, relax, and enjoy your clean space.",
  },
];

export default function FAQ() {
  return (
    <section className="w-full py-20 px-4" style={{ backgroundColor: '#1e332b' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#f3f3e6] text-6xl font-light mb-16">FAQ</h2>
        {/* Mobile: Stack Q&A, Desktop: Two columns per row */}
        <div className="block md:hidden">
          {faqs.map((faq, i) => (
            <div key={i} className="mb-16">
              <h3 className="text-[#e6c49a] text-3xl font-normal mb-4 leading-tight">{faq.question}</h3>
              <p className="text-[#b7e3fa] text-lg leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
        <div className="hidden md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-12">
          {faqs.map((faq, i) => (
            <React.Fragment key={i}>
              <div className="flex items-center">
                <h3 className="text-[#e6c49a] text-2xl font-normal leading-tight">{faq.question}</h3>
              </div>
              <div className="flex items-center">
                <p className="text-[#b7e3fa] text-lg leading-relaxed">{faq.answer}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
} 