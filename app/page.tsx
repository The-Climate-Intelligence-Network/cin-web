import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 py-12 pb-24">
      {/* STEP 8: Hero Section */}
      <section className="flex flex-col lg:flex-row items-center gap-12 pt-8">
        <div className="flex-1 space-y-8">
          <h1 className="text-5xl lg:text-7xl font-bold text-deepForest tracking-tight leading-[1.1]">
            Data Driven. <span className="text-teal">Citizen</span> Powered.
          </h1>
          <p className="text-xl text-charcoal leading-relaxed max-w-2xl">
            Equip the Global South with real-time climate intelligence tools and citizen-powered reporting infrastructure.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/mission-1-5"
              className="bg-sunflower text-deepForest font-semibold px-8 py-3 rounded hover:bg-sunflower/90 transition-colors"
            >
              Start Mission 1.5
            </Link>
            <Link
              href="/get-involved"
              className="border-2 border-forest text-forest font-semibold px-8 py-3 rounded hover:bg-forest/5 transition-colors"
            >
              Join the Network
            </Link>
          </div>
        </div>
        <div className="flex-1 w-full bg-forest/5 rounded border border-forest/10 p-8 min-h-[400px] flex items-center justify-center">
          <span className="text-forest/60 font-medium">Data Visualization Area</span>
        </div>
      </section>

      {/* STEP 9: Mission Snapshot Section */}
      <section className="bg-jade/10 -mx-6 px-6 py-16 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 rounded">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-deepForest leading-tight">Mission</h3>
            <p className="text-charcoal leading-relaxed">
              To deploy community-driven sensors and analytical frameworks, bringing ground-truth data to regional climate models.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-deepForest leading-tight">Why Climate Intelligence Matters</h3>
            <p className="text-charcoal leading-relaxed">
              Local data remains sparse where climate impacts hit hardest. We fill the gaps to enable proactive civic planning and resilience.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-deepForest leading-tight">Principles & Values</h3>
            <p className="text-charcoal leading-relaxed">
              Open accessibility, rigorous methodology, and empowerment of local stewards form the foundation of every dataset we publish.
            </p>
          </div>
        </div>
      </section>

      {/* STEP 10: Campaigns Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-deepForest tracking-tight">Active Campaigns</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-forest text-surface p-8 rounded border border-forest/20 flex flex-col justify-between min-h-[240px]">
            <div className="space-y-4">
              <div className="w-10 h-10 border border-surface/30 rounded flex items-center justify-center">
                <svg className="w-5 h-5 text-surface" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold">On The Ground</h3>
              <p className="text-surface/80">Deploying hardware nodes in critical urban heat islands to monitor microclimate variations.</p>
            </div>
          </div>
          <div className="bg-jade/20 text-deepForest p-8 rounded border border-jade/40 flex flex-col justify-between min-h-[240px]">
            <div className="space-y-4">
              <div className="w-10 h-10 border border-deepForest/20 rounded flex items-center justify-center">
                <svg className="w-5 h-5 text-deepForest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold">Sounds of Nature</h3>
              <p className="text-deepForest/80">Acoustic monitoring initiatives to track biodiversity shifts in rapidly changing ecosystems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STEP 11: Impact / Project Showcase */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-deepForest tracking-tight">Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-forest/20 p-6 rounded bg-surface">
            <span className="text-sm font-medium text-charcoal uppercase tracking-wider">District Coverage</span>
            <div className="text-4xl font-bold text-deepForest mt-2">1,204</div>
          </div>
          <div className="border border-forest/20 p-6 rounded bg-surface">
            <span className="text-sm font-medium text-charcoal uppercase tracking-wider">Reports Submitted</span>
            <div className="text-4xl font-bold text-deepForest mt-2">48.5K</div>
          </div>
          <div className="border border-forest/20 p-6 rounded bg-surface">
            <span className="text-sm font-medium text-charcoal uppercase tracking-wider">Verified Actions</span>
            <div className="text-4xl font-bold text-deepForest mt-2">8,920</div>
          </div>
        </div>
        <div className="w-full bg-forest/5 border border-forest/10 rounded h-64 flex items-center justify-center">
          <span className="text-charcoal/50 font-medium">Chart Container Placeholder</span>
        </div>
      </section>

      {/* STEP 12: Live Data Snapshot */}
      <section className="bg-deepIris/5 border border-deepIris/10 rounded p-8 sm:p-12 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold text-deepForest tracking-tight">Live Data Explorer</h2>
          <p className="text-charcoal leading-relaxed">
            Monitor real-time atmospheric shifts and water quality metrics actively reported by our sensor networks.
          </p>
          <Link href="/data" className="inline-block border border-deepIris text-deepIris font-medium px-6 py-2 rounded hover:bg-deepIris hover:text-white transition-colors">
            Explore Data
          </Link>
        </div>
        <div className="flex-1 w-full bg-white border border-deepIris/20 rounded h-64 flex items-center justify-center shadow-sm">
          <span className="text-deepIris/50 font-medium tracking-wide">Map Preview Placeholder</span>
        </div>
      </section>

      {/* STEP 13 & 14: Featured Knowledge & Insight */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-deepForest uppercase tracking-wider text-sm">From the Knowledge Hub</h2>
          <div className="border-t border-forest/20 pt-6 space-y-4">
            <h3 className="text-2xl font-semibold text-deepForest leading-snug">
              Understanding Urban Heat Island Mitigation Frameworks
            </h3>
            <p className="text-charcoal leading-relaxed">
              A comprehensive guide into the civic interventions required to reduce surface temperatures in high-density zones.
            </p>
            <Link href="/knowledge" className="text-forest font-medium hover:underline inline-flex items-center gap-1">
              Read Guide <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-bold text-deepForest uppercase tracking-wider text-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal"></span>
            Latest Insight
          </h2>
          <div className="border border-forest/10 bg-surface rounded p-6 space-y-4">
            <h3 className="text-2xl font-semibold text-deepForest leading-snug">
              The Critical Role of Micro-sensors in Policy Making
            </h3>
            <p className="text-charcoal leading-relaxed">
              How granular data collection shifts governmental approaches to regional environmental planning and budget allocation.
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-forest/10 text-sm text-charcoal">
              <span className="font-medium text-deepForest">Dr. Elena Rostova</span>
              <span>Oct 12, 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* STEP 15: Get Involved Section */}
      <section className="bg-forest text-surface rounded p-12 text-center space-y-8">
        <h2 className="text-3xl font-bold tracking-tight">Get Involved</h2>
        <p className="max-w-xl mx-auto text-surface/80 text-lg leading-relaxed">
          The Climate Intelligence Network scales through collaborative effort. Contribute to the system through various pathways.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
          <div className="flex items-center gap-4 text-surface/90 font-medium">
            <span>Join</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>Volunteer</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>Partner</span>
          </div>
        </div>
        <div className="pt-4">
          <Link href="/get-involved" className="inline-block bg-sunflower text-deepForest font-semibold px-10 py-3 rounded hover:bg-sunflower/90 transition-colors">
            Take Action
          </Link>
        </div>
      </section>

      {/* STEP 16: Developers Strip */}
      <section className="bg-deepIris/10 border-l-4 border-deepIris p-6 sm:p-8 rounded flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold text-deepForest">Building Climate Infrastructure?</h2>
          <p className="text-charcoal">Integrate our APIs or contribute to the open-source civic codebase.</p>
        </div>
        <Link href="/developers" className="border border-deepIris text-deepIris font-medium px-6 py-2 rounded hover:bg-deepIris hover:text-white transition-colors">
          Contribute
        </Link>
      </section>

    </div>
  );
}
