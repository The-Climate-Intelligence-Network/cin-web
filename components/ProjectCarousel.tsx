"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";

const projects = [
  {
    title: "Coastal Mangrove Restoration",
    description: "Community-led effort to restore vital mangrove ecosystems along the western coastline, protecting against erosion.",
    metrics: [
      { label: "Trees", value: "10k+" },
      { label: "Area", value: "50ha" }
    ],
    partners: ["USAID", "UNDP", "ForestDept"],
    accentColor: "border-teal",
    accentLight: "bg-teal/5",
  },
  {
    title: "Urban Water Quality",
    description: "Citizen scientists tracking pollution levels in major urban waterways to enable targeted interventions.",
    metrics: [
      { label: "Samples", value: "1,200" },
      { label: "Policy", value: "3" }
    ],
    partners: ["NWSDB", "CEB", "IUCN"],
    accentColor: "border-forest",
    accentLight: "bg-forest/5",
  },
  {
    title: "Biodiversity Hub",
    description: "A centralized platform for mapping Sri Lanka's unique flora and fauna, enabling real-time sightings.",
    metrics: [
      { label: "Species", value: "450+" },
      { label: "Data", value: "25k" }
    ],
    partners: ["WWC", "SLWildlife", "NatGeo"],
    accentColor: "border-sunflower",
    accentLight: "bg-sunflower/5",
  },
  {
    title: "Renewable Potential",
    description: "Mapping solar and wind potential across residential zones to provide data-backed reasons to switch.",
    metrics: [
      { label: "Roofs", value: "5,000" },
      { label: "MW", value: "15" }
    ],
    partners: ["SustainableEnergy", "ADB"],
    accentColor: "border-teal",
    accentLight: "bg-teal/5",
  },
  {
    title: "Climate Literacy",
    description: "Empowering the next generation with data-driven climate education workshops across 20 districts.",
    metrics: [
      { label: "Students", value: "2,500" },
      { label: "Districts", value: "20" }
    ],
    partners: ["EduMin", "UNESCO", "SaveChildren"],
    accentColor: "border-deepIris",
    accentLight: "bg-deepIris/5",
  }
];

export default function ProjectCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

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
    <div className="relative group/carousel">
      {/* Navigation Controls */}
      <div className="absolute -top-16 right-0 flex items-center gap-3">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className={`p-3 rounded-full border border-forest transition-all flex items-center justify-center ${
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
          className={`p-3 rounded-full border border-forest transition-all flex items-center justify-center ${
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

      {/* Carousel Container */}
      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 pt-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex-shrink-0 w-[85vw] md:w-[450px] snap-start"
          >
            <div className={`h-full bg-white rounded-2xl border border-forest/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group`}>
              {/* Image Placeholder Container */}
              <div className={`relative h-52 ${project.accentLight} overflow-hidden`}>
                <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                  <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#3F664F_1px,_transparent_1px)] [background-size:24px_24px]"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-forest/40 font-bold text-xs uppercase tracking-widest relative z-10">Image Placeholder</span>
                </div>
                
                {/* Accent Ribbon/Sticker */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full border border-forest/10 bg-white/90 backdrop-blur-sm shadow-sm`}>
                   <span className="text-[10px] font-extrabold text-forest uppercase tracking-widest">Project 0{index + 1}</span>
                </div>
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

                {/* Partners Section */}
                <div className="mb-8">
                   <div className="text-[9px] font-bold text-charcoal/40 uppercase tracking-[0.2em] mb-3">Supporting Partners</div>
                   <div className="flex flex-wrap gap-2">
                     {project.partners.map((partner, pIdx) => (
                       <div key={pIdx} className="w-10 h-10 rounded-full bg-forest/5 border border-forest/10 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110 cursor-help" title={partner}>
                         <span className="text-[8px] font-bold text-forest/40 text-center uppercase px-1 leading-[1.1]">{partner.substring(0, 3)}</span>
                       </div>
                     ))}
                     <div className="w-10 h-10 rounded-full border border-dashed border-forest/20 flex items-center justify-center">
                        <svg className="w-3 h-3 text-forest/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                     </div>
                   </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mt-auto pt-6 border-t border-forest/5 bg-surface/30 -mx-8 px-8 rounded-b-2xl">
                  {project.metrics.map((metric, mIdx) => (
                    <div key={mIdx}>
                      <div className="text-2xl font-extrabold text-deepForest tracking-tight leading-none mb-1">
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
  );
}
