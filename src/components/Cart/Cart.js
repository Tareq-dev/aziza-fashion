import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CiSquareRemove } from 'react-icons/ci';


function Cart({ cart, addToCard, onRemoveItem, onRemoveCart, itemsPrice }) {
    const navigate = useNavigate();
    const [check, setCheck] = useState(false)
    const handleCheckOut = () => {
        navigate(`/checkout`);
    }

    return (
        <div className='md:py-24 md:px-20 py-4 px-4'>
            <h1 className='text-xl md:text-4xl pb-4'>Shopping Cart</h1>

            <hr />
            <div className='py-4 md:flex md:flex-col md:items-center'>
                {cart.length === 0 && <div className='text-3xl text-center py-24'>Cart is empty!!</div>}
                {cart.map(item => (
                    <div item={item} key={item._id} className='flex h-20 justify-between items-center md:w-1/2 md:px-6 px-6 py-14 my-4 bg-white  rounded-md'>
                        <div className='flex md:justify-between'>
                            <img className='w-20 h-20' src={item.picture} alt="" />
                            <div>
                                <p className='w-48 px-6 font-semibold'>{item.name}</p>
                                <p className='px-6 text-sm'>Price : {item.price} Tk</p>
                                <div className='md:px-4 text-center px-6'>
                                    <div className='flex items-center md:py-2'>
                                        <button onClick={() => onRemoveItem(item)} className='md:mx-2 md:h-7 md:w-7 h-5 w-5 cursor-pointer md:text-xl font-bold bg-slate-200 rounded-full flex items-center justify-center'>-</button>
                                        <p className='mx-2'> {item.quantity}</p>
                                        <button onClick={() => addToCard(item)} className='md:mx-4 md:h-7 md:w-7 h-5 w-5 cursor-pointer md:text-xl font-bold bg-slate-200 rounded-full flex items-center justify-center'> +</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="btn btn-sm bg-red-500 btn-circle">✕</div>

                    </div>
                ))}
            </div>
            <hr />
            <div className='bg-white py-4 flex justify-center items-center'>
                <p className='text-end uppercase text-xl'>Subtotal :</p>
                <p className='text-2xl font-bold ml-10'>{itemsPrice} TK</p>

            </div>
            {
                cart.length ? <div>
                    <div className='flex justify-center items-center mt-5'>
                        <div onClick={() => setCheck(!check)} className='w-6 h-6 bg-white border'>
                            {check === true && <span className="p-1">&#10003;</span>}
                        </div>
                        <p className='ml-2'>I agree term & conditions</p>
                    </div>
                    <div className='flex justify-center items-center py-4'>

                        <button disabled={!check} onClick={!check ? undefined : handleCheckOut} className='bg-orange-400 p-2 font-semibold  text-white rounded-md' type="" >
                            CHECKOUT
                        </button>

                    </div>
                </div> : ""
            }
        </div>
    )
}

export default Cart
