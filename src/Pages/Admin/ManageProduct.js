import React, { useState } from 'react'
import useProducts from '../../Hooks/useProducts'

function ManageProduct() {
  const [products] = useProducts([]);
  const [filterDelete, setFilterDelete] = useState([])


  const deleteProducts = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        const remaining = products.filter((product) => product._id !== id);
        // setFilterDelete(remaining);
      });
  }

console.log(filterDelete)













  return (
    <div className='mx-2 md:my-8'>
      <div className='bg-white mx-4 p-3'>
        <div className="overflow-x-auto">
          <h2 className="text-2xl text-center py-2 mb-2">Manage Products</h2>

          <div className='flex justify-center items-center mb-3 mx-auto'>
            <input type="text" placeholder="Search product ...." className="input input-bordered w-full max-w-xs block" />
            <button type="search" className='bg-blue-200 rounded-r-xl px-2 py-2 font-semibold'>Search</button>
          </div>
          <table className="table w-full">
            <thead>
              <tr>
                <th>Sl</th>
                <th>Name</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {products.map((pd, i) => (
                <tr key={pd._id} pd={pd}>
                  <th>{i + 1}</th>
                  <td>{pd.name}</td>
                  <td>{pd.price}</td>
                  <td>{pd.quantity}</td>
                  <td>
                    <button
                      onClick={() => deleteProducts(pd._id)}
                      className="btn btn-sm bg-red-500"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ManageProduct
