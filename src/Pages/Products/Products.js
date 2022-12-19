import React from 'react'
import Background from '../../images/backgroung.webp'
import girl from '../../images/girl.png'
import Product from './Product';
import useProducts from './../../Hooks/useProducts';


function Products({addToCard}) {

   
    const [products] = useProducts([]);
   
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
            <div className='flex justify-end' style={sectionStyle}>
                <img className='' src={girl} alt="" />
            </div>
            <h1 className='text-center text-4xl font-bold md:pt-10 pt-4'>Our Products</h1>
            <div className="text-gray-600 body-font">
                <div className="container px-5 md:py-24 py-10 mx-auto">
                    <div className="grid md:grid-cols-4 md:gap-4 md:-m-4">
                        {products.map((product) => (
                            <Product product={product} addToCard={addToCard} key={product._id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
