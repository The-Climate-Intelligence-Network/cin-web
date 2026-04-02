import Link from "next/link";

export const revalidate = 300;

export default function Home() {
  return (
    <div className="flex flex-col gap-24 py-12 pb-24">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center gap-12 pt-8">
        <div className="flex-1 space-y-8">
          <h1 className="text-5xl lg:text-7xl font-bold text-deepForest tracking-tight leading-[1.1]">
            Data Driven. <span className="text-teal">Citizen Powered.</span> 
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

      {/* Mission 1.5 Banner */}
      <section className="bg-[#46A6A8] text-white -mx-6 px-6 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 py-16 flex flex-col md:flex-row items-center justify-between gap-8 rounded-xl shadow-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5 mix-blend-multiply"></div>
        <div className="relative z-10 flex-1 space-y-4 max-w-3xl">
          <div className="text-sunflower font-bold tracking-widest text-sm uppercase">Coming Soon</div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Mission 1.5 App</h2>
          <p className="text-white/95 text-lg leading-relaxed max-w-2xl">
            A gamified platform designed to reshape how individuals and communities engage in climate action. Join the global movement for climate solutions.
          </p>
        </div>
        <div className="relative z-10 flex-shrink-0">
          <Link href="/mission-1-5" className="bg-sunflower text-deepForest font-bold px-8 py-4 rounded-full inline-flex items-center gap-2 hover:bg-sunflower/90 transition-transform hover:scale-105">
            LEARN MORE 
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Network & Impact */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 lg:pr-8">
          <div className="space-y-4">
            <span className="text-teal font-bold text-sm uppercase tracking-widest">The Network</span>
            <h2 className="text-4xl md:text-5xl font-bold text-deepForest leading-tight">
              Empowering Citizen Science Across Sri Lanka
            </h2>
            <p className="text-charcoal text-lg leading-relaxed">
              Our network harnesses the power of citizen science and reporting to drive impactful climate action. We empower individuals to collect data, share on-the-ground stories, and collaborate with scientists and professionals.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-forest/10 p-6 shadow-sm flex flex-col justify-center">
              <div className="text-4xl font-extrabold text-deepForest mb-2">25</div>
              <div className="text-xs font-bold text-charcoal/60 uppercase tracking-widest">Districts Covered</div>
            </div>
            <div className="bg-white rounded-xl border border-forest/10 p-6 shadow-sm flex flex-col justify-center">
              <div className="text-4xl font-extrabold text-deepForest mb-2">500+</div>
              <div className="text-xs font-bold text-charcoal/60 uppercase tracking-widest">Active Members</div>
            </div>
          </div>
        </div>
        <div className="relative h-[480px] w-full rounded-3xl overflow-hidden bg-forest/5 border border-forest/10 flex items-center justify-center">
          <span className="text-forest/40 font-semibold text-lg">Interactive Map Placeholder</span>
          <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-6 py-4 border border-forest/10 shadow-lg flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-teal"></span>
            </span>
            <span className="font-semibold text-deepForest text-sm">Live Network Activity</span>
          </div>
        </div>
      </section>

      {/* Finished Projects Carousel */}
      <section className="space-y-12 bg-[#F7FAF4] -mx-6 px-6 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 py-16 -my-8 rounded-xl border border-forest/5 shadow-[inset_0_1px_6px_rgba(0,0,0,0.02)]">
        <div className="space-y-2">
          <span className="text-teal font-bold text-sm uppercase tracking-widest">Our Work</span>
          <h2 className="text-4xl font-bold text-deepForest">Completed Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-forest/10 flex flex-col hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="h-56 bg-forest/20 flex items-center justify-center relative overflow-hidden">
              <span className="text-forest/60 font-medium">Coastal Image Placeholder</span>
              <div className="absolute inset-0 bg-deepForest/5 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-deepForest mb-3">Coastal Mangrove Restoration</h3>
              <p className="text-charcoal leading-relaxed mb-8 flex-1">
                Community-led effort to restore vital mangrove ecosystems along the western coastline, protecting against erosion and fostering marine biodiversity.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-forest/10">
                <div>
                  <div className="text-xl font-bold text-teal mb-1">10,000+</div>
                  <div className="text-[10px] font-bold text-charcoal/60 uppercase tracking-widest">Trees Planted</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-teal mb-1">50ha</div>
                  <div className="text-[10px] font-bold text-charcoal/60 uppercase tracking-widest">Area Restored</div>
                </div>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-forest/10 flex flex-col hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="h-56 bg-forest/20 flex items-center justify-center relative overflow-hidden">
              <span className="text-forest/60 font-medium">Urban Water Image Placeholder</span>
              <div className="absolute inset-0 bg-deepForest/5 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-deepForest mb-3">Urban Water Quality</h3>
              <p className="text-charcoal leading-relaxed mb-8 flex-1">
                Citizen scientists tracking pollution levels in major urban waterways to enable targeted interventions and drive policy improvement.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-forest/10">
                <div>
                  <div className="text-xl font-bold text-teal mb-1">1,200</div>
                  <div className="text-[10px] font-bold text-charcoal/60 uppercase tracking-widest">Samples Taken</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-teal mb-1">3</div>
                  <div className="text-[10px] font-bold text-charcoal/60 uppercase tracking-widest">Policy Changes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <span className="text-teal font-bold text-sm uppercase tracking-widest">Who We Are</span>
          <h2 className="text-4xl font-bold text-deepForest">Meet the Team</h2>
          <p className="text-charcoal leading-relaxed max-w-2xl mx-auto text-lg">
            A dedicated group of scientists, technologists, and activists working towards a sustainable future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 pt-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-40 h-40 rounded-full border-[3px] border-forest bg-forest/10 flex items-center justify-center mb-6 overflow-hidden transition-transform duration-300 group-hover:scale-105 shadow-sm">
                <span className="text-forest/40 text-sm font-medium">Avatar {i}</span>
              </div>
              <h3 className="text-xl font-bold text-deepForest mb-1">Jane Doe</h3>
              <div className="text-teal font-bold text-xs uppercase tracking-widest mb-3">Lead Scientist</div>
              <p className="text-sm text-charcoal/80 leading-relaxed px-4">
                Expert in biodiversity and community-led conservation strategies.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Advisory Board */}
      <section className="bg-[#F7FAF4] -mx-6 px-6 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 py-16 -my-8 rounded-xl border border-forest/5 shadow-[inset_0_1px_6px_rgba(0,0,0,0.02)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4 xl:col-span-5 space-y-6 flex flex-col justify-center">
            <div>
              <span className="text-teal font-bold text-sm uppercase tracking-widest">Guidance</span>
              <h2 className="text-4xl font-bold text-deepForest mt-2 mb-4 leading-tight">Advisory Board</h2>
              <p className="text-charcoal leading-relaxed text-lg mb-8">
                Our work is guided by global experts in climate science, policy, and technology, ensuring our initiatives are grounded in rigor and best practices.
              </p>
            </div>
            <div>
              <Link href="/about#advisory-board" className="inline-flex items-center gap-2 text-forest font-bold text-sm uppercase tracking-widest hover:text-deepForest transition-colors group">
                View All Advisors
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-8 xl:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-forest/10 flex items-center gap-5 hover:shadow-md transition-all hover:-translate-y-0.5 max-h-24">
                <div className="w-14 h-14 rounded-full bg-forest/10 shrink-0 flex items-center justify-center">
                  <span className="text-forest/40 text-[9px] font-bold">Image {i}</span>
                </div>
                <div className="min-w-0">
                  <h4 className="text-lg font-bold text-deepForest truncate">Dr. John Smith</h4>
                  <p className="text-sm text-charcoal/70 truncate pt-0.5">Professor of Climatology</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-deepForest text-surface rounded-2xl p-12 md:p-16 text-center space-y-6 relative overflow-hidden mt-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-forest/40 via-deepForest to-deepForest opacity-60"></div>
        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Be Part of the Solution</h2>
          <p className="text-surface/90 text-lg md:text-xl leading-relaxed">
            The Climate Intelligence Network scales through collaborative effort. Contribute to the system through various pathways and make a measurable impact.
          </p>
          <div className="pt-4">
            <Link href="/get-involved" className="inline-block bg-sunflower text-deepForest font-bold px-10 py-4 text-lg rounded px-8 hover:bg-sunflower/90 transition-transform hover:-translate-y-0.5 shadow-lg">
              Join the Movement
            </Link>
          </div>
        </div>
      </section>

      {/* Developer Strip */}
      <section className="bg-deepIris/10 border-l-4 border-deepIris p-6 sm:p-8 rounded flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold text-deepForest">Building Climate Infrastructure?</h2>
          <p className="text-charcoal bg-transparent">Integrate our APIs or contribute to the open-source civic codebase.</p>
        </div>
        <Link href="/developers" className="border border-deepIris text-deepIris font-medium px-6 py-2 rounded hover:bg-deepIris hover:text-white transition-colors">
          Contribute
        </Link>
      </section>

    </div>
  );
}
