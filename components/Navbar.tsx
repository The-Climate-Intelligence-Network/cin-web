import Link from "next/link";
import Image from "next/image";

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
            <Link href="/" className="hover:opacity-90 transition-opacity flex items-center">
                <Image
                    src="/logo/CINHorizontalLight.png"
                    alt="Climate Intelligence Network"
                    width={180}
                    height={44}
                    priority
                    className="h-11 w-auto object-contain"
                />
            </Link>

            <ul className="flex items-center gap-8">
                {navItems.map((item) => (
                    <li key={item.label}>
                        <Link
                            href={item.href}
                            className="text-sm font-bold uppercase tracking-wide opacity-90 hover:opacity-100 transition-opacity"
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
