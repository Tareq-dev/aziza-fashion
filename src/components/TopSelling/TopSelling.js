import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./TopSelling.css";

// import required modules
import { Pagination } from "swiper";

function TopSelling() {
  return (
    <div>
      <div className="text-center">
        <h1 className="md:text-4xl text-2xl font-extrabold">
          Top Selling Products
        </h1>
        <p className="text-xs md:text-lg text-center mt-4">
          Qui eu deserunt consequat est nulla sunt in enim quis cillum
        </p>
        <p className="text-sm md:text-lg text-center">
          {" "}
          nulla sunt in enim quis cillum. Qui est nulla
        </p>
      </div>
      <div className="px-4 md:px-20 md:py-4">
        <>
          <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="swiper-height">
              <img
                className=""
                src="https://m.media-amazon.com/images/I/61yBCMmuI4L._UY741_.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-height">
              <img
                src="https://m.media-amazon.com/images/I/61BGQkacSFL._UY741_.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-height">
              <img
                src="https://m.media-amazon.com/images/I/61Q7STg-fLL._UY741_.jpg"
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide className="swiper-height">
              <img
                src="https://m.media-amazon.com/images/I/71O1QaI-sbL._UY741_.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-height">
              <img
                src="https://m.media-amazon.com/images/I/71CPzIvedhL._UY741_.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-height">
              <img
                src="https://m.media-amazon.com/images/I/71d9jtOif2L._UY741_.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-height">
              <img
                src="https://m.media-amazon.com/images/I/71NpqTaQldL._UY741_.jpg"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </div>
  );
}

export default TopSelling;
