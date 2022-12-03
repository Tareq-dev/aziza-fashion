import React from 'react'
import Banner from '../Banner/Banner'
import CoverflowEffect from '../CoverflowEffect/CoverflowEffect'
import NewArrival from '../NewArrival/NewArrival'
import Speciality from '../Speciality/Speciality'
import Testimonial from '../Testimonial/Testimonial'
import TopSelling from '../TopSelling/TopSelling'
function Home() {
    return (
        <div className=''>
            <Banner />
            <CoverflowEffect />
            <NewArrival />
            <TopSelling />
            <Speciality />
            <Testimonial />
        </div>
    )
}

export default Home
