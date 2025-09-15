"use client";
import React from "react";

export default function Contact() {

  return (
    <section className="w-full min-h-screen relative overflow-hidden" style={{ backgroundColor: '#29443a' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e6c49a' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-[#f3f3e6] mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Get In Touch
          </h1>
          <p className="text-xl text-[#e6c49a] max-w-2xl mx-auto">
            Ready to experience the difference? Contact us today for a free consultation and quote.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl">
              <h2 className="text-3xl font-bold text-[#f3f3e6] mb-8" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#8ec0b1]/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#8ec0b1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#f3f3e6] mb-1">Email</h3>
                    <a 
                      href="mailto:oneofonejs@gmail.com" 
                      className="text-[#e6c49a] hover:text-[#8ec0b1] transition-colors text-lg"
                    >
                      oneofonejs@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#8ec0b1]/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#8ec0b1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#f3f3e6] mb-1">Phone</h3>
                    <a 
                      href="tel:+1XXXXXXXXXX" 
                      className="text-[#e6c49a] hover:text-[#8ec0b1] transition-colors text-lg"
                    >
                      (XXX) XXX-XXXX
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#8ec0b1]/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#8ec0b1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#f3f3e6] mb-1">Service Area</h3>
                    <p className="text-[#e6c49a] text-lg">
                      Logan, Utah & Cache Valley
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl">
              <h2 className="text-2xl font-bold text-[#f3f3e6] mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                Business Hours
              </h2>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[#e6c49a]">Monday - Friday</span>
                  <span className="text-[#f3f3e6] font-medium">To be determined</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#e6c49a]">Saturday</span>
                  <span className="text-[#f3f3e6] font-medium">To be determined</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#e6c49a]">Sunday</span>
                  <span className="text-[#f3f3e6] font-medium">To be determined</span>
                </div>
              </div>
              

            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 