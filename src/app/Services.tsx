"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
function Services() {
  return (
    <div
      className="relative bg-no-repeat bg-center bg-cover w-full flex flex-col justify-center items-center"
      style={{
        backgroundImage: "url('/1.jpg')",
      }}
    >
      <div className="absolute opacity-50 inset-0 bg-white" />
      <h1 className="relative text-slate-800 text-4xl md:text-5xl mt-5 font-semibold">
        Our Services in Durgapur and Asansol
      </h1>
      <span className=""></span>
      <div className="relative flex flex-col justify-center items-center mt-5 md:flex-row">
        <Service
          link={"ongrid"}
          title={`On Grid Solar Panel Installation`}
          source={"/15.jpg"}
          paragraph={`For domestic & businesses looking to cut costs and go green, our on-grid commercial solar solutions seamlessly integrate with the power grid, reducing electricity expenses and maximizing savings through net metering—all with reliable, sustainable energy for the long run.`}
        />
        <Service
          link={"offgrid"}
          title={`Off Grid Solar Panel Installation`}
          source={"/4.jpg"}
          paragraph={`For businesses & domestic seeking energy independence and cost savings, our off-grid commercial solar solutions provide reliable, battery-backed power, ensuring uninterrupted operations even in remote locations—sustainable, efficient, and grid-free.`}
        />
        <Service
          link="cctv"
          title={`CCTV CAMERA INSTALLATION AND NETWORK CONFIGURATION`}
          paragraph={`Ensure safety and connectivity with professional CCTV camera installation and seamless network configuration. Protect your property with top-tier surveillance solutions.`}
          source={"/cctv.jpg"}
        />
        <Service
          link="iot"
          title={`HOME AUTOMATION WITH IOT`}
          paragraph={`Transform your home with smart automation powered by IoT. Control lighting, security, and appliances effortlessly from anywhere! Experience convenience, energy efficiency, and enhanced security at your fingertips.`}
          source={"/blog2.jpg"}
        />
      </div>
    </div>
  );
}

const Service = ({
  title,
  paragraph,
  source,
  link,
}: {
  title: string;
  paragraph: string;
  source: string;
  link: string;
}) => {
  const router = useRouter();
  return (
    <div className="bg-white text-black m-3 rounded-xl  flex flex-col justify-start items-center py-5 border-[#007C11] border-2 h-[700px] w-[600px] md:w-[330px] md:h-[590px]">
      <Image
        src={source}
        alt="Solar panels installation"
        width={440}
        height={50}
        className="w-[540px] h-[350px] rounded-md border-2 border-black shadow-md md:w-[280px] md:h-[280px] mt-3"
      />
      <h2 className="text-2xl md:text-sm mt-9 mb-3 font-semibold px-8">
        {title}
      </h2>

      <p className="px-5 py-1.5 md:text-xs font-semibold">{paragraph}</p>
      <button
        className="bg-[#0dba13] hover:bg-[#0be012] text-white font-mono px-1.5 py-1 rounded-md mt-8"
        onClick={() => router.push(`/ourservices/${link}`)}
      >
        Read more
      </button>
    </div>
  );
};

export default Services;
