"use client";

import Link from "next/link";
import { MoveLeft, Rocket, Globe2, Database, BookOpen } from "lucide-react";
import { motion } from "motion/react";

interface ComingSoonProps {
    title: string;
    description: string;
}

export default function ComingSoon({ title, description }: ComingSoonProps) {
    const icons = {
        "Mission 1.5": <Rocket className="w-12 h-12 text-teal" />,
        "Data & Impact": <Database className="w-12 h-12 text-teal" />,
        "Knowledge Hub": <BookOpen className="w-12 h-12 text-teal" />,
        "Impact Stories": <Globe2 className="w-12 h-12 text-teal" />
    };

    const icon = icons[title as keyof typeof icons] || <Rocket className="w-12 h-12 text-teal" />;

    return (
        <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-surface relative overflow-hidden -mx-6 sm:-mx-8 lg:-mx-12">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(var(--color-forest) 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
            />
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl w-full relative z-10"
            >
                <div className="flex justify-center mb-8">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            delay: 0.2
                        }}
                        className="p-5 rounded-2xl bg-white border border-forest/10 shadow-sm"
                    >
                        {icon}
                    </motion.div>
                </div>

                <span className="inline-block px-4 py-1.5 rounded-full bg-jade/10 text-forest text-sm font-bold uppercase tracking-[0.15em] mb-6 border border-jade/20">
                    Coming Soon
                </span>
                
                <h1 className="text-5xl md:text-7xl font-bold text-deepForest tracking-tight mb-8">
                    {title}
                </h1>
                
                <p className="text-xl text-charcoal/80 leading-relaxed mb-12 max-w-2xl mx-auto">
                    {description}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
                    <Link 
                        href="/"
                        className="group flex items-center gap-2 text-forest font-bold hover:text-deepForest transition-colors uppercase tracking-widest text-sm"
                    >
                        <MoveLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                    
                    <Link
                        href="/get-involved"
                        className="px-10 py-4 bg-sunflower text-deepForest font-extrabold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all uppercase tracking-widest text-sm"
                    >
                        Get Involved
                    </Link>
                </div>

                <div className="pt-12 border-t border-forest/10 grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                    <div className="space-y-3">
                        <div className="w-8 h-1 bg-teal/30 rounded-full" />
                        <h4 className="text-deepForest font-bold text-lg">Transparency</h4>
                        <p className="text-sm text-charcoal/70 leading-relaxed">Building open-source climate infrastructure for the global south.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="w-8 h-1 bg-teal/30 rounded-full" />
                        <h4 className="text-deepForest font-bold text-lg">Science-Led</h4>
                        <p className="text-sm text-charcoal/70 leading-relaxed">Developing rigorous data collection methods with academic partners.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="w-8 h-1 bg-teal/30 rounded-full" />
                        <h4 className="text-deepForest font-bold text-lg">Civic Action</h4>
                        <p className="text-sm text-charcoal/70 leading-relaxed">Empowering communities through actionable climate intelligence.</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
