"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";

interface Partner {
  name: string;
  logo?: string;
}

interface Metric {
  label: string;
  value: string;
}

type ProjectCategory = "Tech for Climate" | "Community empowerment" | "Citizen science" | "Data for change";

interface Project {
  title: string;
  description: string;
  image?: string;
  metrics: Metric[];
  partners: Partner[];
  accentColor: string;
  accentLight: string;
  category: ProjectCategory;
}

const CATEGORIES: ("All" | ProjectCategory)[] = [
  "All",
  "Tech for Climate",
  "Community empowerment",
  "Citizen science",
  "Data for change"
];

const projects: Project[] = [
  {
    title: "LCOY Sri Lanka 2025",
    description: "The Local Conference of Youth (LCOY) Sri Lanka 2025 brought together 140 youth delegates across all districts of Sri Lanka for 2 days of building youth capacity in climate policy, literacy, and solution building.",
    image: "/photos/lcoy.jpg",
    metrics: [
      { label: "Delegates", value: "150" },
      { label: "Districts", value: "25" }
    ],
    partners: [
      { name: "YOUNGO", logo: "/partnerlogos/youngo.jpg" },
      { name: "UNICEF Sri Lanka", logo: "/partnerlogos/unicef.png" },
      { name: "IOM", logo: "/partnerlogos/IOM-official_Logo_PRIM_BLUE_RGB-EN.svg" },
      { name: "Commonwealth Asia Youth Alliance (CAYA)", logo: "/partnerlogos/CAYA_Main Logo.png" },
      { name: "World Youth for Climate Justice (WYCJ)", logo: "/partnerlogos/WYCJ+Logo+with+text.png" },
      { name: "Rotaract Colombo Fort", logo: "/partnerlogos/Colombo Fort - Cranberry.png" },
      { name: "The Road to Rights", logo: "/partnerlogos/Road to Rights New Logo 222.png" },
    ],
    accentColor: "border-teal",
    accentLight: "bg-teal/5",
    category: "Community empowerment",
  },
  {
    title: "YCATs",
    description: "Our youth-led national network equipping district leaders with climate science, citizen science, and storytelling tools to drive community-based climate action and accountability.",
    image: "/photos/ycat.jpg",
    metrics: [
      { label: "Districts", value: "5" },
      { label: "District Leaders", value: "120" }
    ],
    partners: [
      { name: "UNICEF", logo: "/partnerlogos/unicef.png" },
      { name: "Global Youth Biodiversity Network (GYBN)", logo: "/partnerlogos/GYBN.png" },
      { name: "Greenpeace South Asia", logo: "/partnerlogos/Greenpeace.png" },
      { name: "Bharathi Foundation", logo: "/partnerlogos/Bharathi.png" }
    ],
    accentColor: "border-forest",
    accentLight: "bg-forest/5",
    category: "Community empowerment",
  },
  {
    title: "Oceans - 10",
    description: "Oceans-10 is an interactive marine conservation board game developed by CIN and funded by the Pearl Protectors, simulating real-world ocean challenges and challenging players to design practical solutions.",
    image: "/photos/oceans.jpg",
    metrics: [
      { label: "Total Participants", value: "200+" },
      { label: "Total Time Engaged (Minutes)", value: "800+" }
    ],
    partners: [
      { name: "The Pearl Protectors", logo: "/partnerlogos/The-Pearl-Protectors-Logo-Horizontal-Black.png" },
    ],
    accentColor: "border-sunflower",
    accentLight: "bg-sunflower/5",
    category: "Data for change",
  },
  {
    title: "Advocacy at Lanka Comic Con",
    description: "Lanka Comic Con translated climate action into accessible engagement, raising awareness on citizen-led climate intelligence and converting high-footfall interest into meaningful action through on-the-spot network sign-ups.",
    image: "/photos/lcc.jpg",
    metrics: [
      { label: "Reach", value: "200+" },
      { label: "Network Signups", value: "20" }
    ],
    partners: [
      { name: "Lanka Comic Con", logo: "/partnerlogos/trilingualLCCLogo.png" }
    ],
    accentColor: "border-teal",
    accentLight: "bg-teal/5",
    category: "Data for change",
  },
  {
    title: "Cyclone Ditwah Joint Rapid Needs Assessment Support",
    description: "Partnered with WFP to coordinate a nationwide volunteer mobilization for the data generation during the Rapid Needs Assessment across Sri Lanka. Approximately 106,000 data points were generated.",
    image: "/photos/IMG-20251209-WA0049.jpg",
    metrics: [
      { label: "Data Points", value: "106,000+" },
      { label: "Divisional Secretariats", value: "201" }
    ],
    partners: [
      { name: "World Food Programme (WFP)", logo: "/partnerlogos/World_Food_Programme_Logo_Simple.svg.png" }
    ],
    accentColor: "border-deepIris",
    accentLight: "bg-deepIris/5",
    category: "Citizen science",
  },
  {
    title: "Mission 1.5",
    description: "A gamified community data platform that transforms citizen science into an accountability tool connecting local environmental evidence to decision-making processes.",
    image: "/photos/DSC_5666.png",
    metrics: [],
    partners: [
      { name: "WYDF", logo: "/partnerlogos/wydf.jpg" }
    ],
    accentColor: "border-teal",
    accentLight: "bg-teal/5",
    category: "Tech for Climate",
  },
  {
    title: "Climate Tech Mini Hackathon",
    description: "A mini hackathon organized to ideate and plan the architecture and features of the Mission 1.5 app.",
    image: "/photos/hack.jpg",
    metrics: [
      { label: "Developers", value: "6" }
    ],
    partners: [],
    accentColor: "border-teal",
    accentLight: "bg-teal/5",
    category: "Tech for Climate",
  },
  {
    title: "TrackTheTrash",
    description: "Track the Trash turns cleanups into climate intelligence by enabling volunteers to document, trace, and audit waste through standardized geo-tagged data that identifies pollution sources and informs policy and corporate action.",
    image: "/photos/ttt.jpg",
    metrics: [
      { label: "Youth trained", value: "100+" },
      { label: "Data points", value: "500" }
    ],
    partners: [
      { name: "AIESEC Sri Lanka", logo: "/partnerlogos/Blue-Logo-1.webp" },
      { name: "Clean Ocean Force", logo: "/partnerlogos/Clean-Ocean-Force_logo1.png" }
    ],
    accentColor: "border-deepIris",
    accentLight: "bg-deepIris/5",
    category: "Citizen science",
  },
  {
    title: "NDC 3.0 Learning Hub",
    description: "The Tri-Lingual Learning Hub was developed to demystify the NDCs and make them accessible to youth across the country. Partnered with UNICE & the NDC 3.0 Sounding Board and represented youth in national consultations during NDC 3.0 formulation, contributing to Sri Lanka’s first formal inclusion of youth considerations in the NDC framework.",
    image: "/photos/Screenshot_12-2-2026_93530_theclimateintel.org.jpg",
    metrics: [
      { label: "Unique impressions", value: "30,000+" }
    ],
    partners: [
      { name: "Rotaract Colombo North", logo: "/partnerlogos/Copy-of-Club-New-Logo-CRANBERRY-e1742494275796.png" },
      { name: "WNPS Youth Wing", logo: "/partnerlogos/WNPS-YOUTH_FINAL_web-01.png" },
      { name: "Pioneers Youth", logo: "/partnerlogos/PY-logo-e1742494373641-295x300.png" },
      { name: "World Youth for Climate Justice (WYCJ)", logo: "/partnerlogos/wyfcj-e1742494605438-280x300.png" },
      { name: "Road to Rights G17", logo: "/partnerlogos/R2R-G17-Logo-e1742494473166-298x300.png" },
      { name: "The Road to Rights", logo: "/partnerlogos/Road to Rights New Logo 222.png" },
      { name: "Commonwealth Asia Youth Alliance (CAYA)", logo: "/partnerlogos/CAYA_Main Logo.png" },
      { name: "U-Report Sri Lanka", logo: "/partnerlogos/UREPORT.png" },
      { name: "UNICEF Sri Lanka", logo: "/partnerlogos/unicef.png" }
    ],
    accentColor: "border-sunflower",
    accentLight: "bg-sunflower/5",
    category: "Data for change",
  }
];

