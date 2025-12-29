import React from "react";

const topSellingProducts = [
  {
    img: "https://m.media-amazon.com/images/I/61yBCMmuI4L._UY741_.jpg",
    name: "Smart Watch",
    price: "$129",
  },
  {
    img: "https://m.media-amazon.com/images/I/61Q7STg-fLL._UY741_.jpg",
    name: "Backpack",
    price: "$89",
  },
  {
    img: "https://m.media-amazon.com/images/I/71O1QaI-sbL._UY741_.jpg",
    name: "Running Shoes",
    price: "$149",
  },
  {
    img: "https://m.media-amazon.com/images/I/71CPzIvedhL._UY741_.jpg",
    name: "Sunglasses",
    price: "$59",
  },
];

const TopSelling = () => {
  return (
    <div className="py-12 px-4 md:px-20 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          Top Selling Products
        </h1>
        <p className="text-sm md:text-lg text-gray-500 mt-2 md:mt-4">
          Explore our best-selling products and find your favorites
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 gap-6">
        {topSellingProducts.map((product, idx) => (
          <div
            key={idx}
            className="relative rounded-xl overflow-hidden shadow-lg bg-white group cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-40 sm:h-48 md:h-56 object-contain"
            />

            {/* Bottom Overlay */}
            <div className="absolute bottom-0 w-full md:h-14 bg-black bg-opacity-50 backdrop-blur-sm flex flex-col justify-center items-center px-2">
              <h3 className="text-white font-semibold text-sm sm:text-base">
                {product.name}
              </h3>
              <p className="text-yellow-400 font-bold text-xs sm:text-sm">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSelling;
