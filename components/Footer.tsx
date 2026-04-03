import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-forest text-white py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
                    {/* Brand and Description */}
                    <div className="max-w-md">
                        <Link href="/" className="inline-block mb-6 hover:opacity-90 transition-opacity">
                            <Image
                                src="/logo/CINHorizontalLight.png"
                                alt="The Climate Intelligence Network"
                                width={250}
                                height={100}
                                priority
                                className="h-22 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-white/80 leading-relaxed">
                            Equipping citizens of the Global South with tools for climate justice. Data-driven solutions and storytelling to transform climate action.
                        </p>
                    </div>

                    {/* Nav Links Groups */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-24">
                        {/* Platform Links */}
                        <div>
                            <h3 className="text-xs font-bold tracking-wider uppercase mb-6">
                                Platform
                            </h3>
                            <ul className="flex flex-col gap-4">
                                <li>
                                    <Link href="/about" className="text-sm text-white/90 hover:text-white transition-colors">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/data" className="text-sm text-white/90 hover:text-white transition-colors">
                                        Data & Impact
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/knowledge" className="text-sm text-white/90 hover:text-white transition-colors">
                                        Knowledge
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/insights" className="text-sm text-white/90 hover:text-white transition-colors">
                                        Impact Stories
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Participate Links */}
                        <div>
                            <h3 className="text-xs font-bold tracking-wider uppercase mb-6">
                                Participate
                            </h3>
                            <ul className="flex flex-col gap-4">
                                <li>
                                    <Link href="/mission-1-5" className="text-sm text-white/90 hover:text-white transition-colors">
                                        Mission 1.5
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/get-involved" className="text-sm text-white/90 hover:text-white transition-colors">
                                        Get Involved
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/developers" className="text-sm text-white/90 hover:text-white transition-colors">
                                        Developers
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Connect Links */}
                        <div>
                            <h3 className="text-xs font-bold tracking-wider uppercase mb-6">
                                Connect
                            </h3>
                            <ul className="flex flex-col gap-4">
                                <li>
                                    <a href="https://www.instagram.com/climate.intelligence" target="_blank" rel="noopener noreferrer" className="text-sm text-white/90 hover:text-white transition-colors">
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/climate.intelligence" target="_blank" rel="noopener noreferrer" className="text-sm text-white/90 hover:text-white transition-colors">
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/the-climate-intelligence-network" target="_blank" rel="noopener noreferrer" className="text-sm text-white/90 hover:text-white transition-colors">
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="https://wa.me/94775107134?text=Tell%20us%20how%20you%20want%20to%20take%20action%20with%20CIN" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-sm text-white/90 hover:text-white transition-colors"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="border-white/20 mb-8" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-white/70">
                        &copy; 2026 The Climate Intelligence Network. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="text-xs text-white/90 hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-xs text-white/90 hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
