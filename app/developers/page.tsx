import Link from "next/link";

export default function DevelopersPage() {
  return (
    <div className="py-24 space-y-16">
      <section className="space-y-8 max-w-4xl">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-deepIris/10 border border-deepIris/20">
          <span className="text-[10px] font-extrabold text-deepIris uppercase tracking-[0.2em]">
            Developer Portal
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-deepForest tracking-tight leading-tight">
          Building the Future of <br />
          <span className="text-deepIris">Climate Infrastructure</span>
        </h1>
        <p className="text-xl text-charcoal/80 leading-relaxed max-w-2xl">
          We're engineering an open-source, data-driven civic architecture for climate resilience in the Global South.
        </p>
      </section>

      <section className="bg-deepIris/5 border-l-4 border-deepIris p-12 rounded-2xl space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-deepForest">Join the Development Team</h2>
          <p className="text-lg text-charcoal/80 leading-relaxed max-w-3xl">
            Our APIs and public data schemas are currently under development. We are looking for backend engineers, data architects, and GIS specialists to help us build the foundational codebase for CIN.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-6 pt-4">
          <Link 
            href="/get-involved" 
            className="bg-deepIris text-white font-bold uppercase tracking-widest px-8 py-4 rounded-lg hover:bg-deepIris/90 transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
          >
            Apply to Join Team
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14m-7-7 7 7-7 7"/>
            </svg>
          </Link>
          <Link 
            href="/" 
            className="border-2 border-forest text-forest font-bold uppercase tracking-widest px-8 py-4 rounded-lg hover:bg-forest/5 transition-all text-center"
          >
            Back to Home
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white border border-forest/10 p-8 rounded-xl space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-lg bg-deepIris/10 flex items-center justify-center text-deepIris">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-deepForest">Open Source Codebase</h3>
          <p className="text-charcoal/70">Our repositories will be public once the alpha infrastructure is stabilized. Help us define the core architecture.</p>
        </div>
        <div className="bg-white border border-forest/10 p-8 rounded-xl space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-lg bg-deepIris/10 flex items-center justify-center text-deepIris">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-deepForest">Data Sovereignty</h3>
          <p className="text-charcoal/70">Join us in building systems that ensure data privacy and community ownership of climate intelligence.</p>
        </div>
      </section>
    </div>
  );
}
