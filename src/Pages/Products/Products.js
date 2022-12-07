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
            <h1 className='text-center text-4xl font-bold pt-10'>Our Products</h1>
            <div className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="grid grid-cols-3 gap-4 -m-4">
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
