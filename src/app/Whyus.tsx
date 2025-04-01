function Whyus() {
  return (
    <section className="relative flex flex-col justify-center items-center py-10 w-screen px-10">
      <h1 className="text-2xl font-semibold mb-5 md:text-4xl">
        Why Choose our Solar Company in Durgapur and Asansol?
      </h1>
      <span className="bg-green-500 h-0.5 bottom-0 left-0 w-full mb-6"></span>
      <div className="relative container flex flex-col items-center justify-center md:flex-row">
        <Card
          header={`Customized Solar Solutions`}
          paragraph={`We understand that each customer has unique energy requirements. That is why we offer customized solar solutions tailored to your specific needs. Whether it's a small home installation or a large-scale commercial project, we are equipped to handle it all.`}
        />
        <Card
          header={`Expertise in Solar Panel Installations`}
          paragraph={`At Solstice Sustainable Solutions, we bring innovative and reliable solar solutions that prioritize sustainability and efficiency. With our expertise, we ensure seamless installations that maximize energy output while building a greener future.`}
        />
        <Card
          header={`Affordable Solar Power Systems`}
          paragraph={`As the best solar panel company in Durgapur and Asansol, we believe that everyone should have access to clean energy. Our affordable solar panel systems ensure that you can start saving on your electricity bills without breaking the bank.`}
        />
      </div>
    </section>
  );
}

export default Whyus;

const Card = ({ header, paragraph }: { header: string; paragraph: string }) => {
  return (
    <div className="text-lg font-sans bg-[#007C11] px-2 w-full m-2 rounded-xl text-white flex flex-col justify-center items-center  md:w-auto md:h-auto hover:-translate-y-2 transition-transform duration-300">
      <h2 className="text-xl pt-2 font-bold">{header}</h2>
      <p className="text-sm mx-2 my-3 font-semibold">{paragraph}</p>
    </div>
  );
};
