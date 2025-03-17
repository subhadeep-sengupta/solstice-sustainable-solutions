import Image from "next/image";

function AboutSection() {
  return (
    <section className="h-screen w-screen relative flex md:flex-col justify-center items-center">
      <Image
        className="h-full w-full opacity-50 absolute"
        alt="Mountains"
        src="/1.jpg"
        width={500}
        height={500}
        style={{
          objectFit: "cover",
        }}
      />
      <div className="absolute flex justify-start items-center gap-3 m-3 p-2">
        <div className="m-1.5 bg-white w-300px h-auto border-spacing-3 rounded-lg px-3">
          <h2>About us</h2>
          <p className="w-auto h-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
            numquam qui ullam, ex eaque reprehenderit vitae dignissimos nesciunt
            consequatur deserunt, illum eligendi hic sint in ipsa molestias
            voluptate, similique expedita rerum autem tenetur obcaecati officiis
            veniam at? Reprehenderit id facere nostrum consequatur? Harum, earum
            facilis consequatur quibusdam modi, dolores dicta officiis aliquid
            nobis enim, esse ipsa voluptas quo temporibus accusamus?
          </p>
        </div>
        <div className="bg-white w-500px h-500px border-spacing-3 rounded-lg px-3 m-2">
          <div className="text-cyan-800">HEllo</div>
          <div className="text-cyan-800">There</div>
          <div className="text-cyan-800">Brotha</div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
