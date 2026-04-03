import React from 'react';

export default function Partners() {
  return (
    <section className="bg-[#F7FAF4] -mx-6 px-6 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 py-16 -my-8 rounded-xl border border-forest/5 shadow-[inset_0_1px_6px_rgba(0,0,0,0.02)] grid grid-cols-1 gap-12 text-center">
      <div className="space-y-4 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-3">
          <svg className="w-8 h-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"></path><rect x="3" y="8" width="18" height="12" rx="2"></rect><line x1="12" y1="12" x2="12" y2="16"></line>
          </svg>
          <h2 className="text-4xl md:text-5xl font-bold text-deepForest tracking-tight">Our Partners</h2>
        </div>
        <p className="text-lg text-charcoal/80 leading-relaxed">
          Collaboration is key to our success. We work with leading organizations to amplify our impact.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 max-w-5xl mx-auto">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-40 h-20 bg-forest/5 border border-forest/10 rounded-lg flex justify-center items-center opacity-80 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 shadow-sm">
            <span className="text-forest/60 font-bold text-xs tracking-widest uppercase">Logo {i}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
