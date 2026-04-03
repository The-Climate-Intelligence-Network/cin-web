import Link from 'next/link';
import React from 'react';

export default function Transparency() {
  return (
    <section className="space-y-12 py-16">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-3">
          <svg className="w-8 h-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          <h2 className="text-4xl md:text-5xl font-bold text-deepForest tracking-tight">Transparency</h2>
        </div>
        <p className="text-lg text-charcoal/80 leading-relaxed">
          We are committed to open governance, clear funding streams, and regular reporting on our impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Governance */}
        <div className="bg-white rounded-2xl p-10 shadow-sm border border-forest/10 flex flex-col group hover:shadow-md transition-all duration-300 hover:-translate-y-1">
          <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center text-teal mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 22h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path><path d="M4 14V6"></path><path d="M20 14V6"></path><path d="M12 14V6"></path><polygon points="12 2 20 6 4 6 12 2"></polygon>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-deepForest mb-3">Governance</h3>
          <p className="text-charcoal leading-relaxed flex-grow mb-8">
            CIN operates under a decentralized governance model, ensuring that local network nodes have a voice in strategic decisions and resource allocation.
          </p>
          <Link href="#" className="text-forest font-extrabold tracking-[0.2em] text-xs uppercase hover:text-deepForest transition-colors inline-flex items-center gap-2">
            READ GOVERNANCE POLICY 
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Funding */}
        <div className="bg-white rounded-2xl p-10 shadow-sm border border-forest/10 flex flex-col group hover:shadow-md transition-all duration-300 hover:-translate-y-1">
          <div className="w-14 h-14 rounded-full bg-sunflower/10 flex items-center justify-center text-sunflower mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-deepForest mb-3">Funding</h3>
          <p className="text-charcoal leading-relaxed flex-grow mb-8">
            Our operations are funded through a mix of philanthropic grants, institutional partnerships, and community contributions. We maintain strict financial independence.
          </p>
          <Link href="#" className="text-forest font-extrabold tracking-[0.2em] text-xs uppercase hover:text-deepForest transition-colors inline-flex items-center gap-2">
            VIEW FINANCIALS
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Annual Reports */}
        <div className="bg-white rounded-2xl p-10 shadow-sm border border-forest/10 flex flex-col group hover:shadow-md transition-all duration-300 hover:-translate-y-1">
          <div className="w-14 h-14 rounded-full bg-forest/10 flex items-center justify-center text-forest mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-deepForest mb-3">Annual Reports</h3>
          <p className="text-charcoal leading-relaxed flex-grow mb-8">
            We publish comprehensive annual reports detailing our project outcomes, network growth, and financial statements to ensure complete accountability.
          </p>

          <div className="flex flex-col gap-4">
            <Link href="#" className="text-forest font-extrabold tracking-[0.2em] text-xs uppercase hover:text-deepForest transition-colors inline-flex items-center gap-2">
              2025 Impact Report
              <svg className="w-4 h-4 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link href="#" className="text-forest font-extrabold tracking-[0.2em] text-xs uppercase hover:text-deepForest transition-colors inline-flex items-center gap-2">
              2024 Annual Report
              <svg className="w-4 h-4 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
