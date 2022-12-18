import React from 'react'
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';


function AddProduct() {
    const { register, handleSubmit } = useForm();


    const onSubmit = data => {
        fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {

                if (data.insertedId) {
                    toast.success('Product added!', {
                        position: "top-center",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });;
                }
            });
    }

    return (
        <div className='mx-20 my-6'>
            <h1 className='text-4xl font-semibold py-8 pl-14'>Add Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input required className='border my-2 py-2 px-4 block w-80 rounded-lg' placeholder='Name' {...register("name")} />
                <input className='border my-2 py-2 px-4 block w-80 rounded-lg' placeholder='Price' {...register("price")} />
                <textarea required className='border my-2 py-2 px-4 block w-80 h-28 rounded-lg' placeholder='Description' {...register("description")} />
                <input required className='border my-2 py-2 px-4 block w-80 rounded-lg' placeholder='Brand' {...register("brand")} />
                <input required className='border my-2 py-2 px-4 block w-80 rounded-lg' placeholder='Quantity' {...register("quantity")} />
                <input required type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs" {...register("picture")} />
                {/* <input  className='border my-2 py-2 px-4 block' placeholder='Picture'  /> */}
                <input required className='border my-2 py-2 px-4 block w-80 rounded-lg' placeholder='Rating' {...register("rating")} />
                <input required className='border bg-blue-200 w-80 py-2 rounded-lg shadow-sm my-1' type="submit" />
            </form>
        </div>
    )
}

export default AddProduct
