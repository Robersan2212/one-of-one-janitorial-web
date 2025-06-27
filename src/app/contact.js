import React from "react";

export default function Contact() {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-stretch justify-center" style={{ backgroundColor: '#29443a' }}>
      {/* Left: Heading */}
      <div className="w-full md:w-1/2 flex items-start md:items-center justify-center md:justify-end px-8 py-16 md:py-0">
        <h1 className="text-[#f2f6a7] text-6xl md:text-7xl font-light">Contact Us</h1>
      </div>
      {/* Right: Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-8 py-16 md:py-0">
        <form className="w-full max-w-xl flex flex-col gap-6">
          <div>
            <label className="block text-[#e6c49a] mb-2" htmlFor="firstName">First name *</label>
            <input id="firstName" name="firstName" type="text" required className="w-full rounded-full border border-[#e6c49a] bg-transparent px-6 py-3 text-[#b7e3fa] focus:outline-none focus:ring-2 focus:ring-[#e6c49a]" />
          </div>
          <div>
            <label className="block text-[#e6c49a] mb-2" htmlFor="lastName">Last name *</label>
            <input id="lastName" name="lastName" type="text" required className="w-full rounded-full border border-[#e6c49a] bg-transparent px-6 py-3 text-[#b7e3fa] focus:outline-none focus:ring-2 focus:ring-[#e6c49a]" />
          </div>
          <div>
            <label className="block text-[#e6c49a] mb-2" htmlFor="email">Email *</label>
            <input id="email" name="email" type="email" required className="w-full rounded-full border border-[#e6c49a] bg-transparent px-6 py-3 text-[#b7e3fa] focus:outline-none focus:ring-2 focus:ring-[#e6c49a]" />
          </div>
          <div>
            <label className="block text-[#e6c49a] mb-2" htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" className="w-full rounded-full border border-[#e6c49a] bg-transparent px-6 py-3 text-[#b7e3fa] focus:outline-none focus:ring-2 focus:ring-[#e6c49a]" />
          </div>
          <div>
            <label className="block text-[#e6c49a] mb-2" htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={4} className="w-full rounded-2xl border border-[#e6c49a] bg-transparent px-6 py-3 text-[#b7e3fa] focus:outline-none focus:ring-2 focus:ring-[#e6c49a] resize-none" />
          </div>
          <button type="submit" className="mt-4 rounded-full bg-[#b7e3fa] text-[#29443a] text-lg font-medium py-3 transition hover:bg-[#e6c49a] hover:text-[#29443a]">Submit</button>
        </form>
      </div>
    </section>
  );
} 