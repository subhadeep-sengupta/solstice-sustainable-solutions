"use client";
import Image from "next/image";

const iot = () => {
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
          HOME AUTOMATION WITH IOT
        </h2>
      </div>
      <Image
        src="/blog2.jpg"
        alt="IoT"
        width={500}
        height={500}
        className="object-contain w-[500px] h-[300px]"
      />

      <div className="border-3 border-dashed border-[#007C11] bg-white flex flex-col justify-center items-center">
        <p className="font-inter text-md font-bold px-8 py-6 mt-10 ">
          {`Step into a more connected and secure lifestyle. Transform your home with smart automation powered by IoT. Control lighting, security, and appliances effortlessly from anywhere! Get instant alerts, monitor your home remotely, and enjoy the peace of mind that comes with knowing everything is just as you left it. Experience convenience, energy efficiency, and enhanced security at your fingertips.
            `}
        </p>
      </div>
    </section>
  );
};

export default iot;
