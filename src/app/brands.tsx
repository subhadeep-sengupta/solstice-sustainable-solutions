function Brands() {
  return <ProductsSection />;
}

export default Brands;

const ProductsSection = () => {
  const products = [
    {
      category: "Solar Panels",
      brands: [
        "Vikram Solar",
        "Axitec (German Brand)",
        "Anchor by Panasonic",
        "Waaree",
      ],
    },
    {
      category: "Inverters",
      brands: ["Havells", "K Solare", "SolarEdge (Top Brand)", "Microtek"],
    },
    {
      category: "Structure",
      brands: [
        "Galvanized Iron",
        "Aluminium (Cheaper than GI and very robust)",
      ],
    },
  ];

  return (
    <section
      className="py-8"
      style={{
        backgroundImage:
          "radial-gradient(circle at 0.7px 0.7px, rgba(124, 128, 125, 0.5) 1px, transparent 0)",
        backgroundSize: "9px 9px",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold font-sans text-center mb-6">
          Products We Use in Our Projects
        </h2>

        <div className="flex flex-col lg:flex-row gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex-1 border-4 border-[#007C11] hover:translate-y-2 transition-transform hover:duration-300"
            >
              <h3 className="text-xl font-semibold text-green-600 mb-4">
                {product.category}
              </h3>
              <ul className="space-y-2">
                {product.brands.map((brand, brandIndex) => (
                  <li
                    key={brandIndex}
                    className="py-2 border-b font-bold font-sans border-gray-100 last:border-b-0"
                  >
                    {brand}
                  </li>
                ))}
              </ul>
              {product.category === "Structure" && (
                <p className="mt-4 text-sm text-gray-600 italic">
                  All installations are done with stainless steel (SS304)
                  screws, nuts and washers
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-4 text-md font-bold text-gray-500">
          More brands available on request
        </div>
      </div>
    </section>
  );
};
