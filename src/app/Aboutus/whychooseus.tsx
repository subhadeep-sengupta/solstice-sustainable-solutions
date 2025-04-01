"use client";
import Image from "next/image";

const Whychooseus = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center">
      <Image
        src="/3.jpg"
        alt=""
        width={600}
        height={799}
        className=" mt-8 rounded-md border-2 border-[#007C11] md:w-[500px] ml-9 "
      />
      <div className="flex flex-col justify-center items-center md:max-w-[700px] mt-10">
        <h2 className="font-sans font-bold text-2xl">Why Choose Us?</h2>
        <div>
          <p className="font-semibold fonr-sans text-sm px-6 py-4">
            {`We stand out as the top solar panel manufacturer in Durgapur & Asansol due to our focus on quality, innovation, and customer satisfaction. Our expert team ensures seamless installation, top-tier maintenance services, and the best materials to guarantee long-lasting solar power solutions.`}
          </p>
        </div>

        <FeatureCards />
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  backgroundColor?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  backgroundColor = "#4CAF50",
}) => {
  return (
    <div className="flex items-start mb-8 mx-4">
      <div
        className="w-16 h-16 flex items-center justify-center rounded-full mr-4 flex-shrink-0"
        style={{ backgroundColor }}
      >
        {icon}
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2 font-sans">{title}</h2>
        <p className="text-gray-700 font-sans font-semibold">{description}</p>
      </div>
    </div>
  );
};

const FeatureCards: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <FeatureCard
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        }
        title="Quality You Can Trust"
        description="We manufacture panels designed to withstand harsh weather conditions while ensuring maximum energy efficiency. Our products go through rigorous testing, making us a reputable solar panel manufacturer in West Bengal."
        backgroundColor="#4CAF50"
      />

      <FeatureCard
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
        }
        title="Cutting-Edge Technology"
        description="As a leader in the solar industry, we incorporate the latest technologies to optimize energy production. From mono-crystalline panels to advanced inverters, we ensure our clients receive the most efficient solar systems available."
        backgroundColor="#7E57C2"
      />
    </div>
  );
};

export default Whychooseus;
