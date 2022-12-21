import React from 'react'
import { useNavigate } from 'react-router-dom';
import { BsInfoCircle } from 'react-icons/bs';

function Product({ product, addToCard }) {
    const navigate = useNavigate()
    const singleProduct = (id) => {
        navigate(`/singleProduct/${id}`);
    }
    // const ratingChanged = (newRating) => {
    //     console.log(newRating)
    // }

    return (
        <div className="md:px-4 px-1 my-2 py-2 border bg-white border-gray-200 shadow-md rounded-md relative">
            <div className='absolute cursor-pointer md:top-4 md:right-4 top-2 right-2 border-l-4 border-l-red-500  bg-pink-400 text-white text-md px-2 py-1 rounded font-semibold'>
                <button onClick={() => addToCard(product)}>Add to card</button>
            </div>
            <img className="border rounded-md h-48" src={product.picture} alt="" />
            <div>
                <div className="">
                    <h4 className="title-font text-lg text-black ">{product.name}</h4>

                    <div className='flex justify-between px-2'>
                        <div>
                            <p className='font-bold text-md text-black'>
                                TK {product.price}
                            </p>
                            <p className='text-xs font-semibold text-pink-500'>{product.rating} Review</p>
                            {/* <ReactStars className=''
                                count={5}
                                onChange={ratingChanged}
                                size={20}
                                color2={'#ffd700'} /> */}
                        </div>
                        <div className='flex justify-center items-center'>
                        <button onClick={() => singleProduct(product._id)} className='text-pink-500 px-2'>
                            <BsInfoCircle size={20} />
                            {/* {product.rating} 
                                <AiFillStar className='ml-2' size={20} /> */}
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
