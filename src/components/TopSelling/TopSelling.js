import React from 'react'
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
            <div className='text-center'>
                <h1 className='md:text-4xl text-2xl font-extrabold'>Top Selling Products</h1>
                <p className='text-xs md:text-lg text-center mt-4'>Qui eu deserunt consequat est nulla sunt in enim quis cillum</p>
                <p className='text-sm md:text-lg text-center'> nulla sunt in enim quis cillum. Qui  est nulla</p>
            </div>
            <div className='px-4 md:px-20 md:py-4'>
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
                        <SwiperSlide className='swiper-height'> <img className='' src="https://scontent.fcgp6-1.fna.fbcdn.net/v/t1.15752-9/310578628_1190862774835504_1030781791697468913_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGpwyyXVG4o7Agi_aGjoJ8vz80ySECNABPPzTJIQI0AE7BUhI54aIYTn334olNbp4QNt6E2EEWr-RXhjytnJl-h&_nc_ohc=l2U1avpjWcwAX_cICxD&_nc_pt=1&_nc_ht=scontent.fcgp6-1.fna&oh=03_AdQ7WdLuqRjYum5iJETq3fzkmLouqS2m4VEc1dAfLnmbuQ&oe=63B24EC6" alt="" /></SwiperSlide>
                        <SwiperSlide className='swiper-height'><img src="https://scontent.fcgp6-1.fna.fbcdn.net/v/t1.15752-9/315523244_1575870642841167_6096629031060289284_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFNYvG4O0BknkmRckYmMjH_oaYIS3VrwQmhpghLdWvBCeZCwYB1NbGCQ6-4P1DCSBtA2RhGKp4QqVAdS3fvaUmt&_nc_ohc=RrxhWpFNTLoAX-gn6aR&_nc_pt=1&_nc_ht=scontent.fcgp6-1.fna&oh=03_AdRs6WF1Gl4hgoImi345UHCvzw-u0XKP1N2TwCeykuHhPw&oe=63B25A06" alt="" /></SwiperSlide>
                        <SwiperSlide className='swiper-height'><img src="https://scontent.fcgp6-1.fna.fbcdn.net/v/t1.15752-9/315524486_836695860912993_2037433397284208238_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHh_yIUzlAfQVsZUVUdlYozxtcXWqKBGHjG1xdaooEYeOqKN9uYsQXibI3Qn7UEQjT1MZlHxw6Kq6vIGy2SK_QY&_nc_ohc=4mvM32JFaQwAX9do5AG&_nc_pt=1&_nc_ht=scontent.fcgp6-1.fna&oh=03_AdRjXjDpxBVO_3zUzqwzplqSlOEjCt0pKgfvDQNXHyOstQ&oe=63B2412B" alt="" /></SwiperSlide>
                        <SwiperSlide className='swiper-height'><img src="https://scontent.fcgp6-1.fna.fbcdn.net/v/t1.15752-9/315524442_1763216664042386_2866664154351860826_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeEfTNKTsj3hHsBvDE_3bmdNJK6v-QiJOpkkrq_5CIk6mS7KGdMnEOfWIyz7hsyIvKBpwv58oWXW0QJno9UwXWUM&_nc_ohc=MwNgg0afB18AX-90Hgd&_nc_pt=1&_nc_ht=scontent.fcgp6-1.fna&oh=03_AdTX0tanTfWt8fse3NzQnZHHg9p_5_zxxCr_C20AlIXrzA&oe=63B270C1" alt="" /></SwiperSlide>
                        <SwiperSlide className='swiper-height'><img src="https://scontent.fcgp6-1.fna.fbcdn.net/v/t1.15752-9/307722882_3259496857712467_8572842781826318151_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFi1IR9fM_LbcqHj9k3-B7eEv0Pq94S7F4S_Q-r3hLsXi3WslvoGyv3gRv4Up3Vt3B4B_SmyyIv_1Mczz8rgJ7X&_nc_ohc=uwYC9j5Y07gAX-f2lRN&_nc_pt=1&_nc_ht=scontent.fcgp6-1.fna&oh=03_AdREOftcutn-faasYpzq22JKpShgBZEBZu6ZXbhczjLvzw&oe=63B23FB7" alt="" /></SwiperSlide>
                        <SwiperSlide className='swiper-height'> <img src="https://scontent.fcgp6-1.fna.fbcdn.net/v/t1.15752-9/314376807_421086136733682_6018256499369445007_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHp12sPD534vVgXUf5aOKcNPXB8AbI9gN49cHwBsj2A3kqMX4aXZFGjvz7Leb3lMhpjWtQFTAzQZDvxBead2Rxf&_nc_ohc=IaYwI-pd_YwAX8BTzUe&_nc_pt=1&_nc_ht=scontent.fcgp6-1.fna&oh=03_AdRH3ro3iHyMiaCI7AaZhOlxnUnRWUpQwvCwsB5XeQ9k9w&oe=63B26653" alt="" /></SwiperSlide>
                        <SwiperSlide className='swiper-height'><img src="https://scontent.fcgp6-1.fna.fbcdn.net/v/t1.15752-9/315313505_1266345393933395_6356324244164382476_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeENm4EE10K_JQWzqbwchtWuPzVUNOF9zKw_NVQ04X3MrP0ovQQ4_v4Q0WJmlRWwxrT0okxB0bLsHyGdOmZT4Zvo&_nc_ohc=lKM0xRS8ONsAX-uiQXV&_nc_pt=1&_nc_ht=scontent.fcgp6-1.fna&oh=03_AdREXnLE_IyFujFH1nMB0x8u9sI8MF7RRfL2csci1uefuA&oe=63B24EE2" alt="" /></SwiperSlide>
                        <SwiperSlide className='swiper-height'><img src="https://scontent.fcgp6-1.fna.fbcdn.net/v/t1.15752-9/315320976_1550952655402534_2720531423723950240_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeEJHRpeFH2Vz65Zkw31KlnwjzdAOXEEnSOPN0A5cQSdI9D-ekP2fJoLN6O99VavMgdqlG0VoVlnM9K2UYOpWGjn&_nc_ohc=8UqSdfiSxC8AX-0HeiE&_nc_pt=1&_nc_ht=scontent.fcgp6-1.fna&oh=03_AdSHpIuMaCNUJKB1_o2GXruiQxhPi8gurDMtxJyr1bHwjQ&oe=63B25DBF" alt="" /> </SwiperSlide>
                        <SwiperSlide className='swiper-height'><img src="https://scontent.fcgp6-1.fna.fbcdn.net/v/t1.15752-9/316040909_836749757570434_7128287943275353662_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFtQLtithrGUaFmukUFJTU9MoSChlL92lwyhIKGUv3aXAt_7jf6NmxZfvDXbeI3u6Jt-mPYCpYGS0-Qu-whKjvD&_nc_ohc=nuT1uhJdWR4AX8kcF7E&_nc_pt=1&_nc_ht=scontent.fcgp6-1.fna&oh=03_AdS4d3JXDcr8v_uStWlSoJX2gk7eVRWPaBrT5YPEupNXvQ&oe=63B26A6F" alt="" /> </SwiperSlide>
                    </Swiper>
                </>
            </div>
        </div>
    )
}

export default TopSelling
