import React from 'react'
import Banner from '../../components/Banner/Banner'
import CoverflowEffect from '../../components/CoverflowEffect/CoverflowEffect'

import HomeProducts from '../../components/HomePorducts/HomeProducts'
import NewArrival from '../../components/NewArrival/NewArrival'
import Speciality from '../../components/Speciality/Speciality'
import Testimonial from '../../components/Testimonial/Testimonial'
import TopSelling from '../../components/TopSelling/TopSelling'
function Home({ addToCard, cart, onRemoveItem, onRemoveCart, itemsPrice, check, setCheck }) {
    return (
        <div className=''>
            <Banner />
            <CoverflowEffect />
            <NewArrival />
            <TopSelling />
            <HomeProducts addToCard={addToCard} cart={cart} onRemoveItem={onRemoveItem} onRemoveCart={onRemoveCart} itemsPrice={itemsPrice} check={check} setCheck={setCheck} />
            <Speciality />
            <Testimonial />
        </div>
    )
}

export default Home
