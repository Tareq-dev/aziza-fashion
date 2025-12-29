import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const topSellingProducts = [
  {
    img: "https://m.media-amazon.com/images/I/61yBCMmuI4L._UY741_.jpg",
    name: "Smart Watch",
    price: "$129",
  },
  {
    img: "https://m.media-amazon.com/images/I/61BGQkacSFL._UY741_.jpg",
    name: "Wireless Headphones",
    price: "$199",
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

function TopSelling() {
  return (
    <div className="py-12 bg-gray-50">
      {/* Header */}
      <div className="text-center px-4 md:px-20">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          Top Selling Products
        </h1>
        <p className="text-sm md:text-lg text-gray-500 mt-2 md:mt-4">
          Explore our best-selling products and find your favorites
        </p>
      </div>

      {/* Swiper */}
      <div className="px-4 md:px-20 mt-10">
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={24}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
        >
          {topSellingProducts.map((product, idx) => (
            <SwiperSlide
              key={idx}
              className="w-64 sm:w-72 md:w-80 lg:w-96 flex justify-center"
            >
              <div className="relative w-full h-72 md:h-80 rounded-xl overflow-hidden shadow-lg">
                {/* Product Image */}
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />

                {/* Bottom Overlay (25%) */}
                <div className="absolute bottom-0 w-full h-1/4 bg-white-50 bg-opacity-10 backdrop-blur-sm p-14 flex flex-col justify-center">
                  <h3 className="text-black bg-white font-bold text-lg">
                    {product.name}
                  </h3>
                  <p className="text-yellow-400 bg-white  font-semibold">
                    {product.price}
                  </p>
                  <button className="mt-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-1 rounded-md text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default TopSelling;
