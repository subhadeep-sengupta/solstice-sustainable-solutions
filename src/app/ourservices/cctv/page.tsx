"use client";
import Image from "next/image";

const cctv = () => {
  return (
    <section
      className="relative w-screen h-screen flex flex-col justify-start items-center"
      style={{
        backgroundImage: `radial-gradient(circle at 0.7px 0.7px, rgba(0, 0, 0, 0.3) 1px, transparent 1px)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="bg-white mb-7 mt-12 rounded-full">
        <h2 className="font-sans text-4xl font-semibold px-6 ">
          CCTV CAMERA INSTALLATION AND NETWORK CONFIGURATION
        </h2>
      </div>
      <Image
        src="/cctv.jpg"
        alt="IoT"
        width={500}
        height={500}
        className="object-contain w-[500px] h-[300px]"
      />

      <div className="border-3 border-dashed border-[#007C11] bg-white flex flex-col justify-center items-center">
        <p className="font-inter text-md font-bold px-8 py-6 mt-10 ">
          {`Invest in a robust security infrastructure you can trust. Ensure safety and connectivity with professional CCTV camera installation and seamless network configuration. Our expert team handles everything, from strategic placement to flawless network integration, ensuring your surveillance system operates at peak performance. Protect your property with top-tier surveillance solutions, providing clear, dependable coverage.
            `}
        </p>
      </div>
    </section>
  );
};

export default cctv;
