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
        className="w-screen h-screen absolute inset-0 object-cover opacity-70"
      ></video>
      <div className="relative z-10 h-full w-full flex flex-col justify-center items-center text-white">
        <span className="text-4xl font-bold mb-4">Best Solar</span>
        <h2 className="text-4xl font-bold mb-4">Panel Installation</h2>
        <h2 className="text-4xl font-bold mb-4">Company in Durgapur</h2>

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
      onClick={() => router.push("/contactus")}
    >
      Get a Quote
    </button>
  );
};
