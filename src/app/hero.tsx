"use client";

import { useRouter } from "next/navigation";

export default function HeroSection() {
  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <video
        src="/cfrittis-mp4.mp4"
        autoPlay={true}
        loop={true}
        muted={true}
        controls={false}
        width="100%"
        height="100%"
        className="w-screen h-screen absolute inset-0 object-cover "
      ></video>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-700/50 via-slate-800/50 to-slate-900/50 z-[5]"></div>
      <div className="relative z-10 h-full w-full flex flex-col justify-center items-center text-white">
        <h2 className="text-7xl  mb-4 font-sans font-semibold bg-[#10f00c]  text-transparent bg-clip-text ">
          Solstice Sustainble Solutions
        </h2>
        <DottedButton />
      </div>
    </div>
  );
}

const DottedButton = () => {
  const router = useRouter();
  return (
    <button
      className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
      onClick={() => router.push("/Contactus")}
    >
      Get a Quote
    </button>
  );
};
