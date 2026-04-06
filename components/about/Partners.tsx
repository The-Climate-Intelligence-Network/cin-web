import React from 'react';
import Image from 'next/image';
import { Handshake } from 'lucide-react';

const partners = [
  { name: 'UNICEF', logo: '/partnerlogos/unicef.png', fullName: 'UNICEF Sri Lanka' },
  { name: 'U-Report', logo: '/partnerlogos/UREPORT.png', fullName: 'U-Report Sri Lanka' },
  { name: 'IOM', logo: '/partnerlogos/IOM-official_Logo_PRIM_BLUE_RGB-EN.svg', fullName: 'International Organization for Migration' },
  { name: 'World Food Programme', logo: '/partnerlogos/World_Food_Programme_Logo_Simple.svg.png', fullName: 'World Food Programme' },
  { name: 'YOUNGO', logo: '/partnerlogos/youngo.jpg', fullName: 'YOUNGO (Official Youth Constituency to the UNFCCC)' },
  { name: 'World Youth Development Forum', logo: '/partnerlogos/wydf.jpg', fullName: 'World Youth Development Forum' },
  { name: 'Greenpeace', logo: '/partnerlogos/gp.png', fullName: 'Greenpeace' },
  { name: 'WNPS Youth', logo: '/partnerlogos/WNPS-YOUTH_FINAL_web-01.png', fullName: 'Wildlife and Nature Protection Society (WNPS) Youth Wing' },
  { name: 'The Pearl Protectors', logo: '/partnerlogos/The-Pearl-Protectors-Logo-Horizontal-Black.png', fullName: 'The Pearl Protectors' },
  { name: 'GYBN', logo: '/partnerlogos/GYBN.png', fullName: 'Global Youth Biodiversity Network' },
  { name: 'AIESEC Sri Lanka', logo: '/partnerlogos/Blue-Logo-1.webp', fullName: 'AIESEC Sri Lanka' },
  { name: 'Rotaract Club of Colombo Fort', logo: '/partnerlogos/Colombo Fort - Cranberry.png', fullName: 'Rotaract Club of Colombo Fort' },
  { name: 'Rotaract Club of Colombo North', logo: '/partnerlogos/Copy-of-Club-New-Logo-CRANBERRY-e1742494275796.png', fullName: 'Rotaract Club of Colombo North' },
  { name: 'LCC', logo: '/partnerlogos/trilingualLCCLogo.png', fullName: 'Lanka Comic Con' },
  { name: 'Clean Ocean Force', logo: '/partnerlogos/Clean-Ocean-Force_logo1.png', fullName: 'Clean Ocean Force' },
  { name: 'WYCJ', logo: '/partnerlogos/WYCJ+Logo+with+text.png', fullName: "World's Youth for Climate Justice" },
  { name: 'CAYA', logo: '/partnerlogos/CAYA_Main Logo.png', fullName: 'Commonwealth Asia Youth Alliance (CAYA)' },
  { name: 'Road to Rights', logo: '/partnerlogos/Road to Rights New Logo 222.png', fullName: 'The Road to Rights' },
  { name: 'Power of Youth', logo: '/partnerlogos/PY-logo-e1742494373641-295x300.png', fullName: 'Pioneers Youth' },
  { name: 'Bharathi Development Organization', logo: '/partnerlogos/Bharathi.png', fullName: 'Bharathi Foundation' },
];

export default function Partners() {
  return (
    <section className="bg-surface -mx-6 px-6 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 py-16 -my-8 rounded-xl border border-forest/5 shadow-[inset_0_1px_6px_rgba(0,0,0,0.02)] grid grid-cols-1 gap-12 text-center relative">
      <div className="space-y-4 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-3">
          <Handshake className="w-8 h-8 text-teal" />
          <h2 className="text-4xl md:text-5xl font-bold text-deepForest tracking-tight">Our Partners</h2>
        </div>
        <p className="text-lg text-charcoal/80 leading-relaxed">
          The Climate Intelligence Network (CIN) values collaboration and collective action. We work alongside a diverse network of partners to bridge data gaps, empower communities, and drive meaningful climate impact across the Global South.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-16 max-w-6xl mx-auto px-4 pb-12">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="group relative w-24 h-12 sm:w-28 sm:h-14 lg:w-32 lg:h-16 flex justify-center items-center"
          >
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-3 py-2 bg-deepForest text-surface text-[10px] md:text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50 shadow-2xl border border-forest/10 translate-y-3 group-hover:translate-y-0 backdrop-blur-md">
              {partner.fullName}
            </div>

            <div className="relative w-full h-full opacity-80 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 96px, (max-width: 1024px) 112px, 128px"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

