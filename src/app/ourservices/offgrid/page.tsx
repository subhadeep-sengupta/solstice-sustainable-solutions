"use client";
import Image from "next/image";

const offgrid = () => {
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
        <h2 className="font-sans text-4xl font-semibold ">
          On Grid Solar Panel System
        </h2>
      </div>
      <Image
        src="/off-grid.jpg"
        alt="on grid"
        width={500}
        height={500}
        className="object-contain w-[500px] h-[300px]"
      />

      <div className="flex flex-col justify-center items-center border-3 border-dashed border-[#007C11] bg-white">
        <p className="font-inter text-md font-bold px-8 py-6 mt-10 ">
          {`We provide complete off-grid commercial solar solutions for businesses & domestic operating in remote areas or seeking energy independence. Our systems generate and store solar energy using high-efficiency panels and battery storage, ensuring a reliable power supply even without grid access. With our off-grid solutions, you can eliminate electricity costs, reduce reliance on fossil fuels, and achieve true energy self-sufficiency.
          `}
        </p>
        <p className="text-md font-inter font-bold px-8 py-4">{`Approximated Expense :-  65,000 - 80,000`}</p>
      </div>
    </section>
  );
};

export default offgrid;
