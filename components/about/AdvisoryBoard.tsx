import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AdvisoryBoard() {
  const advisors = [
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
  ];

  return (
    <section className="bg-[#F7FAF4] -mx-6 px-6 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 py-16 -my-8 rounded-xl border border-forest/5 shadow-[inset_0_1px_6px_rgba(0,0,0,0.02)] list-none">
      <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
        <div className="flex items-center justify-center gap-3">
          <svg className="w-8 h-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <path d="m9 12 2 2 4-4"></path>
          </svg>
          <h2 className="text-4xl md:text-5xl font-bold text-deepForest tracking-tight">Advisory Board</h2>
        </div>
        <p className="text-lg text-charcoal/80 leading-relaxed">
          Our work is guided by experts in climate science, policy, and technology, ensuring our initiatives are grounded in rigor and best practices.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {advisors.map((advisor, i) => (
          <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-forest/10 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:shadow-md transition-all hover:-translate-y-0.5">
            <Link 
              href={advisor.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-16 h-16 rounded-full bg-forest/10 shrink-0 flex items-center justify-center border border-forest/10 overflow-hidden relative cursor-pointer"
            >
              {advisor.image ? (
                <Image src={advisor.image} alt={advisor.name} width={64} height={64} className="w-full h-full object-cover" />
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
    </section>
  );
}
