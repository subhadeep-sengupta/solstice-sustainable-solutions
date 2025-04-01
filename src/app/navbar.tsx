"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if viewport is mobile/tablet
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIsMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIsMobile);

    // Clean up
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-slate-100 pt-1 relative">
      <div className="flex justify-between items-center px-4">
        <div className="flex-1 flex items-center">
          <Image
            className="cursor-pointer"
            src="/logo.svg"
            width={50}
            height={50}
            alt="Company logo"
            onClick={() => router.push("/Aboutus")}
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex justify-center items-center gap-8 uppercase leading-relaxed from-neutral-700 font-semibold font-Inconsolata text-lg rounded-xl my-2 border-black border-2 p-1 w-auto">
          <Tab href="/">Home</Tab>
          <Tab href="/Aboutus">About us</Tab>
          <Tab href="/Aboutus">Projects</Tab>
          <Tab href="/Contactus">Contact us</Tab>
        </ul>

        <div className="flex-1 flex justify-end">
          {/* Desktop Button */}
          <button
            className="hidden md:block rounded-2xl border-2 border-dashed border-black bg-white px-3 py-1.5 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
            onClick={() => router.push("/Contactus")}
          >
            Get a Quote
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="block md:hidden text-black p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && isMobile && (
        <div className="md:hidden bg-slate-100 absolute top-full left-0 right-0 z-50 border-t border-slate-200 shadow-lg">
          <ul className="flex flex-col items-center py-4 uppercase font-semibold font-Inconsolata text-lg">
            <MobileTab href="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </MobileTab>
            <MobileTab href="/Aboutus" onClick={() => setIsMenuOpen(false)}>
              About us
            </MobileTab>
            <MobileTab href="/Aboutus" onClick={() => setIsMenuOpen(false)}>
              Projects
            </MobileTab>
            <MobileTab href="/contactus" onClick={() => setIsMenuOpen(false)}>
              Contact us
            </MobileTab>
            <li className="py-3">
              <button
                className="rounded-2xl border-2 border-dashed border-black bg-white px-3 py-1.5 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                onClick={() => {
                  router.push("/Contactus");
                  setIsMenuOpen(false);
                }}
              >
                Get a Quote
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

const Tab = ({ children, href }) => {
  return (
    <li className="relative group">
      <Link href={href} className="block px-3">
        {children}
      </Link>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-800 transition-all duration-300 group-hover:w-full"></span>
    </li>
  );
};

const MobileTab = ({ children, href, onClick }) => {
  return (
    <li className="w-full">
      <Link
        href={href}
        className="block py-3 px-6 w-full text-center hover:bg-slate-200 transition-colors"
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  );
};
