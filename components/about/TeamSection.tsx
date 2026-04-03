import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function TeamSection() {
  const teamMembers = [
    { name: "Kaif Sally", role: "Co-founder/ Director - Strategy", bio: "Setting direction, priorities, and how CIN actually wins.", image: "/avatars/kaif.jpeg", linkedin: "https://www.linkedin.com/in/kaifsally/" },
    { name: "Simra Riyaz", role: "Co-founder/ Director - Policy & Legal", bio: "Navigating policy, compliance, and the rules that shape climate action.", image: "/avatars/simra.jpeg", linkedin: "https://lk.linkedin.com/in/simrariyaz" },
    { name: "Yuneth Wijenayake", role: "Co-founder/ Director - Tech + Data Controller ", bio: "Building the systems that collect, process, and power CIN’s data.", image: "/avatars/yuneth2.jpg", linkedin: "https://lk.linkedin.com/in/yunethw" },
    { name: "Chathurya Wanniarachchi", role: "Co-founder/ Director - Advocacy & Legal", bio: "Turning climate issues into action through advocacy and legal pathways.", image: "/avatars/arya.jpeg", linkedin: "https://lk.linkedin.com/in/chathurya-wanniarachchi" },
    { name: "Khadeeja Ilham", role: "Director – Network Growth & Community Power", bio: "Growing the network and activating communities across the country.", image: "/avatars/khadee.jpg", linkedin: "https://lk.linkedin.com/in/khadeeja-ilham-257759361" },
    { name: "Yashika Nipuni", role: "Director - Operations & Sustainability + Finance Controller", bio: "Keeping operations efficient and finances aligned with impact.", image: "/avatars/yash.jpg", linkedin: "https://lk.linkedin.com/in/yashika-nipuni-05a3181b4" },
    { name: "Abilaash Vijeakumar", role: "Director - Climate Storytelling", bio: "Translating climate work into stories people understand and engage with.", image: "/avatars/abi.jpeg", linkedin: "https://www.linkedin.com/in/abilaash-vijeyakumaren" },
    { name: "Sandu Dissanayake", role: "Director - Communications and Campaigns", bio: "Designing campaigns and communication that drive awareness and action.", image: "/avatars/sandu.jpeg", linkedin: "#" },
  ];

  return (
    <section className="space-y-12 py-16">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <svg className="w-8 h-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <h2 className="text-4xl font-bold text-deepForest">Our Team</h2>
        </div>
        <p className="text-charcoal/60 leading-relaxed max-w-2xl mx-auto text-lg">
          A team of engineers, lawyers, technologists, and activists driving climate intelligence from the ground up.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 pt-4">
        {teamMembers.map((member, i) => (
          <div key={i} className="flex flex-col items-center text-center group">
            <Link 
              href={member.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-40 h-40 rounded-full border-[3px] border-forest bg-forest/10 flex items-center justify-center mb-6 overflow-hidden transition-all duration-300 group-hover:scale-105 shadow-sm relative cursor-pointer"
            >
              {member.image ? (
                <Image 
                  src={member.image} 
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
  );
}
