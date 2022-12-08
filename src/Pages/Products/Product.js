import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IoMdHeartEmpty } from 'react-icons/io';

function Product({ product, addToCard}) {
    const navigate = useNavigate()
    const singleProduct = (id) => {
        navigate(`/singleProduct/${id}`);
    }
    return (
        <div className="px-4 py-2 border bg-white border-gray-200 shadow-md rounded-md relative">
            <div className='absolute top-4 right-6 bg-slate-100 p-2 rounded'>
                <IoMdHeartEmpty onClick={() => addToCard(product)} size={24} />
            </div>
            <img className="border rounded-md h-56" src={product.picture} alt="" />
            <div>
                <div className="p-2">
                    <h1 className="title-font text-lg font-bold text-gray-900  uppercase px-2">{product.name}</h1>
                    <div className="flex items-center justify-between py-6 px-2">
                        <div className='flex'>
                            <p onClick={() => singleProduct(product._id)} className='bg-black text-white px-2 flex justify-center items-center '>
                                Details
                                {/* {product.rating} 
                                <AiFillStar className='ml-2' size={20} /> */}
                            </p>
                            <p className='ml-2 text-xl'>24 review</p>
                        </div>
                        <p className='font-bold text-xl text-black'>
                            TK {product.price}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
