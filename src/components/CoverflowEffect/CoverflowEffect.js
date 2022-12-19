import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import './CoverflowEffect.css'

const CoverflowEffect = () => {
  return (
    <div className="py-2 md:pb-14 bg-dna px-4">
      <h1 className="text-center text-black text-3xl mt-5 md:mb-4 font-bold">Our Product</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='swiper-height'>
          <div className="px-2">
            <img
              src="https://img.freepik.com/free-photo/closeup-shot-cool-looking-afro-american-girl-posing-with-some-shopping-bags_181624-45777.jpg?w=740&t=st=1670049419~exp=1670050019~hmac=fdf0a3c3283a5e87a4603867652858afdfb7ce992ebe32c0eab0bd6056663e9e"
              alt="Trek"
            />

          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-height'>
          <div className="p-2">
            <img
              src="https://img.freepik.com/free-photo/happy-beautiful-couple-posing-with-shopping-bags-violet_496169-2215.jpg?w=740&t=st=1670049422~exp=1670050022~hmac=3c2ffd2df214a8b5098ce2909229a8bda78f6ecf2d6654edda80071ab5ee3294"
              alt="Trek"
            />

          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-height'>
          <div className="p-2">
            <img
              src="https://img.freepik.com/free-photo/medium-shot-man-holding-megaphone_23-2149220703.jpg?w=740&t=st=1670049434~exp=1670050034~hmac=8fabaa2c4ecb520e4d6a9cccaa7460cb70ba1b3bcc4fba21aa16089e7de6affa"
              alt="Trek"
            />

          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-height'>
          <div className="p-2">
            <img
              src="https://img.freepik.com/free-photo/young-teen-woman-sunglasses-hat-holding-shopping-bags-her-hands-feeling-so-happiness-isolated-green-wall_231208-2681.jpg?w=740&t=st=1670042283~exp=1670042883~hmac=6123843e2d5d86f836a096647cf845934393cb17b2ee99bd62427135675a1c99"
              alt="Trek"
            />

          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-height'>
          <div className="p-2">
            <img
              src="https://img.freepik.com/free-photo/happy-man-looking-surprised-shopping-bags-buying-souvenirs-vacation-standing-yellow-background_1258-40957.jpg?w=740&t=st=1670042291~exp=1670042891~hmac=861362b9a652d543a186459871391eeca07f601f3476d934f47ccd98b14ce329"
              alt="Trek"
            />

          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-height'>
          <div className="p-2">
            <img
              src="https://img.freepik.com/free-photo/portrait-cheerful-young-blonde-woman-summer-hat-sunglasses-holding-shopping-bags-yellow-wall_231208-3641.jpg?w=740&t=st=1670042298~exp=1670042898~hmac=46849ce57f7611e14e2fcbc7fe26ea86075ab187df77f22e3df61412621af35c"
              alt="Trek"
            />

          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-height'>
          <div className="p-2">
            <img
              src="https://img.freepik.com/free-photo/beautiful-asian-woman-holding-colored-shopping-bags_1150-13943.jpg?t=st=1670049450~exp=1670050050~hmac=59666d99d070b9c2bbd52ad49fb5acb3779038aee35b2ef6be38886b27851fe2"
              alt="Trek"
            />

          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-height'>
          <div className="p-2">
            <img
              src="https://img.freepik.com/free-photo/stylish-woman-with-shopping-bags_23-2148733284.jpg?w=740&t=st=1670042378~exp=1670042978~hmac=1f6b50c3ffd363eb152694dc95e458eaf6bfb5f56ce78afc634fb952964772b0"
              alt="Trek"
            />

          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CoverflowEffect;