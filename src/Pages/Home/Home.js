import React from 'react'
import Banner from '../../components/Banner/Banner'
import Cloth from '../../components/Cloth/Cloth'
import CoverflowEffect from '../../components/CoverflowEffect/CoverflowEffect'
import Footer from '../../components/Footer/Footer'
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
            <Cloth />
            <Speciality />
            <Testimonial />
            <Footer />
        </div>
    )
}

export default Home
