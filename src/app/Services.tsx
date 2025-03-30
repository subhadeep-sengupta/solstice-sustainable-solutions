"use client";
import Image from "next/image";
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
          title={`On Grid`}
          source={"/15.jpg"}
          paragraph={`For domestic & businesses looking to cut costs and go green, our on-grid commercial solar solutions seamlessly integrate with the power grid, reducing electricity expenses and maximizing savings through net metering—all with reliable, sustainable energy for the long run.`}
        />
        <Service
          title={`Off Grid`}
          source={"/4.jpg"}
          paragraph={`SOlar jfhrjeviohoeriv`}
        />
        <Service
          title={`CCTV CAMERA INSTALLATION AND NETWORK CONFIGURATION`}
          paragraph={`SOlar jfhrjeviohoeriv`}
          source={"/cctv.jpg"}
        />
        <Service
          title={`HOME AUTOMATION WITH IOT`}
          paragraph={`SOlar jfhrjeviohoeriv`}
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
}: {
  title: string;
  paragraph: string;
  source: string;
}) => {
  return (
    <div className="bg-white text-black m-3 rounded-xl  flex flex-col justify-start items-center py-5 border-[#007C11] border-2 h-[700px] w-[600px] md:w-[330px] md:h-[590px]">
      <Image
        src={source}
        alt="Solar panels installation"
        width={440}
        height={50}
        className="w-[540px] h-[350px] rounded-md border-2 border-black shadow-md md:w-[280px] md:h-[280px] mt-3"
      />
      <h2 className="text-4xl mt-9 mb-3 font-semibold">{title}</h2>

      <p className="px-5 py-1.5">{paragraph}</p>
      <button className="bg-[#0dba13] hover:bg-[#0be012] text-white font-mono px-1.5 py-1 rounded-md">
        Read more
      </button>
    </div>
  );
};

export default Services;
