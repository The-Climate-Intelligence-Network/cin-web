import Link from 'next/link';
import { FileText, Landmark, ArrowRight, DollarSign } from 'lucide-react';

export default function Transparency() {
  return (
    <section className="space-y-12 py-16">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-3">
          <FileText className="w-8 h-8 text-teal" />
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
            <Landmark className="w-6 h-6" strokeWidth={2.5} />
          </div>
          <h3 className="text-2xl font-bold text-deepForest mb-3">Governance</h3>
          <p className="text-charcoal leading-relaxed flex-grow mb-8">
            CIN operates under a decentralized governance model, ensuring that local network nodes have a voice in strategic decisions and resource allocation.
          </p>
          <Link href="#" className="text-forest font-extrabold tracking-[0.2em] text-xs uppercase hover:text-deepForest transition-colors inline-flex items-center gap-2">
            READ GOVERNANCE POLICY 
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Funding */}
        <div className="bg-white rounded-2xl p-10 shadow-sm border border-forest/10 flex flex-col group hover:shadow-md transition-all duration-300 hover:-translate-y-1">
          <div className="w-14 h-14 rounded-full bg-sunflower/10 flex items-center justify-center text-sunflower mb-6">
            <DollarSign className="w-6 h-6" strokeWidth={3} />
          </div>
          <h3 className="text-2xl font-bold text-deepForest mb-3">Funding</h3>
          <p className="text-charcoal leading-relaxed flex-grow mb-8">
            Our operations are funded through a mix of philanthropic grants, institutional partnerships, and community contributions. We maintain strict financial independence.
          </p>
          <Link href="#" className="text-forest font-extrabold tracking-[0.2em] text-xs uppercase hover:text-deepForest transition-colors inline-flex items-center gap-2">
            VIEW FINANCIALS
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Annual Reports */}
        <div className="bg-white rounded-2xl p-10 shadow-sm border border-forest/10 flex flex-col group hover:shadow-md transition-all duration-300 hover:-translate-y-1">
          <div className="w-14 h-14 rounded-full bg-forest/10 flex items-center justify-center text-forest mb-6">
            <FileText className="w-6 h-6" strokeWidth={2.5} />
          </div>
          <h3 className="text-2xl font-bold text-deepForest mb-3">Annual Reports</h3>
          <p className="text-charcoal leading-relaxed flex-grow mb-8">
            We publish comprehensive annual reports detailing our project outcomes, network growth, and financial statements to ensure complete accountability.
          </p>

          <div className="flex flex-col gap-4">
            <Link href="#" className="text-forest font-extrabold tracking-[0.2em] text-xs uppercase hover:text-deepForest transition-colors inline-flex items-center gap-2">
              2025 Impact Report
              <ArrowRight className="w-4 h-4 ml-auto" />
            </Link>
            <Link href="#" className="text-forest font-extrabold tracking-[0.2em] text-xs uppercase hover:text-deepForest transition-colors inline-flex items-center gap-2">
              2024 Annual Report
              <ArrowRight className="w-4 h-4 ml-auto" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
