import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-forest text-white py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand and Description */}
                    <div className="md:col-span-2">
                        <Link href="/" className="inline-block text-2xl font-bold tracking-tight mb-4 hover:text-white/90 transition-colors">
                            Climate Intelligence Network
                        </Link>
                        <p className="text-white/80 max-w-md leading-relaxed">
                            Equipping citizens of the Global South with tools for climate justice. Data-driven solutions and storytelling to transform climate action.
                        </p>
                    </div>

                    {/* Platform Links */}
                    <div>
                        <h3 className="text-xs font-bold tracking-wider uppercase mb-6">
                            Platform
                        </h3>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <Link href="/mission" className="text-sm text-white/90 hover:text-white transition-colors">
                                    Mission
                                </Link>
                            </li>
                            <li>
                                <Link href="/app" className="text-sm text-white/90 hover:text-white transition-colors">
                                    The App
                                </Link>
                            </li>
                            <li>
                                <Link href="/network" className="text-sm text-white/90 hover:text-white transition-colors">
                                    The Network
                                </Link>
                            </li>
                            <li>
                                <Link href="/vision" className="text-sm text-white/90 hover:text-white transition-colors">
                                    Vision
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
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm text-white/90 hover:text-white transition-colors">
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-white/90 hover:text-white transition-colors">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm text-white/90 hover:text-white transition-colors">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm text-white/90 hover:text-white transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="border-white/20 mb-8" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-white/70">
                        &copy; 2026 Climate Intelligence Network. All rights reserved.
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
