"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

function AboutSection() {
  const router = useRouter();
  return (
    <section
      className="relative w-screen min-h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/1.jpg')" }}
    >
      <div className="absolute inset-0 bg-white opacity-50"></div>
      <div className="relative flex flex-col md:grid md:grid-cols-2 gap-3 m-3 p-5 w-full max-w-5xl">
        <div className="mx-2 p-3 bg-white w-auto h-80 mb-2 rounded-lg  shadow-lg text-[#028531]  md:h-auto">
          <h1 className="md:text-4xl font-bold md:mb-6 md:mx-3 md:mt-3 text-2xl/6 ml-1 mb-2">{`Best solar company in Durgapur & Asansol`}</h1>
          <p className="w-auto h-auto md:px-2 mt-1 mx-1.5 font-inconsolata text-md font-semibold text-black">
            Welcome to Solstice Sustainable Soltutions, the leading solar energy
            solutions provider in Asansol, West Bengal. We specialize in
            delivering high-quality, affordable, and sustainable solar power
            solutions tailored to your needs. From top-tier solar panels and
            inverters to expertly designed structural systems, we ensure maximum
            efficiency and long-term savings. Whether you’re a homeowner,
            business, or industrial facility looking to cut energy costs and
            embrace a greener future, our expert team is here to provide
            seamless installation and exceptional service. Experience energy
            independence with the most trusted name in solar power.
          </p>
          <button
            className=" text-white bg-[#028531] rounded-xl border-2 font-mono md:text-lg md:mt-9 md:px-2 md:py-1 md:mx-2 md:mb-3 hover:bg-[#03ab3f] px-2 py-1 mt-5"
            onClick={() => router.push("/Aboutus")}
          >
            Read More
          </button>
        </div>

        <div className="relative gap-2 md:grid md:grid-rows-2  grid-flow-col md:h-88">
          <Image
            src="/15.jpg"
            alt="1st image"
            className="h-44 w-full rounded-lg border-3 border-[#028531] mx-1"
            width={500}
            height={500}
            style={{
              objectFit: "cover",
            }}
          />
          <Image
            src="/5.jpg"
            alt="1st image"
            className="w-full h-44 rounded-lg border-[#028531] mx-1"
            width={500}
            height={500}
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
