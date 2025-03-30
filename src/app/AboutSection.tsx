"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

function AboutSection() {
  const router = useRouter();

  return (
    <section
      className="relative w-full flex justify-center items-center bg-cover bg-center bg-no-repeat py-10"
      style={{ backgroundImage: "url('/1.jpg')" }}
    >
      <div className="absolute inset-0 bg-white opacity-50"></div>

      <div className="relative container mx-auto max-w-5xl px-4">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 text-[#028531] flex flex-col justify-between">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold mb-4">{`Best solar company in Durgapur & Asansol`}</h1>
              <p className="font-inconsolata text-md font-semibold text-black">
                {`Welcome to Solstice Sustainable Soltutions, the leading solar energy solutions provider in Asansol, West Bengal. We specialize in delivering high-quality, affordable, and sustainable solar power solutions tailored to your needs. From top-tier solar panels and inverters to expertly designed structural systems, we ensure maximum efficiency and long-term savings. Whether you're a homeowner, business, or industrial facility looking to cut energy costs and embrace a greener future, our expert team is here to provide seamless installation and exceptional service. Experience energy independence with the most trusted name in solar power.`}
              </p>
            </div>
            <button
              className="text-white bg-[#028531] rounded-xl font-mono text-lg px-4 py-2 mt-6 hover:bg-[#03ab3f] w-fit"
              onClick={() => router.push("/Aboutus")}
            >
              Read More
            </button>
          </div>

          <div className="flex flex-col gap-6 h-full">
            <div className="relative h-0 pb-[56.25%] w-full overflow-hidden rounded-lg border-2 border-[#028531]">
              <Image
                src="/15.jpg"
                alt="Solar panels installation"
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            <div className="relative h-0 pb-[56.25%] w-full overflow-hidden rounded-lg border-2 border-[#028531]">
              <Image
                src="/5.jpg"
                alt="Solar energy solution"
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
