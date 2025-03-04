"use client";
import Image from "next/image";
const imageUrl1 = "/1.jpg";
export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-lime-600 mb-8">
          About Us
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src={imageUrl1}
              alt="About SolarTech"
              className="rounded-lg shadow-xl"
              width={600}
              height={400}
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg text-gray-700 mb-4">
              SolarTech Solutions is a leading provider of solar panel
              installation services. With years of experience and a team of
              skilled professionals, we're committed to helping homeowners and
              businesses transition to clean, renewable energy.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our mission is to make solar energy accessible, affordable, and
              efficient for everyone. We use cutting-edge technology and best
              practices to ensure that every installation is optimized for
              maximum energy production and longevity.
            </p>
            <button className="bg-yellow-400 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-yellow-500 transition duration-300">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
