import React from 'react';
import Link from 'next/link';
import { Newspaper, ArrowRight } from 'lucide-react';

export default function News() {
  const dummyNews = [
    {
      id: 1,
      tag: "PRESS RELEASE",
      date: "MARCH 15, 2026",
      title: "CIN Expands Network to 5 New Districts in Sri Lanka",
      excerpt: "The Climate Intelligence Network continues its rapid expansion, bringing citizen science tools to more...",
    },
    {
      id: 2,
      tag: "PRESS RELEASE",
      date: "MARCH 15, 2026",
      title: "CIN Expands Network to 5 New Districts in Sri Lanka",
      excerpt: "The Climate Intelligence Network continues its rapid expansion, bringing citizen science tools to more...",
    },
    {
      id: 3,
      tag: "PRESS RELEASE",
      date: "MARCH 15, 2026",
      title: "CIN Expands Network to 5 New Districts in Sri Lanka",
      excerpt: "The Climate Intelligence Network continues its rapid expansion, bringing citizen science tools to more...",
    }
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
        
        <Link href="#" className="font-extrabold text-forest uppercase tracking-widest text-sm hover:text-deepForest flex items-center gap-2 transition-colors">
          VIEW ALL NEWS
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {dummyNews.map((news) => (
          <div key={news.id} className="bg-white rounded-2xl shadow-sm border border-forest/10 overflow-hidden flex flex-col group hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="relative h-48 bg-forest/10 w-full flex items-center justify-center overflow-hidden">
               {/* Image Placeholder */}
               <span className="text-forest/30 font-bold tracking-widest text-xs uppercase z-0">News Image</span>
               
               <div className="absolute top-4 left-4 z-10 bg-sunflower text-charcoal font-bold text-[10px] px-3 py-1 rounded-full tracking-widest uppercase">
                 {news.tag}
               </div>
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
              <div className="text-charcoal/60 font-bold text-xs uppercase tracking-widest mb-3">
                {news.date}
              </div>
              <h3 className="text-xl font-bold text-deepForest mb-4 leading-tight group-hover:text-forest transition-colors">
                {news.title}
              </h3>
              <p className="text-charcoal leading-relaxed flex-grow mb-6 text-sm">
                {news.excerpt}
              </p>
              <Link href="#" className="text-forest font-extrabold tracking-[0.2em] text-xs uppercase hover:text-deepForest transition-colors inline-flex items-center gap-2 mt-auto">
                READ MORE
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
