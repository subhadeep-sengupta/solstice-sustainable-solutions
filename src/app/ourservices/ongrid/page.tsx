"use client";
import Image from "next/image";

const ongrid = () => {
  return (
    <section
      className="relative w-screen h-screen flex flex-col justify-start items-center"
      style={{
        backgroundImage: `radial-gradient(circle at 0.7px 0.7px, rgba(10,124,28, 0.5) 1px, transparent 1px)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="bg-white mb-7 mt-12 rounded-full">
        <h2 className="font-sans text-4xl font-semibold ">
          On Grid Solar Panel System
        </h2>
      </div>
      <Image
        src="/on-grid.png"
        alt="on grid"
        width={500}
        height={500}
        className="object-contain w-[500px] h-[300px]"
      />

      <div className="flex flex-col justify-center items-center border-3 border-dashed border-[#007C11] bg-white">
        <p className="font-inter text-md font-bold px-8 py-6 mt-10 ">
          {`We provide complete on-grid commercial solar solutions for companies & domestic trying to cut expenses and their carbon footprint.  You may save money on electricity bills, benefit from net metering, and guarantee a consistent energy supply without relying on batteries thanks to our systems' smooth integration with the power grid.  Our on-grid solutions, which are made to satisfy the energy requirements of different industries, offer sustainability and long-term savings while maintaining the effectiveness of your company.
          `}
        </p>
        <p className="text-md font-inter font-bold px-8 py-4">{`Approximated Expense :-  50,000 - 65,000  per kW`}</p>
      </div>
    </section>
  );
};

export default ongrid;
