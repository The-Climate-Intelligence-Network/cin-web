import React from 'react';

export default function HeroAbout() {
  return (
    <section className="flex flex-col items-center text-center space-y-6 pt-12 pb-16">
      <div className="inline-flex items-center px-4 py-1 rounded-full bg-teal/10 border border-teal/20">
        <span className="text-xs font-extrabold text-teal uppercase tracking-[0.2em]">
          About Us
        </span>
      </div>
      <h1 className="text-5xl lg:text-7xl font-extrabold text-deepForest tracking-tight leading-[1.1] max-w-4xl mx-auto">
        Transforming Climate Action Through Intelligence
      </h1>
      <p className="text-xl text-charcoal leading-relaxed max-w-3xl mx-auto mt-6">
        The Climate Intelligence Network (CIN) is driven by a mission to equip the citizens of the Global South with the tools and information necessary to fight for climate justice and protect our planet.
      </p>
    </section>
  );
}
