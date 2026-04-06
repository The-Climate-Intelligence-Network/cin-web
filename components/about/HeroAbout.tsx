import React from 'react';
import Image from 'next/image';

export default function HeroAbout() {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-12 pt-8">
      {/* Text Content */}
      <div className="flex-[0.9] flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:pr-8">
        <div className="inline-flex items-center px-4 py-1 rounded-full bg-teal/10 border border-teal/20">
          <span className="text-xs font-extrabold text-teal uppercase tracking-[0.2em]">
            About Us
          </span>
        </div>
        <h1 className="text-5xl lg:text-7xl font-extrabold text-deepForest tracking-tight leading-[1.1]">
          Transforming Climate Action Through Intelligence
        </h1>
        <p className="text-xl text-charcoal leading-relaxed max-w-2xl mt-6 lg:mt-8">
          The Climate Intelligence Network (CIN) is driven by a mission to equip the citizens of the Global South with the tools and insights necessary to fight for climate justice and bridge the climate data gap.
        </p>
      </div>

      {/* Image Collage */}
      <div className="flex-1 w-full relative h-[450px] md:h-[600px] flex items-center justify-center mt-8 lg:mt-0">
        <div className="relative w-[340px] h-[360px] md:w-[500px] md:h-[540px] lg:w-[560px] lg:h-[560px]">
          {/* Image 1: Top Left */}
          <div className="absolute top-4 left-2 md:top-6 md:left-2 w-44 h-32 md:w-[300px] md:h-[220px] rounded-2xl overflow-hidden border-4 md:border-[6px] border-surface shadow-lg shadow-black/10 transform -rotate-6 hover:scale-[1.03] hover:z-50 hover:-rotate-3 transition-all duration-500 ease-out">
            <Image
              src="/photos/oceans.jpg"
              alt="Oceans"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 176px, 300px"
            />
          </div>

          {/* Image 2: Top Right */}
          <div className="absolute top-0 right-0 md:top-2 md:right-2 w-48 h-36 md:w-[320px] md:h-[240px] rounded-2xl overflow-hidden border-4 md:border-[6px] border-surface shadow-xl shadow-black/10 transform rotate-6 z-[2] hover:scale-[1.03] hover:z-50 hover:rotate-3 transition-all duration-500 ease-out">
            <Image
              src="/photos/dev.jpg"
              alt="LCOY event"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 192px, 320px"
            />
          </div>

          {/* Image 3: Bottom Left */}
          <div className="absolute bottom-6 left-0 md:bottom-8 md:left-0 w-40 h-44 md:w-[280px] md:h-[300px] rounded-2xl overflow-hidden border-4 md:border-[6px] border-surface shadow-xl shadow-black/10 transform -rotate-3 z-[3] hover:scale-[1.03] hover:z-50 hover:-rotate-1 transition-all duration-500 ease-out">
            <Image
              src="/photos/ycat3.jpg"
              alt="Team Group"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 160px, 280px"
            />
          </div>

          {/* Image 4: Bottom Right */}
          <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 w-44 h-40 md:w-[300px] md:h-[280px] rounded-2xl overflow-hidden border-4 md:border-[6px] border-surface shadow-xl shadow-black/10 transform rotate-3 z-[4] hover:scale-[1.03] hover:z-50 hover:rotate-1 transition-all duration-500 ease-out">
            <Image
              src="/photos/ycat.jpg"
              alt="YCAT event"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 176px, 300px"
            />
          </div>

          {/* Image 5: Front Center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-40 md:w-[380px] md:h-[260px] rounded-2xl overflow-hidden border-4 md:border-[6px] border-surface shadow-2xl shadow-black/20 z-10 transform hover:scale-[1.03] hover:-translate-y-[52%] hover:-translate-x-1/2 transition-transform duration-500 ease-out">
            <Image
              src="/photos/lcoy.jpg"
              alt="Hackathon event"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 224px, 380px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
