"use client";
import Image from "next/image";

const Vision = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-start items-center">
      <VisionFeatures />
      <Image
        src="/7.jpg"
        alt=""
        width={700}
        height={700}
        className="w-[300px] h-[480px] rounded-tl-2xl rounded-br-2xl "
      />
    </div>
  );
};

export default Vision;

interface VisionPointProps {
  title: string;
  description: string;
}

const VisionPoint: React.FC<VisionPointProps> = ({ title, description }) => {
  return (
    <div className="flex mb-10">
      <div className="flex-shrink-0 mr-4">
        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-800 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const VisionFeatures: React.FC = () => {
  return (
    <div className="max-w-3xl mx-7 p-4">
      <VisionPoint
        title="Leading Renewable Energy Provider"
        description="Our vision is to be a leading force in the renewable energy sector, empowering individuals and businesses across West Bengal and beyond to embrace solar power."
      />

      <VisionPoint
        title="Sustainable & Reliable Solutions"
        description="We aim to create a sustainable future by providing accessible, efficient, and reliable solar solutions that contribute to a cleaner and greener planet."
      />

      <VisionPoint
        title="Innovation & Energy Independence"
        description="Through innovation and dedication, we strive to make solar energy the preferred choice for all, promoting energy independence and reducing our carbon footprint."
      />
    </div>
  );
};
