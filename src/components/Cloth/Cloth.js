import React from 'react'
import Product from '../../Pages/Products/Product';
import useProducts from './../../Hooks/useProducts';

function Cloth({addToCard}) {
    const [products] = useProducts([])
    return (
        <div className='md:px-5 px-2'>
            <h1 className='px-5 text-2xl font-semibold uppercase pt-6 pb-2'>Cloths</h1>
            <div className='grid grid-cols-2 md:grid-cols-6 gap-3'>
                {products.map((product) => (
                    <Product product={product} addToCard={addToCard} key={product._id} />
                ))}
            </div>
        </div>
    )
}

export default Cloth
