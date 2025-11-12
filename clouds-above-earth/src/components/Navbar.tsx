"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/playlists", label: "Playlists" },
  { href: "/blog", label: "Blog" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 glass rounded-xl px-4 py-3 flex items-center justify-between border border-teal/20">
          <Link href="/" className="text-cloud font-display tracking-wide text-lg">
            Clouds Above Earth
          </Link>
          <div className="hidden md:flex gap-6 items-center">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link key={l.href} href={l.href} className="relative text-sm text-cloud/90 hover:text-cloud">
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="active-underline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-teal shadow-glow"
                    />
                  )}
                </Link>
              );
            })}
          </div>
          <button className="md:hidden p-2 rounded-md hover:bg-teal/10">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
