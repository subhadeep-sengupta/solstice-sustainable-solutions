"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const ImageTrain = ({ images = [] }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const containerRef = useRef(null);
  const animationRef = useRef(0);
  const [position, setPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const defaultImages = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
  ];

  const router = useRouter();
  const displayImages = images.length > 0 ? images : defaultImages;
  const allImages = [...displayImages, ...displayImages];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const animate = () => {
      if (!isPaused) {
        setPosition((prevPosition) => {
          const imageWidth = isMobile ? 300 : 600;
          if (prevPosition >= displayImages.length * imageWidth) {
            return 0;
          }
          return prevPosition + (isMobile ? 0.5 : 1); // Slower speed on mobile
        });
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, displayImages.length, isMobile]);

  return (
    <section
      className="flex flex-col justify-center items-center min-h-[500px] md:h-[600px] px-4 md:px-8 py-12 md:py-16 w-full max-w-[1400px] mx-auto"
      style={{
        backgroundImage: `radial-gradient(circle at 0.7px 0.7px, rgba(124, 128, 125, 0.3) 1px, transparent 0)`,
        backgroundSize: "12px 12px",
        backgroundRepeat: "repeat",
      }}
    >
      <h1 className="text-3xl md:text-4xl font-sans font-bold text-slate-800 mb-8 text-center max-w-3xl">
        Our Previous Projects
      </h1>
      <div
        className="w-full max-w-[1400px] overflow-hidden py-6 md:py-8 bg-gray-50/80 backdrop-blur-sm rounded-xl shadow-lg mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          setHoveredIndex(0);
        }}
        ref={containerRef}
      >
        <div
          className="flex justify-center"
          style={{ transform: `translateX(-${position}px)` }}
        >
          {allImages.map((src, index) => (
            <div
              key={index}
              className="relative px-2 transition-all duration-300 flex-shrink-0 flex justify-center"
              style={{
                width: isMobile ? "300px" : "600px",
                transform:
                  hoveredIndex === index
                    ? "translateY(-10px) scale(1.02)"
                    : "translateY(0) scale(1)",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(0)}
            >
              <div
                className={`shadow-lg rounded-lg overflow-hidden transition-all duration-300 w-full ${
                  hoveredIndex === index
                    ? "shadow-xl ring-2 ring-[#007C11]"
                    : ""
                }`}
              >
                <Image
                  src={src}
                  alt={`Project progress ${(index % displayImages.length) + 1}`}
                  width={isMobile ? 300 : 600}
                  height={isMobile ? 300 : 600}
                  className="object-cover h-[250px] md:h-[350px] w-full"
                  priority={index < 2}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center w-full mt-8">
        <button
          className="bg-[#007C11] text-white font-sans px-6 py-3 rounded-lg font-bold hover:bg-[#0bbd38] transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          onClick={() => router.push("/Projects")}
        >
          View All Projects
        </button>
      </div>
    </section>
  );
};

export default ImageTrain;
