import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";



function SingleProducts({ addToCard }) {
    const [product, setProduct] = useState([]);

    const { id } = useParams();
    useEffect(() => {
        fetch(`https://aziza-fashion-world.onrender.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])


    console.log(product)
    return (
        <div className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={product.picture} />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">Brand : {product?.brand}</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1"> {product.name}</h1>
                        <p className='text-pink-500 font-bold'>{product?.rating} Review</p>
                        <p className="leading-relaxed text-justify py-2">{product?.description}</p>

                        <div className="flex py-10">
                            <span className="title-font font-medium text-2xl text-gray-900">{product?.price} TK</span>
                            <button onClick={() => addToCard(product)} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add to cart</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProducts
