import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function CheckOut({ itemsPrice, itemsQty, data, cart }) {
  const { emailRef, fullNameRef, nickNameRef, adressRef, cityRef, postRef, houseNameRef, phoneNoRef, extPhoneRef, rocketPaymentNoRef, rocketTrxIdRef } = data;
  const [active, setActive] = useState("bkash")
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = emailRef.current.value
    const fullName = fullNameRef.current.value
    const nickName = nickNameRef.current.value
    const adress = adressRef.current.value
    const city = cityRef.current.value
    const post = postRef.current.value
    const houseName = houseNameRef.current.value
    const phoneNo = phoneNoRef.current.value
    const extPhone = extPhoneRef.current.value
    const bkashPaymentNo = rocketPaymentNoRef.current.value
    const bkashTrxId = rocketTrxIdRef.current.value
    const nagadPaymentNo = rocketPaymentNoRef.current.value
    const nagadTrxId = rocketTrxIdRef.current.value
    const rocketPaymentNo = rocketPaymentNoRef.current.value
    const rocketTrxId = rocketTrxIdRef.current.value
    let data;

    if (active === "bkash") {
      data = {
        email,
        fullName,
        nickName,
        adress,
        city, post, houseName, phoneNo, extPhone, itemsPrice, itemsQty, bkashPaymentNo, bkashTrxId, cart
      }
    }
    if (active === "nagad") {
      data = {
        email,
        fullName,
        nickName,
        adress,
        city, post, houseName, phoneNo, extPhone, itemsPrice, itemsQty, nagadPaymentNo, nagadTrxId, cart
      }
    } if (active === "rocket") {
      data = {
        email,
        fullName,
        nickName,
        adress,
        city, post, houseName, phoneNo, extPhone, itemsPrice, itemsQty, rocketPaymentNo, rocketTrxId, cart
      }
    }

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {

        if (data.insertedId) {
          navigate(`/preview`);
        }
      });
  };

  const activeClass = "bg-[#bfdbfe]";


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
            <input required type="email" className='w-96 border rounded-md py-1 px-4' ref={emailRef} />
          </div>
          <div className='p-5 bg-white rounded-md mt-8 py-4' >
            <h1 className='text-md font-bold'>Shipping Adress</h1>
            <div>
              <div className='flex items-center'>
                <div className='mr-4'>
                  <label htmlFor="password" className='block py-2'>Full Name</label>
                  <input required className='w-60 border rounded-md py-1 px-4' type="text" ref={fullNameRef} />
                </div>
                <div>
                  <label htmlFor="password" className='block py-2'>Nick Name</label>
                  <input required className='w-60 border rounded-md py-1 px-4' type="text" ref={nickNameRef} />
                </div>
              </div>
              <div>
                <label htmlFor="password" className='block py-2'>Address</label>
                <input required className='w-3/4 border rounded-md py-1 px-4' type="text" ref={adressRef} />
              </div>
              <div className='flex'>
                <div className='mr-4'>
                  <label htmlFor="password" className='block py-2'>City</label>
                  <input required className='w-60 border rounded-md py-1 px-4' type="text" ref={cityRef} />
                </div>
                <div>
                  <label htmlFor="password" className='block py-2'>Post Office</label>
                  <input required className='w-60 border rounded-md py-1 px-4' type="text" ref={postRef} />
                </div>
                <div className='ml-4'>
                  <label htmlFor="password" className='block py-2'>House Name</label>
                  <input required className='w-60 border rounded-md py-1 px-4' type="text" ref={houseNameRef} />
                </div>
              </div>
            </div>
            <div className='flex items-center'>
              <div className='mr-4'>
                <label htmlFor="password" className='block py-2'>Phone No</label>
                <input required className='w-60 border rounded-md py-1 px-4' type="phone" ref={phoneNoRef} />
              </div>
              <div>
                <label htmlFor="password" className='block py-2'>Ext. Phone No</label>
                <input required className='w-60 border rounded-md py-1 px-4' type="phone" ref={extPhoneRef} />
              </div>
            </div>
            <div className='flex py-8'>
              <div>
                <input id="draft" className="peer/draft" type="radio" name="status" defaultChecked />
                <label htmlFor="draft" className="peer-checked/draft:text-sky-500 px-2">Inside Dhaka</label>
              </div>
              <div className='px-20'>
                <input id="published" className="peer/published" type="radio" name="status" />
                <label htmlFor="published" className="peer-checked/published:text-sky-500 px-2">Outside Dhaka</label>
              </div>
            </div>
          </div>


        </div>
        <div className='w-1/4 bg-white px-4 py-5'>
          <h1 className='font-bold pb-4'>Order Summary</h1>
          <div className='flex justify-between'>
            <p className='text-sm'>Products Sub Quantity :</p>
            <p className='pr-8 text-sm font-semibold'>{itemsQty} {itemsQty === 1 ? "item" : "items"}</p>
          </div>
          <div className='flex justify-between'>
            <p className='text-sm'>Products Sub Total :</p>
            <p className='pr-8 text-sm font-semibold'>{itemsPrice} Tk</p>
          </div>
          <div className='flex justify-between'>
            <p className='text-sm'>Delivery Fee :</p>
            <p className='pr-8 text-sm font-semibold'>00 TK</p>
          </div>
          <div className='flex justify-between pb-3'>
            <p className='text-sm'>Estimated Taxes :</p>
            <p className='pr-8 text-sm font-semibold'>00 TK</p>
          </div>
          <hr />
          <div className='flex justify-between py-2'>
            <p className='text-sm py-2'>Estimated Total :</p>
            <p className='pr-4 text-xl font-semibold'>{itemsPrice} TK</p>
          </div>
          <p className='pb-4 pt-8 font-bold'>Select Your Payment Method</p>
          <div className='flex justify-between py-5'>
            <p onClick={() => setActive("bkash")} type="" className={active === "bkash" ? activeClass : undefined}>
              <img className='w-20 h-20' src="https://www.logo.wine/a/logo/BKash/BKash-Icon2-Logo.wine.svg" alt="" />
            </p>
            <p onClick={() => setActive("nagad")} type="" className={active === "nagad" ? activeClass : undefined}>
              <img className='w-20 h-20' src="https://www.logo.wine/a/logo/Nagad/Nagad-Logo.wine.svg" alt="" />
            </p>
            <p onClick={() => setActive("rocket")} type="" className={active === "rocket" ? activeClass : undefined}>
              <img className='w-20 h-20 p-3' src="https://seeklogo.com/images/D/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo.com.png" alt="" />
            </p>
          </div>
          {active === "bkash" &&
            <div className='bg-[#DF146E] p-4 text-white'>
              <p className='text-sm'>BKash Payment No :</p>
              <p className='text-xl font-bold'>0190XXXXXXXX</p>

              <div className='pb-2'>
                <label htmlFor="email" className='block text-md font-bold py-2'>Your Bkash payment no</label>
                <input required type="text" className='border w-full py-1 px-4 text-black' ref={rocketPaymentNoRef} />
              </div>
              <div className='py-2'>
                <label htmlFor="email" className='block text-md font-bold py-2'>Transaction Id</label>
                <input required id="email" type="text" className='border w-full py-1 px-4 text-black' ref={rocketTrxIdRef} />
              </div>
            </div>


          }
          {active === "nagad" &&
            <div className='bg-[#f7941d] p-4'>
              <p className='text-sm'>Nagad Payment No :</p>
              <p className='text-xl font-bold'>0190XXXXXXXX</p>
              <div className='pb-2'>
                <label htmlFor="email" className='block text-md font-bold py-2'>Your Nagad payment no</label>
                <input required id="email" type="text" className='border w-full py-1 px-4 text-black' ref={rocketPaymentNoRef} />
              </div>
              <div className='py-2'>
                <label htmlFor="email" className='block text-md font-bold py-2'>Transaction Id</label>
                <input required id="email" type="text" className='border w-full py-1 px-4 text-black' ref={rocketTrxIdRef} />
              </div>
            </div>
          }
          {active === "rocket" &&
            <div className='bg-[#8c3494] p-4 text-white'>
              <p className='text-sm'>Rocket Payment No :</p>
              <p className='text-xl font-bold'>0190XXXXXXXX</p>

              <div className='py-2'>
                <label htmlFor="email" className='block text-md font-bold pb-2'>Your Rocket payment no</label>
                <input required id="email" type="text" className='border w-full py-1 px-4 text-black' ref={rocketPaymentNoRef} />
              </div>
              <div className='py-2'>
                <label htmlFor="email" className='block text-md font-bold py-2'>Transaction Id</label>
                <input required id="email" type="text" className='border w-full py-1 px-4 text-black' ref={rocketTrxIdRef} />
              </div>
            </div>

          }
          <div className='flex justify-center py-4'>
            <button className='bg-pink-600 text-sm px-4 rounded-3xl py-2 font-semibold text-white uppercase' type="submit">Continue</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CheckOut
