import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Background from '../../images/backgroung.webp'
import girl from '../../images/girl.png'
import Product from './Product';


function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data)

            });
    }, [])
    var sectionStyle = {
        width: "100%",
        height: "500px",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat'
    };
    return (
        <div>
            <div className='bg-gray-200'>
                <Navbar />
            </div>
            <div className='flex justify-end' style={sectionStyle}>
                <img className='' src={girl} alt="" />
            </div>
            <h1 className='text-center text-4xl font-bold pt-10'>Our Products</h1>
            <div className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="grid grid-cols-3 gap-4 -m-4">
                        {products.map((product) => (
                            <Product product={product} key={products._id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
