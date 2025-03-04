import Image from "next/image";

function AboutSection() {
  return (
    <section className="h-screen w-screen">
      <Image
        className="h-full w-full opacity-50"
        alt="Mountains"
        src="/1.jpg"
        width={500}
        height={500}
        style={{
          objectFit: "cover",
        }}
      />
    </section>
  );
}

export default AboutSection;