export default function ProjectCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeCategory, setActiveCategory] = useState<"All" | ProjectCategory>("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft) < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
      setTimeout(checkScroll, 50); // slight delay to allow layout
    }
  }, [activeCategory]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      checkScroll();
      return () => el.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Filters and Navigation */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Filter Chips */}
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-deepForest text-white"
                  : "bg-forest/5 text-forest hover:bg-forest/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center gap-2 hidden md:flex">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2.5 rounded-full border border-forest transition-all flex items-center justify-center ${
              canScrollLeft 
                ? "text-forest hover:bg-forest hover:text-white cursor-pointer" 
                : "text-forest/20 border-forest/10 cursor-not-allowed"
            }`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-2.5 rounded-full border border-forest transition-all flex items-center justify-center ${
              canScrollRight 
                ? "text-forest hover:bg-forest hover:text-white cursor-pointer" 
                : "text-forest/20 border-forest/10 cursor-not-allowed"
            }`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative group/carousel">
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 pt-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex-shrink-0 w-[85vw] md:w-[450px] snap-start"
          >
            <div className={`h-full bg-white rounded-2xl border border-forest/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group`}>
              {/* Image Container */}
              <div className={`relative h-52 ${project.accentLight} overflow-hidden`}>
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                      <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#3F664F_1px,_transparent_1px)] [background-size:24px_24px]"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-forest/40 font-bold text-xs uppercase tracking-widest relative z-10">Image Placeholder</span>
                    </div>
                  </>
                )}
              </div>

              {/* Content Side */}
              <div className={`p-8 flex flex-col flex-1 border-l-[6px] ${project.accentColor}`}>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-deepForest mb-2 leading-tight group-hover:text-teal transition-colors">
                    {project.title}
                  </h3>
                  <div className="w-12 h-1 bg-teal/20 group-hover:w-24 transition-all duration-300"></div>
                </div>
                
                <p className="text-charcoal/80 leading-relaxed mb-6 flex-1 text-sm">
                  {project.description}
                </p>

                 <div className="mb-8">
                    <div className="text-[9px] font-bold text-charcoal/40 uppercase tracking-[0.2em] mb-3">Collaborators / Donors</div>
                    <div className="flex flex-wrap gap-2">
                      {project.partners.map((partner, pIdx) => (
                        <div 
                          key={pIdx} 
                          className="w-11 h-11 rounded-full bg-white border border-forest/10 flex items-center justify-center transition-all duration-300 transform hover:scale-110 cursor-help overflow-hidden p-1 shadow-sm" 
                          title={partner.name}
                        >
                          {partner.logo ? (
                            <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain" />
                          ) : (
                            <span className="text-[9px] font-bold text-forest/40 text-center uppercase px-1 leading-[1.1]">
                              {partner.name.substring(0, 3)}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                 </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mt-auto pt-6 border-t border-forest/5 bg-surface/30 -mx-8 px-8 rounded-b-2xl">
                  {project.metrics.map((metric, mIdx) => (
                    <div key={mIdx}>
                      <div className="text-2xl font-bold text-deepForest tracking-tight leading-none mb-1">
                        {metric.value}
                      </div>
                      <div className="text-[9px] font-bold text-charcoal/50 uppercase tracking-[0.15em]">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative Gradient Fades */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F7FAF4] to-transparent pointer-events-none opacity-50 md:block hidden" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F7FAF4] to-transparent pointer-events-none opacity-50 md:block hidden" />
      </div>
    </div>
  );
}
