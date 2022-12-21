import React from 'react'
import Banner from '../../components/Banner/Banner'
import CoverflowEffect from '../../components/CoverflowEffect/CoverflowEffect'

import HomeProducts from '../../components/HomePorducts/HomeProducts'
import NewArrival from '../../components/NewArrival/NewArrival'
import Speciality from '../../components/Speciality/Speciality'
import Testimonial from '../../components/Testimonial/Testimonial'
import TopSelling from '../../components/TopSelling/TopSelling'
function Home() {
    return (
        <div className=''>
            <Banner />
            <CoverflowEffect />
            <NewArrival />
            <TopSelling />
            <HomeProducts />
            <Speciality />
            <Testimonial />
        </div>
    )
}

export default Home
