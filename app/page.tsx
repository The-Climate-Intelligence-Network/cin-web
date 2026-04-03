import Link from "next/link";
import HeroMap from "@/components/HeroMap";
import NetworkMapWrapper from "@/components/NetworkMapWrapper";
import Image from "next/image";

import ProjectCarousel from "@/components/ProjectCarousel";

export const revalidate = 300;

export default function Home() {
  return (
    <div className="flex flex-col gap-24 py-12 pb-24">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center gap-12 pt-8">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal/10 border border-teal/20">
            <span className="text-[10px] font-extrabold text-teal uppercase tracking-[0.2em]">
              The Climate Intelligence Network
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-deepForest tracking-tight leading-[1.1]">
            Data Driven. <span className="text-teal">Citizen Powered.</span> 
          </h1>
          <p className="text-xl text-charcoal leading-relaxed max-w-2xl">
            Equipping the Global South with real-time climate intelligence.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSd58XvbvKkeGLJhpetiuJhJ6MeV5LIrwxCivZtl4wSdlYE-Yw/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-sunflower text-charcoal font-bold uppercase tracking-widest px-8 py-4 rounded-lg hover:bg-sunflower/90 transition-all flex items-center gap-2 shadow-sm hover:shadow-md"
            >
              Join the Network
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              href="/about"
              className="border-2 border-forest text-forest font-bold uppercase tracking-widest px-8 py-4 rounded-lg hover:bg-forest/5 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        <HeroMap />
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
          <Link href="/mission-1-5" className="bg-sunflower text-charcoal font-bold px-8 py-4 rounded-full inline-flex items-center gap-2 hover:bg-sunflower/90 transition-transform hover:scale-105">
            LEARN MORE 
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
              We're a network of passionate changemakers from every district; students, professionals, advocates, and scientists; committed to climate action and biodiversity conservation nationwide. Join us for unique learning experiences, collaboration on impactful projects, access to funding and networking opportunities, and growth alongside like-minded individuals.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-forest/10 p-6 shadow-sm flex flex-col justify-center">
              <div className="text-4xl font-extrabold text-deepForest mb-2">20</div>
              <div className="text-xs font-bold text-charcoal/60 uppercase tracking-widest">Districts Covered</div>
            </div>
            <div className="bg-white rounded-xl border border-forest/10 p-6 shadow-sm flex flex-col justify-center">
              <div className="text-4xl font-extrabold text-deepForest mb-2">200+</div>
              <div className="text-xs font-bold text-charcoal/60 uppercase tracking-widest">Active Members</div>
            </div>
          </div>
        </div>
        <div className="relative h-[480px] w-full rounded-3xl overflow-hidden border border-forest/10 shadow-sm">
          <NetworkMapWrapper />
          {/* Live indicator badge */}
          <div className="absolute bottom-6 left-6 z-10 bg-white/95 backdrop-blur-sm rounded-xl px-6 py-4 border border-forest/10 shadow-lg flex items-center gap-3 pointer-events-none">
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
          <h2 className="text-4xl font-bold text-deepForest">Projects & Impact</h2>
        </div>
        
        {/* Carousel Component */}
        <div className="w-full">
          <ProjectCarousel />
        </div>
      </section>


      {/* Team */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <span className="text-teal font-bold text-sm uppercase tracking-widest">Who We Are</span>
          <h2 className="text-4xl font-bold text-deepForest">Meet the Team</h2>
          <p className="text-charcoal/60 leading-relaxed max-w-2xl mx-auto text-lg">
            A team of engineers, lawyers, technologists, and activists driving climate intelligence from the ground up.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 pt-4">
          {[
            { name: "Kaif Sally", role: "Co-founder/ Director - Strategy", bio: "Setting direction, priorities, and how CIN actually wins.", image: "/avatars/kaif.jpeg", linkedin: "https://www.linkedin.com/in/kaifsally/" },
            { name: "Simra Riyaz", role: "Co-founder/ Director - Policy & Legal", bio: "Navigating policy, compliance, and the rules that shape climate action.", image: "/avatars/simra.jpeg", linkedin: "https://lk.linkedin.com/in/simrariyaz" },
            { name: "Yuneth Wijenayake", role: "Co-founder/ Director - Tech + Data Controller ", bio: "Building the systems that collect, process, and power CIN’s data.", image: "/avatars/yuneth2.jpg", linkedin: "https://lk.linkedin.com/in/yunethw" },
            { name: "Chathurya Wanniarachchi", role: "Co-founder/ Director - Advocacy & Legal", bio: "Turning climate issues into action through advocacy and legal pathways.", image: "/avatars/arya.jpeg", linkedin: "https://lk.linkedin.com/in/chathurya-wanniarachchi" },
            { name: "Khadeeja Ilham", role: "Director – Network Growth & Community Power", bio: "Growing the network and activating communities across the country.", image: "/avatars/khadee.jpg", linkedin: "https://lk.linkedin.com/in/khadeeja-ilham-257759361" },
            { name: "Yashika Nipuni", role: "Director - Operations & Sustainability + Finance Controller", bio: "Keeping operations efficient and finances aligned with impact.", image: "/avatars/yash.jpg", linkedin: "https://lk.linkedin.com/in/yashika-nipuni-05a3181b4" },
            { name: "Abilaash Vijeakumar", role: "Director - Climate Storytelling", bio: "Translating climate work into stories people understand and engage with.", image: "/avatars/abi.jpeg", linkedin: "https://www.linkedin.com/in/abilaash-vijeyakumaren" },
            { name: "Sandu Dissanayake", role: "Director - Communications and Campaigns", bio: "Designing campaigns and communication that drive awareness and action.", image: "/avatars/sandu.jpeg", linkedin: "#" },
          ].map((member, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <Link 
                href={(member as any).linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-40 h-40 rounded-full border-[3px] border-forest bg-forest/10 flex items-center justify-center mb-6 overflow-hidden transition-all duration-300 group-hover:scale-105 shadow-sm relative cursor-pointer"
              >
                {(member as any).image ? (
                  <Image 
                    src={(member as any).image} 
                    alt={member.name} 
                    width={160} 
                    height={160} 
                    className="w-full h-full object-cover transition-all duration-300" 
                  />
                ) : (
                  <span className="text-forest/40 text-sm font-medium">Avatar {i + 1}</span>
                )}
              </Link>
              <h3 className="text-xl font-bold text-deepForest mb-1">{member.name}</h3>
              <div className="text-teal font-bold text-xs uppercase tracking-widest mb-3">{member.role}</div>
              <p className="text-sm text-charcoal/80 leading-relaxed px-4">
                {member.bio}
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
                Our work is guided by experts in climate science, policy, and technology, ensuring our initiatives are grounded in rigor and best practices.
              </p>
            </div>
            {/* <div>
              <Link href="/about#advisory-board" className="inline-flex items-center gap-2 text-forest font-bold text-sm uppercase tracking-widest hover:text-deepForest transition-colors group">
                View All Advisors
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div> */}
          </div>
          <div className="lg:col-span-8 xl:col-span-7 flex flex-col gap-4">
            {[
              { 
                name: "Ms. Wathsala Jayamanna", 
                boardPosition: "Advisory Chair", 
                role: "Programme Officer (Emergency Response & Resilience) at UNICEF Sri Lanka | 10+ years in Child Protection & Humanitarian Response.",
                image: "/avatars/wathsala.png",
                linkedin: "https://lk.linkedin.com/in/wathsalajayamanna"
              },
              { 
                name: "Ms. Shanuki De Alwis", 
                boardPosition: "Communications Advisor", 
                role: "23+ yrs Brand & Social Advocacy | Communications & Inclusion Specialist | Programme Director - Bleed Good Initiative.",
                image: "/avatars/shanuki.jpg",
                linkedin: "https://lk.linkedin.com/in/shanukidealwis"
              },
            ].map((advisor, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-forest/10 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:shadow-md transition-all hover:-translate-y-0.5">
                <Link 
                  href={(advisor as any).linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-16 h-16 rounded-full bg-forest/10 shrink-0 flex items-center justify-center border border-forest/10 overflow-hidden relative cursor-pointer"
                >
                  {(advisor as any).image ? (
                    <Image src={(advisor as any).image} alt={advisor.name} width={64} height={64} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-forest/40 text-[10px] font-bold font-mono text-center leading-tight px-2">IMG {i + 1}</span>
                  )}
                </Link>
                <div className="space-y-2 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
                    <h4 className="text-xl font-bold text-deepForest">{advisor.name}</h4>
                    <span className="text-teal font-extrabold text-[10px] uppercase tracking-widest">
                      {advisor.boardPosition}
                    </span>
                  </div>
                  <p className="text-sm text-charcoal/80 leading-relaxed max-w-2xl">
                    {advisor.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved pathways */}
      <section className="bg-[#F7FAF4] -mx-6 px-6 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 py-20 -my-8 rounded-2xl border border-forest/5 shadow-[inset_0_1px_6px_rgba(0,0,0,0.02)]">
        <div className="text-center space-y-12 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-deepForest tracking-tight">Contribute to Climate Intelligence</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Join */}
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-forest/10 flex flex-col items-center text-center group hover:shadow-md hover:border-sunflower transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-sunflower/10 flex items-center justify-center text-sunflower mb-6 group-hover:bg-sunflower group-hover:text-charcoal transition-colors duration-300">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-deepForest mb-3">Join</h3>
              <p className="text-charcoal leading-relaxed mb-8 flex-grow">
                Join as a network member.
              </p>
              <Link 
                href="https://docs.google.com/forms/d/e/1FAIpQLSd58XvbvKkeGLJhpetiuJhJ6MeV5LIrwxCivZtl4wSdlYE-Yw/viewform?usp=dialog" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest font-extrabold tracking-[0.2em] text-xs uppercase hover:text-deepForest transition-colors"
              >
                SIGN UP
              </Link>
            </div>

            {/* Contribute */}
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-forest/10 flex flex-col items-center text-center group hover:shadow-md hover:border-sunflower transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center text-teal mb-6 group-hover:bg-teal group-hover:text-white transition-colors duration-300">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 0 8.5C17 15.5 13 17 11 20z"/><path d="M11 20c-2.5-3-2.5-8.5 3-14"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-deepForest mb-3">Contribute</h3>
              <p className="text-charcoal leading-relaxed mb-8 flex-grow">
                Contribute time, skills or data.
              </p>
              <Link 
                href="/mission-1-5" 
                className="text-forest font-extrabold tracking-[0.2em] text-xs uppercase hover:text-deepForest transition-colors"
              >
                APPLY NOW
              </Link>
            </div>

            {/* Partner */}
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-forest/10 flex flex-col items-center text-center group hover:shadow-md hover:border-sunflower transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center text-forest mb-6 group-hover:bg-forest group-hover:text-white transition-colors duration-300">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-deepForest mb-3">Partner</h3>
              <p className="text-charcoal leading-relaxed mb-8 flex-grow">
                For organizations to collaborate.
              </p>
              <Link 
                href="/get-involved" 
                className="text-forest font-extrabold tracking-[0.2em] text-xs uppercase hover:text-deepForest transition-colors"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Strip */}
      <section className="bg-deepIris/10 border-l-4 border-deepIris -mx-6 px-6 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 py-12 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6 transition-all">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-deepForest">Building Climate Infrastructure?</h2>
          <p className="text-charcoal/80 text-lg">Join our developer team and help build the open-source civic codebase for climate intelligence.</p>
        </div>
        <Link href="/developers" className="border-2 border-deepIris text-deepIris font-bold uppercase tracking-widest px-8 py-4 rounded-lg hover:bg-deepIris hover:text-white transition-all shadow-sm hover:shadow-md">
          Join Developer Team
        </Link>
      </section>

    </div>
  );
}
