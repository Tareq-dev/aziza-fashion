import React from 'react'
import { Link, Outlet } from 'react-router-dom'




function Dashboard() {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
         <Outlet></Outlet>
         <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-48 bg-pink-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><Link className='py-2 my-1' to="/dashboad">Dashboard</Link></li>
            <li><Link className='py-2 my-1' to="/dashboad/add-product" >Add Product</Link></li>
            <li><Link className='py-2 my-1' to="/dashboad/manage-product" >Manage Product</Link></li>
            <li><Link className='py-2 my-1' to="/dashboad/pending-order" >Pending Order</Link></li>
            <li><Link className='py-2 my-1' to="/dashboad/delivered-order" >Delivered Order</Link></li>
            <li><Link className='py-2 my-1' to="/dashboad/customers" >All Customer</Link></li>
            <li><Link className='py-2 my-1' to="/dashboad/review" >Manage Review</Link></li>
            <li><Link className='py-2 my-1' to="/dashboad/admin" >All Admin</Link></li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Dashboard
