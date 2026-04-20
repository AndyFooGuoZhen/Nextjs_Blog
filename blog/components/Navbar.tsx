"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { name: "About", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const glassStyle = "backdrop-blur-md bg-white/30 dark:bg-black/30 border border-white/20 dark:border-white/10 shadow-lg rounded-2xl px-1.5 py-1.5 md:px-2 md:py-2 flex items-center gap-0.5 md:gap-1 mx-2 md:mx-0";
  
  const tabStyle = (isActive: boolean) => 
    `px-2.5 md:px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 ${
      isActive 
        ? "bg-[#e0e5ec] dark:bg-[#1b1b1b] text-orange-500 shadow-[4px_4px_8px_#a3b1c6,-4px_-4px_8px_#ffffff] dark:shadow-[4px_4px_8px_#121212,-4px_-4px_8px_#242424] scale-105" 
        : "text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-500"
    }`;

  return (
    <nav className="flex justify-center mb-12 w-full">
      <div className={glassStyle}>
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link key={link.href} href={link.href}>
              <div className={tabStyle(isActive)}>
                {link.name}
              </div>
            </Link>
          );
        })}
        <div className="ml-1 md:ml-2 pl-1 md:pl-2 border-l border-white/20 dark:border-white/10">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
