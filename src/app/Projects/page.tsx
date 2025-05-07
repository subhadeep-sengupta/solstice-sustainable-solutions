import Image from "next/image";

function page() {
  // Sample projects data - you can replace this with your actual data source
  const projects = [
    {
      link: "/1.jpg",
      paragraph: "33 kW On-Grid at Asansol",
    },
    {
      link: "/14.jpg",
      paragraph: "15 kW On-Grid at Talberia, Asansol ",
    },
    {
      link: "/3.jpg",
      paragraph: "5 kW Off-Grid at Maithan",
    },
    {
      link: "/3.jpg",
      paragraph: "5 kW Off-Grid at Kumardhubi, Maithan",
    },
    {
      link: "/15.jpg",
      paragraph: "7 kW On-Grid at Asansol",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen py-12 px-4">
      <h1 className="text-4xl font-sans font-semibold text-slate-800 mb-12">
        Projects Executed
      </h1>
      <div className="flex flex-col items-center justify-center w-full max-w-4xl gap-16">
        {projects.map((project, index) => (
          <Description
            key={index}
            link={project.link}
            paragraph={project.paragraph}
          />
        ))}
      </div>
    </div>
  );
}

const Description = ({
  link,
  paragraph,
}: {
  link: string;
  paragraph: string;
}) => {
  return (
    <div className="w-full">
      <div className="aspect-video w-full overflow-hidden rounded-xl shadow-lg">
        <Image
          src={link}
          alt={paragraph}
          width={1000}
          height={600}
          className="w-full h-full object-cover border-4 border-[#007C11]"
        />
      </div>
      <div className="mt-4 mb-2 max-w-full">
        <p className="text-lg font-sans font-semibold text-center bg-[#26cf0c] text-neutral-50 rounded-lg p-3 shadow-md hover:translate-y-2 transition-transform hover:duration-300">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default page;
