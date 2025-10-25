'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <header className="header">
      <Link
        className="w-10 h-10 bg-white rounded-lg flex items-center justify-center font-bold shadow-md"
        href="/"
      >
        <p className="blue-gradient_text">AH</p>
      </Link>
      <nav className="flex items-center gap-7 text-lg font-medium">
        <Link
          href="/profile"
          className={isActive("/profile") ? "text-blue-500" : "text-black"}
        >
          Profile
        </Link>
        <Link
          href="/about"
          className={isActive("/about") ? "text-blue-500" : "text-black"}
        >
          Summary
        </Link>
        <Link
          href="/projects"
          className={isActive("/projects") ? "text-blue-500" : "text-black"}
        >
          Projects
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
