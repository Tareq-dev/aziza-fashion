import React from 'react'
import {  NavLink, Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
        <div className='pt-4 flex justify-end px-4'>
        <label htmlFor="my-drawer-2" className="bg-white px-2 py-1 font-bold rounded-xl shadow-md drawer-button lg:hidden">Open Admin drawer</label>
        </div>
         <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-48 bg-pink-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><NavLink className='py-2 my-1' to="/dashboad">Dashboard</NavLink></li>
            <li><NavLink className='py-2 my-1' to="/dashboad/add-product" >Add Product</NavLink></li>
            <li><NavLink className='py-2 my-1' to="/dashboad/manage-product" >Manage Product</NavLink></li>
            <li><NavLink className='py-2 my-1' to="/dashboad/pending-order" >Pending Order</NavLink></li>
            <li><NavLink className='py-2 my-1' to="/dashboad/delivered-order" >Delivered Order</NavLink></li>
            <li><NavLink className='py-2 my-1' to="/dashboad/customers" >All Customer</NavLink></li>
            <li><NavLink className='py-2 my-1' to="/dashboad/review" >Manage Review</NavLink></li>
            <li><NavLink className='py-2 my-1' to="/dashboad/admin" >All Admin</NavLink></li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Dashboard
