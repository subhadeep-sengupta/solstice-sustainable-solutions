// import { Navbar } from "../navbar";
"use client";

import Image from "next/image";

export default function ContactUs() {
  return (
    <section
      className="flex flex-col justify-center items-center"
      style={{
        backgroundImage: `radial-gradient(circle at 0.7px 0.7px, rgba(124, 128, 125, 0.5) 2px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      <h1 className="text-4xl md:text-6xl font-sans font-bold mt-9">
        Contact us
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="">
          <div className="flex flex-col justify-center items-center  mr-7 ">
            <p className="text-2xl font-semibold font-sans mt-6">
              Our social media
            </p>
            <Embed />
            <p className="text-md font-sans font-semibold mt-4">
              Our contact no :- +91 9475588412
            </p>
            <p className="text-md font-sans font-semibold mt-4 mb-8">
              Our email :- solsticesustainablesolutions@gmail.com
            </p>
          </div>
        </div>
        <div className="ml-12  ">
          <Image src="/logo.png" alt="logo" width={400} height={400} />
        </div>
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
    <div className="flex justify-center items-center p-4">
      <iframe
        src={`https://www.instagram.com/${username}/embed`}
        className="md:w-[600px] w-[300px] h-[400px] border rounded-xl shadow-lg"
        allowFullScreen
      ></iframe>
    </div>
  );
};
