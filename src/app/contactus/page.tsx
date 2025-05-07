"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center py-8 md:py-16 px-4"
      style={{
        backgroundImage: `radial-gradient(circle at 0.7px 0.7px, rgba(124, 128, 125, 0.3) 2px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-6xl font-sans font-bold mb-8 md:mb-12 text-center bg-slate-900 bg-clip-text text-transparent px-4"
      >
        Contact Us
      </motion.h1>
      
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm p-4 md:p-8 rounded-2xl shadow-xl w-full max-w-md mx-4"
        >
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-xl md:text-2xl font-semibold font-sans mb-4 md:mb-6 text-gray-800">
              Connect With Us
            </h2>
            <Embed />
            <div className="mt-6 md:mt-8 space-y-4 w-full">
              <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919475588412" className="text-base md:text-lg font-sans font-medium text-gray-700 hover:text-green-600 transition-colors">
                  +91 9475588412
                </a>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:solsticesustainablesolutions@gmail.com" className="text-base md:text-lg font-sans font-medium text-gray-700 hover:text-green-600 transition-colors break-all">
                  solsticesustainablesolutions@gmail.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative w-full max-w-[300px] md:max-w-[400px] mx-4"
        >
          <Image 
            src="/logo.png" 
            alt="Solstice Sustainable Solutions Logo" 
            width={400} 
            height={400}
            className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 w-full h-auto"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}

const Embed = () => {
  const instagramUrl =
    "https://www.instagram.com/solstice_solar_/?utm_source=ig_web_button_share_sheet";
  const username = instagramUrl.split("instagram.com/")[1]?.split("/")[0];

  if (!username) {
    return <p className="text-red-500">Invalid Instagram URL</p>;
  }

  return (
    <div className="flex justify-center items-center w-full">
      <iframe
        src={`https://www.instagram.com/${username}/embed`}
        className="w-full max-w-[300px] md:max-w-[400px] h-[400px] border-0 rounded-xl shadow-lg"
        allowFullScreen
      ></iframe>
    </div>
  );
};