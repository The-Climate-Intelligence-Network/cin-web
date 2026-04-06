"use client";

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Newspaper, ArrowRight } from 'lucide-react';

export default function News() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 2);
      setCanScrollRight(Math.ceil(scrollLeft) < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      checkScroll();
      // Also check on resize
      window.addEventListener("resize", checkScroll);
      return () => {
        el.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const dummyNews = [
    {
      id: 1,
      tag: "INSIGHT",
      date: "OCTOBER 06, 2024",
      title: "Climate Intelligence Network to engage communities with apps",
      excerpt: "The Climate Intelligence Network, a youth-run initiative focused on data collection and people mobilisation for climate justice, launched operations earlier this month.",
      link: "https://www.sundaytimes.lk/241006/education/climate-intelligence-network-to-engage-communities-with-apps-573250.html",
      image: "/photos/image.png"
    },
    {
      id: 2,
      tag: "UPDATE",
      date: "September 19, 2025",
      title: "LCOY Sri Lanka 2025: Redefining What It Means to Be Heard",
      excerpt: "Sri Lanka had a peculiar way of treating ambition. It downgraded mine from ‘plans’ to dreams, from ‘conviction’ to motivation, and from the podium to a blurb in the brochure. I was allowed to exist, not in the conversation, but to fight against someone’s idea of what I could be.",
      link: "https://yourcommonwealth.org/advocacy/lcoy-sri-lanka-2025-redefining-what-it-means-to-be-heard/",
      image: "/photos/image2.png"
    },
    {
      id: 3,
      tag: "UPDATE",
      date: "September 01, 2025",
      title: "Youth Lead the Way on Climate Action at LCOY Sri Lanka 2025",
      excerpt: "The Local Conference of Youth (LCOY) Sri Lanka 2025 gathered approximately 150 youth delegates across the country from 30–31 August for a dialogue on  skills-building and effective action on climate change. It provided all participants an opportunity to learn, collaborate and make climate pledges, while contributing to the drafting of the Sri Lanka Youth Statement on Climate Change, in the lead-up to the Conference of Youth (COY) 2025.",
      link: "https://srilanka.iom.int/news/youth-lead-way-climate-action-lcoy-sri-lanka-2025",
      image: "/photos/image3.png"
    },
    // {
    //   id: 4,
    //   tag: "ANNOUNCEMENT",
    //   date: "MARCH 10, 2026",
    //   title: "Understanding Sea-Level Rise on Local Fisheries",
    //   excerpt: "A deep dive into how changing ocean temperatures and rising tides are affecting traditional fishing practices and coastal livelihoods.",
    //   link: "https://example.com/news/4",
    //   image: "https://images.unsplash.com/photo-1498654203945-3891004a442a?q=80&w=800&auto=format&fit=crop"
    // },
    // {
    //   id: 5,
    //   tag: "PARTNERSHIP",
    //   date: "MARCH 05, 2026",
    //   title: "CIN Partners with University for Advanced Modeling",
    //   excerpt: "Collaborating with leading academic institutions to integrate advanced climate modeling into our civic intelligence platform.",
    //   link: "https://example.com/news/5",
    //   image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop"
    // }
  ];

  return (
    <section className="bg-[#F7FAF4] -mx-6 px-6 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 py-16 -my-8 rounded-xl border border-forest/5 shadow-[inset_0_1px_6px_rgba(0,0,0,0.02)] space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-6xl mx-auto">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Newspaper className="w-6 h-6 text-teal" />
            <span className="text-teal font-bold text-sm uppercase tracking-widest">LATEST UPDATES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-deepForest tracking-tight">CIN News</h2>
        </div>
        
        <div className="flex items-center gap-6">
          {/* Navigation Controls */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`p-2 rounded-full border border-forest transition-all flex items-center justify-center ${
                canScrollLeft 
                  ? "text-forest hover:bg-forest hover:text-white cursor-pointer" 
                  : "text-forest/20 border-forest/10 cursor-not-allowed"
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`p-2 rounded-full border border-forest transition-all flex items-center justify-center ${
                canScrollRight 
                  ? "text-forest hover:bg-forest hover:text-white cursor-pointer" 
                  : "text-forest/20 border-forest/10 cursor-not-allowed"
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* <Link href="#" className="font-extrabold text-forest uppercase tracking-widest text-sm hover:text-deepForest flex items-center gap-2 transition-colors">
            VIEW ALL NEWS
            <ArrowRight className="w-4 h-4" />
          </Link> */}
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-8 pb-6 snap-x snap-mandatory no-scrollbar max-w-6xl mx-auto scroll-smooth"
      >
        {dummyNews.map((news) => (
          <div 
            key={news.id} 
            className="flex-none w-[320px] md:w-[380px] bg-white rounded-2xl shadow-sm border border-forest/10 overflow-hidden flex flex-col group hover:shadow-md transition-all duration-300 hover:-translate-y-1 snap-start"
          >
            <div className="relative h-48 bg-forest/10 w-full overflow-hidden">
               {news.image ? (
                 <Image 
                   src={news.image} 
                   alt={news.title}
                   fill
                   className="object-cover group-hover:scale-105 transition-transform duration-500"
                 />
               ) : (
                 <div className="w-full h-full flex items-center justify-center">
                    <span className="text-forest/30 font-bold tracking-widest text-xs uppercase z-0">News Image</span>
                 </div>
               )}
               
               <div className="absolute top-4 left-4 z-10 bg-sunflower text-charcoal font-bold text-[10px] px-3 py-1 rounded-full tracking-widest uppercase">
                 {news.tag}
               </div>
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
              <div className="text-charcoal/60 font-bold text-xs uppercase tracking-widest mb-3">
                {news.date}
              </div>
              <h3 className="text-xl font-bold text-deepForest mb-4 leading-tight">
                <a 
                  href={news.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-forest transition-colors"
                >
                  {news.title}
                </a>
              </h3>
              <p className="text-charcoal leading-relaxed flex-grow mb-6 text-sm line-clamp-4">
                {news.excerpt}
              </p>
              <a 
                href={news.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest font-extrabold tracking-[0.2em] text-xs uppercase hover:text-deepForest transition-colors inline-flex items-center gap-2 mt-auto"
              >
                READ MORE
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
