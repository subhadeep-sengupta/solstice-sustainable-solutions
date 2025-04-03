"use client";

import AboutSection from "../AboutSection";
import Brands from "../brands";
import Whyus from "../Whyus";
import Vision from "./vision";
import Whychooseus from "./whychooseus";

export default function Aboutus() {
  return (
    <section
      className="bg-slate-200 py-20 bg-no-repeat bg-cover w-full h-full relative flex flex-col justify-center items-center"
      style={{
        backgroundImage: `radial-gradient(circle at 0.7px 0.7px, rgba(10,124,28, 0.5) 1px, transparent 1px)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="bg-white opacity-55 absolute inset-0" />

      <div className="relative flex flex-col justify-center items-center">
        <h2 className="text-5xl font-semibold text-slate-800 font-sans mb-8">
          About us
        </h2>
        <AboutSection />
        <Whychooseus />
        <Whyus />
        <Vision />
        <Brands />
      </div>
    </section>
  );
}
