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

  // Duplicate images to create a seamless loop
  const allImages = [...displayImages, ...displayImages];

  useEffect(() => {
    const animate = () => {
      if (!isPaused) {
        setPosition((prevPosition) => {
          // Reset position when it reaches the end of the first set of images
          if (prevPosition >= displayImages.length * 250) {
            return 0;
          }
          return prevPosition + 0.5; // Speed of the animation
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
  }, [isPaused, displayImages.length]);

  return (
    <section
      className="flex flex-col justify-center items-center h-[600px]"
      style={{
        backgroundImage: `radial-gradient(circle at 0.7px 0.7px, rgba(124, 128, 125, 0.5) 1px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      <h1 className="text-4xl font-sans font-semibold text-slate-800 mt-7">
        Our Previous Projects
      </h1>
      <div
        className="w-full overflow-hidden py-8 bg-gray-100 rounded-lg"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          setHoveredIndex(0);
        }}
        ref={containerRef}
      >
        <div
          className="flex"
          style={{ transform: `translateX(-${position}px)` }}
        >
          {allImages.map((src, index) => (
            <div
              key={index}
              className="relative px-2 transition-all duration-300 flex-shrink-0"
              style={{
                width: "600px",
                transform:
                  hoveredIndex === index
                    ? "translateY(-10px)"
                    : "translateY(0)",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(0)}
            >
              <div
                className={`shadow-lg rounded-lg overflow-hidden transition-all duration-300 ${
                  hoveredIndex === index
                    ? "shadow-xl ring-2 ring-[#007C11]"
                    : ""
                }`}
              >
                <Image
                  src={src}
                  alt={`Project progress ${(index % displayImages.length) + 1}`}
                  width={600}
                  height={600}
                  className="object-cover  h-[350px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="bg-[#007C11] text-white font-sans px-3 py-2 rounded-lg mb-7 mt-3 font-bold hover:bg-[#0bbd38]"
        onClick={() => router.push("/Projects")}
      >
        More Projects
      </button>
    </section>
  );
};

export default ImageTrain;
