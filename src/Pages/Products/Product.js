import React from 'react'
import { IoMdHeartEmpty } from 'react-icons/io';
import { AiFillStar } from 'react-icons/ai';
 
function Product({product}) {

    return (
            <div className="p-4 relative">
                <div className="h-full border-2 border-gray-300 border-opacity-60 rounded-lg shadow-md overflow-hidden">
                    <div className='absolute top-10 right-10 bg-slate-100 p-2  rounded'>
                        <IoMdHeartEmpty size={30} />
                    </div>
                    <img className="lg:h-96 md:h-36 w-full object-cover object-center" src={product.picture} alt="blog" />
                    <div className="p-2">
                        <h1 className="title-font text-lg font-bold text-gray-900  uppercase px-2">{product.name}</h1>
                        <div className="flex items-center justify-between py-6 px-2">
                            <div className='flex'>
                                <p className='bg-black text-white px-2 flex justify-center items-center '>
                                    {product.rating} <AiFillStar className='ml-2' size={20} />
                                </p>
                                <p className='ml-2 text-xl'>24 review</p>
                            </div>
                            <p className='font-bold text-xl text-black'>
                                $ {product.price}
                            </p>
                        </div>
                    </div>
            </div>

        </div>
    )
}

export default Product;
