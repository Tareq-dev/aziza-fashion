import React from 'react'
import Product from '../../Pages/Products/Product';
import useProducts from '../../Hooks/useProducts';
import { Link } from 'react-router-dom';

function HomeProducts({  addToCard, cart, onRemoveItem, onRemoveCart, itemsPrice, check, setCheck}) {
    const [products] = useProducts([])
    return (
        <div className='md:px-5 md:py-4 px-2'>
            <h1 className='px-5 text-2xl font-semibold uppercase pt-6 pb-2'>Products</h1>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-3'>
                {products.map((product) => (
                    <Product product={product} key={product._id} addToCard={addToCard} cart={cart} onRemoveItem={onRemoveItem} onRemoveCart={onRemoveCart} itemsPrice={itemsPrice} check={check} setCheck={setCheck} />
                ))}
            </div>
            <div className='pt-14 pb-5 flex justify-center '>
                <Link to="/products" className='bg-pink-200 px-2 text-black font-bold text-xl rounded-md' type="">View All</Link>
            </div>
        </div>
    )
}

export default HomeProducts
