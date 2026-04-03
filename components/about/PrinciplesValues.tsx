import React from 'react';

export default function PrinciplesValues() {
  return (
    <section className="space-y-12 py-16">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-3">
          <svg className="w-8 h-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
          <h2 className="text-4xl md:text-5xl font-bold text-deepForest tracking-tight">Principles & Values</h2>
        </div>
        <p className="text-lg text-charcoal/80 leading-relaxed">
          Our core values guide everything we do, from building technology to engaging with local communities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl p-10 shadow-sm border border-forest/10 flex flex-col group hover:shadow-md transition-all duration-300 hover:-translate-y-1">
          <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center text-teal mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-deepForest mb-3">Data-Driven Action</h3>
          <p className="text-charcoal leading-relaxed flex-grow">
            We believe that accurate, accessible data is the foundation of effective climate policy and community resilience.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl p-10 shadow-sm border border-forest/10 flex flex-col group hover:shadow-md transition-all duration-300 hover:-translate-y-1">
          <div className="w-14 h-14 rounded-full bg-sunflower/10 flex items-center justify-center text-sunflower mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-deepForest mb-3">Citizen Empowerment</h3>
          <p className="text-charcoal leading-relaxed flex-grow">
            We empower individuals to take an active role in climate action through citizen science and grassroots reporting.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl p-10 shadow-sm border border-forest/10 flex flex-col group hover:shadow-md transition-all duration-300 hover:-translate-y-1">
          <div className="w-14 h-14 rounded-full bg-forest/10 flex items-center justify-center text-forest mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-deepForest mb-3">Global South Focus</h3>
          <p className="text-charcoal leading-relaxed flex-grow">
            We prioritize the voices and needs of communities in the Global South, who are often most affected by climate change.
          </p>
        </div>
      </div>
    </section>
  );
}
