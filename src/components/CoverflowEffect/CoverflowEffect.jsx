import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./CoverflowEffect.css";

// Sample products data
const products = [
  {
    img: "https://img.freepik.com/free-photo/closeup-shot-cool-looking-afro-american-girl-posing-with-some-shopping-bags_181624-45777.jpg",
    name: "Stylish Woman",
    description: "Trendy shopping style",
    price: "$49.99",
  },
  {
    img: "https://img.freepik.com/free-photo/happy-beautiful-couple-posing-with-shopping-bags-violet_496169-2215.jpg",
    name: "Happy Couple",
    description: "Matching outfit combo",
    price: "$89.99",
  },
  {
    img: "https://img.freepik.com/free-photo/medium-shot-man-holding-megaphone_23-2149220703.jpg",
    name: "Cool Man",
    description: "Bold & casual look",
    price: "$59.99",
  },
  {
    img: "https://img.freepik.com/free-photo/young-teen-woman-sunglasses-hat-holding-shopping-bags-her-hands-feeling-so-happiness-isolated-green-wall_231208-2681.jpg",
    name: "Teen Fashion",
    description: "Casual summer wear",
    price: "$39.99",
  },
  {
    img: "https://img.freepik.com/free-photo/happy-man-looking-surprised-shopping-bags-buying-souvenirs-vacation-standing-yellow-background_1258-40957.jpg",
    name: "Surprised Shopper",
    description: "Exciting deals",
    price: "$69.99",
  },
];

const CoverflowEffect = () => {
  return (
    <div className="pt-10 pb-16 bg-gradient-to-b from-white via-sky-50 to-white px-4 md:px-20">
      <h2 className="text-center text-gray-800 text-2xl md:text-3xl font-extrabold mb-8">
        Our Product Category
      </h2>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 25,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {products.map((product, idx) => (
          <SwiperSlide key={idx} className="swiper-slide">
            <div className="slide-card">
              <img src={product.img} alt={product.name} />
              <div className="slide-info">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-sm text-gray-200">{product.description}</p>
                <span className="price">{product.price}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CoverflowEffect;
