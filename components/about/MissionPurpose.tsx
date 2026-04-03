import React from 'react';

export default function MissionPurpose() {
  return (
    <section className="bg-[#F7FAF4] -mx-6 px-6 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 py-16 -my-8 rounded-xl border border-forest/5 shadow-[inset_0_1px_6px_rgba(0,0,0,0.02)] grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <svg className="w-8 h-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
          </svg>
          <h2 className="text-4xl md:text-5xl font-bold text-deepForest tracking-tight">Mission & Purpose</h2>
        </div>
        <p className="text-lg text-charcoal leading-relaxed">
          Accurate, real-time data is vital for understanding the complex environmental changes happening around us and for informing policy decisions. By engaging citizens in science and reporting, we harness local knowledge, create a sense of ownership, and fill critical data gaps that traditional methods often overlook.
        </p>
        <p className="text-lg text-charcoal leading-relaxed">
          This grassroots involvement not only democratizes climate information but also amplifies the voices of those most affected, ensuring that global solutions are informed by diverse, on-the-ground perspectives.
        </p>
      </div>
      <div className="relative h-[400px] w-full rounded-2xl overflow-hidden bg-forest/10 border border-forest/20 flex flex-col items-center justify-center shadow-inner">
        {/* Placeholder for actual image */}
        <span className="text-forest/40 font-bold uppercase tracking-widest text-sm">Mountain / Nature Landscape Image</span>
      </div>
    </section>
  );
}
