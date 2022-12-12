import React, { useState } from 'react'
import { useRef } from 'react';

function CheckOut({ itemsPrice }) {
  const [bkash, setBkash] = useState(false)
  const [nagad, setNagad] = useState(false)
  const [rocket, setRocket] = useState(false)

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = emailRef.current.value
    const password = passwordRef.current.value
    // const password = passwordRef.current.value
    // const password = passwordRef.current.value
    // const password = passwordRef.current.value
    // const password = passwordRef.current.value

    alert(email + ' ' + password);
  };
  return (
    <div className=''>
      <div className='bg-white mt-2 flex justify-between items-center'>
        <p className='text-4xl font-bold text-pink-500 px-10 py-2'>Checkout</p>
        <p className='text-md font-semibold px-24 py-2'> Your Total Shopping cost :
          <span className='px-4 rounded py-1 font-bold text-orange-300 bg-black mx-4 text-xl'>{itemsPrice}</span> Tk </p>
      </div>
      <h1 className='text-3xl px-20 py-6'>Shipping Details</h1>
      <form onSubmit={handleSubmit} className='flex justify-between w-full px-4'>
        <div className='px-8 w-3/4 mb-8'>
          <div className='p-5 bg-white rounded-md'>
            <label htmlFor="email" className='block text-md font-bold'>Contact Information</label>
            <label htmlFor="email" className='block py-2'>Email</label>
            <input id="email" type="text" className='w-96 border rounded-md py-1 px-4' ref={emailRef} />
          </div>
          <div className='p-5 bg-white rounded-md mt-8 py-4' >
            <h1 className='text-md font-bold'>Shipping Adress</h1>
            <div>
              <div className='flex items-center'>
                <div className='mr-4'>
                  <label htmlFor="password" className='block py-2'>Full Name</label>
                  <input className='w-60 border rounded-md py-1 px-4' id="password" type="password" ref={passwordRef} />
                </div>
                <div>
                  <label htmlFor="password" className='block py-2'>Nick Name</label>
                  <input className='w-60 border rounded-md py-1 px-4' id="password" type="password" ref={passwordRef} />
                </div>
              </div>
              <div>
                <label htmlFor="password" className='block py-2'>Address</label>
                <input className='w-3/4 border rounded-md py-1 px-4' id="password" type="password" ref={passwordRef} />
              </div>
              <div className='flex'>
                <div className='mr-4'>
                  <label htmlFor="password" className='block py-2'>City</label>
                  <input className='w-60 border rounded-md py-1 px-4' id="password" type="password" ref={passwordRef} />
                </div>
                <div>
                  <label htmlFor="password" className='block py-2'>Post Office</label>
                  <input className='w-60 border rounded-md py-1 px-4' id="password" type="password" ref={passwordRef} />
                </div>
                <div className='ml-4'>
                  <label htmlFor="password" className='block py-2'>House Name</label>
                  <input className='w-60 border rounded-md py-1 px-4' id="password" type="password" ref={passwordRef} />
                </div>
              </div>
            </div>
            <div className='flex items-center'>
              <div className='mr-4'>
                <label htmlFor="password" className='block py-2'>Phone No</label>
                <input className='w-60 border rounded-md py-1 px-4' id="password" type="phone" ref={passwordRef} />
              </div>
              <div>
                <label htmlFor="password" className='block py-2'>Ext. Phone No</label>
                <input className='w-60 border rounded-md py-1 px-4' id="password" type="phone" ref={passwordRef} />
              </div>
            </div>
          </div>


        </div>
        <div className='w-1/4 bg-white px-4 py-5'>
          <h1 className='font-bold pb-4'>Order Summary</h1>
          <div className='flex justify-between'>
            <p className='text-sm'>Products Sub Quantity :</p>
            <p className='pr-8 text-sm font-semibold'>152 TK</p>
          </div>
          <div className='flex justify-between'>
            <p className='text-sm'>Products Sub Total :</p>
            <p className='pr-8 text-sm font-semibold'>152 TK</p>
          </div>
          <div className='flex justify-between'>
            <p className='text-sm'>Delivery Fee :</p>
            <p className='pr-8 text-sm font-semibold'>152 TK</p>
          </div>
          <div className='flex justify-between pb-3'>
            <p className='text-sm'>Estimated Taxes :</p>
            <p className='pr-8 text-sm font-semibold'>00 TK</p>
          </div>
          <hr />
          <div className='flex justify-between py-2'>
            <p className='text-sm'>Estimated Total :</p>
            <p className='pr-8 text-sm font-semibold'>15800 TK</p>
          </div>
          <p className='pb-4 pt-8 font-bold'>Select Your Payment Method</p>
          <div className='flex justify-between py-5'>
            <p onClick={()=>setBkash(!bkash)} type="" className="border">
              <img className='w-20 h-20' src="https://www.logo.wine/a/logo/BKash/BKash-Icon2-Logo.wine.svg" alt="" />
            </p>
            <p onClick={()=>setNagad(!nagad)} type="" className='border'>
              <img className='w-20 h-20' src="https://www.logo.wine/a/logo/Nagad/Nagad-Logo.wine.svg" alt="" />
            </p>
            <p onClick={()=>setRocket(!rocket)} type="" className='border'>
              <img className='w-20 h-20' src="https://seeklogo.com/images/D/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo.com.png" alt="" />
            </p>
          </div>
         {!bkash && nagad && rocket ? <div>
          <p className='text-sm'>Our BKash Payment No :
            <span className='text-xl font-bold px-2'>01905243744</span>
          </p>
          <div className='py-2'>
            <label htmlFor="email" className='block text-md font-bold py-2'>Your Bkash payment no</label>
            <input id="email" type="text" className='border w-full py-1 px-4' ref={emailRef} />
          </div>
          <div className='py-2'>
            <label htmlFor="email" className='block text-md font-bold py-2'>Transaction Id</label>
            <input id="email" type="text" className='border w-full py-1 px-4' ref={emailRef} />
          </div>
          </div>:""}
         {!nagad &&rocket && bkash ? <div>
          <p className='text-sm'>Our Nagad Payment No :
            <span className='text-xl font-bold px-2'>01905243744</span>
          </p>
          <div className='py-2'>
            <label htmlFor="email" className='block text-md font-bold py-2'>Your Nagad payment no</label>
            <input id="email" type="text" className='border w-full py-1 px-4' ref={emailRef} />
          </div>
          <div className='py-2'>
            <label htmlFor="email" className='block text-md font-bold py-2'>Transaction Id</label>
            <input id="email" type="text" className='border w-full py-1 px-4' ref={emailRef} />
          </div>
          </div>:""}
         {!rocket && nagad && bkash ?  <div>
          <p className='text-sm'>Our Rocket Payment No :
            <span className='text-xl font-bold px-2'>01905243744</span>
          </p>
          <div className='py-2'>
            <label htmlFor="email" className='block text-md font-bold py-2'>Your Rocket payment no</label>
            <input id="email" type="text" className='border w-full py-1 px-4' ref={emailRef} />
          </div>
          <div className='py-2'>
            <label htmlFor="email" className='block text-md font-bold py-2'>Transaction Id</label>
            <input id="email" type="text" className='border w-full py-1 px-4' ref={emailRef} />
          </div>
          </div>:""}
          <div className='flex justify-center py-4'>
            <button className='bg-pink-400 text-md px-4 rounded-3xl py-2 font-semibold text-white uppercase' type="submit">Continue</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CheckOut
