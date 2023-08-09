import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

function AddProduct() {
  const { register, handleSubmit, reset } = useForm();
  const [disableBtn, setDisableBtn] = useState(false);
  console.log(disableBtn);
  const imageStorageKey = "1b2c7037c7c3024a88877acb8b2cd8fd";

  const onSubmit = (data) => {
    const image = data.picture[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setDisableBtn(true);

          const img = result.data.url;
          const productData = {
            brand: data.brand,
            categoty: data.category,
            description: data.description,
            name: data.name,
            price: data.price,
            quantity: data.quantity,
            rating: data.rating,
            picture: img,
          };
          fetch("https://aziza-fashion-world.onrender.com/api/product", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(productData),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.result?.insertedId) {
                setDisableBtn(true);
                toast.success("Successfully Added Product");
                reset();
              }
            });
        }
      });
  };

  return (
    <div className="md:mx-20 px-5 md:my-6">
      <h1 className="text-4xl font-semibold py-8 pl-14">Add Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          required
          className="border my-2 py-2 px-4 block w-80 rounded-lg"
          placeholder="Name"
          {...register("name")}
        />
        <input
          className="border my-2 py-2 px-4 block w-80 rounded-lg"
          placeholder="Price"
          {...register("price")}
        />
        <textarea
          required
          className="border my-2 py-2 px-4 block w-80 h-28 rounded-lg"
          placeholder="Description"
          {...register("description")}
        />
        <input
          required
          className="border my-2 py-2 px-4 block w-80 rounded-lg"
          placeholder="Brand"
          {...register("brand")}
        />
        <input
          required
          className="border my-2 py-2 px-4 block w-80 rounded-lg"
          placeholder="Quantity"
          {...register("quantity")}
        />
        <input
          required
          type="file"
          className="file-input file-input-bordered  w-full max-w-xs"
          {...register("picture")}
        />
        <select
          className="select w-full max-w-xs my-2 block"
          {...register("categoty")}
        >
          <option disabled defaultValue>
            Category
          </option>
          <option value="jewellery">Jewellery</option>
          <option value="cloth">Cloth</option>
        </select>
        <input
          required
          className="border my-2 py-2 px-4 block w-80 rounded-lg"
          placeholder="Rating"
          {...register("rating")}
        />
        <input
          required
          disabled={disableBtn}
          className="border cursor-pointer bg-blue-300 w-80 py-2 rounded-lg shadow-sm my-1"
          type="submit"
        />
      </form>
    </div>
  );
}

export default AddProduct;
