import Link from "next/link";

export default function Navbar() {
    const navItems = [
        { label: "About", href: "/about" },
        { label: "Mission 1.5", href: "/mission-1-5" },
        { label: "Data", href: "/data" },
        { label: "Knowledge", href: "/knowledge" },
        { label: "Insights", href: "/insights" },
        { label: "Get Involved", href: "/get-involved" },
        { label: "Developers", href: "/developers" },
    ];

    return (
        <nav className="bg-forest text-white h-[72px] px-8 flex items-center justify-between">
            <div className="flex items-center gap-8">
                <Link href="/" className="text-xl font-medium tracking-tight hover:text-white/80 transition-colors">
                    CIN
                </Link>
                <ul className="flex items-center gap-6">
                    {navItems.map((item) => (
                        <li key={item.label}>
                            <Link
                                href={item.href}
                                className="text-sm font-medium opacity-90 hover:opacity-100 transition-opacity"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <button aria-label="Search" className="p-2 opacity-90 hover:opacity-100 transition-opacity">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>
                </button>
            </div>
        </nav>
    );
}
