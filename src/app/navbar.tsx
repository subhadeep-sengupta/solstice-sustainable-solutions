"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="bg-white pt-1">
      <div className="flex justify-between items-center px-4">
        <div className="flex-1 flex items-center">
          <Image
            className="cursor-pointer"
            src="/logo.svg"
            width={50}
            height={50}
            alt="Company logo"
            onClick={() => router.push("/Aboutus")}
          ></Image>
        </div>
        <ul className="flex justify-center items-center gap-8 uppercase leading-relaxed from-neutral-700 font-semibold font-Inconsolata text-lg rounded-xl my-2 border-black border-2 p-1 w-auto">
          <Tab href="/">Home</Tab>
          <Tab href="/Aboutus">About us</Tab>
          <Tab href="/Aboutus">Projects</Tab>
          <Tab href="/contactus">Contact us</Tab>
        </ul>
        <div className="flex-1 flex justify-end">
          <button
            className="rounded-2xl border-2 border-dashed border-black bg-white px-3 py-1.5 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
            onClick={() => router.push("/contactus")}
          >
            Get a Quote
          </button>
        </div>
      </div>
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
