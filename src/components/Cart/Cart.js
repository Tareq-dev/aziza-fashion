import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Cart({ cart, addToCard, onRemoveItem, onRemoveCart }) {

    const [check, setCheck] = useState(false)
    const itemsPrice = cart.reduce((a, c) => a + c.quantity * c.price, 0);



    return (
        <div className='py-24 px-20'>
            <h1 className='text-4xl pb-4'>Shopping Cart</h1>

            <hr />
            <div className='py-4'>
                {cart.length === 0 && <div className='text-3xl text-center py-24'>Cart is empty!!</div>}
                {cart.map(item => (
                    <div item={item} key={item._id} className='flex h-20 items-center px-6 py-14 my-4 bg-white  rounded-md'>
                        <img className='w-20 h-16' src={item.picture} alt="" />
                        <p className='w-48 px-6 font-semibold'>{item.name}</p>
                        <div className='px-0 text-center'>
                            <p className='font-semibold py-2'>Price</p>
                            <p>TK {item.price}</p>
                        </div>
                        <div className='px-14 text-center'>
                            <p className='font-semibold py-2'>QTY</p>
                            <div className='flex justify-between items-center'>
                                <button onClick={() => onRemoveItem(item)} className='mx-10 h-8 w-8 cursor-pointer text-xl font-bold bg-slate-200 rounded-full'>-</button>
                                <p> {item.quantity}</p>
                                <button onClick={() => addToCard(item)} className='mx-10 h-8 w-8 cursor-pointer text-xl font-bold bg-slate-200 rounded-full'> +</button>
                            </div>
                        </div>
                        <div className='px-20 text-center'>
                            <p className='font-semibold py-2'>Total</p>
                            <p>Tk {item.quantity * item.price} </p>
                        </div>
                        <button onClick={() => onRemoveCart(item)} className='px-20 text-center text-red-400'>Remove</button>
                    </div>
                ))}
            </div>
            <hr />
            <div className='bg-white py-4 flex justify-center items-center'>
                <p className='text-end uppercase text-xl'>Subtotal :</p>
                <p className='text-2xl font-bold ml-10'>{itemsPrice} TK</p>

            </div>
            <div className='flex justify-center items-center mt-5'>
                <div onClick={() => setCheck(!check)} className='w-6 h-6 bg-white border'>
                    {check === true && <span className="p-1">&#10003;</span>}
                </div>
                <p className='ml-2'>I agree term & conditions</p>
            </div>
            <div className='flex justify-center items-center py-4'>
                {cart.length ? <button disabled className='bg-orange-400 p-2 font-semibold  text-white rounded-md' type="">
                    <Link to={check && "/"}>CHECKOUT</Link>
                </button> : ""}
            </div>
        </div>
    )
}

export default Cart
