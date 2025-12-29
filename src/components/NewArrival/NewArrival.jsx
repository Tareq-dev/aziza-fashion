import React from "react";
import { Link } from "react-router-dom";
import shopping from "../../images/shopping-bags.png";

const products = [
  "https://i.ibb.co/0tDpxF9/1.png",
  "https://i.ibb.co/42hfL02/2.png",
  "https://i.ibb.co/h7Dh827/3.png",
  "https://i.ibb.co/mvzYxkX/4.png",
  "https://i.ibb.co/HLZpQPD/5.png",
  "https://i.ibb.co/hZkHCFg/6.png",
];

function NewArrival() {
  return (
    <div className="md:py-20 py-8 px-4 md:px-20 bg-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-6 md:pb-12">
        <div>
          <h2 className="font-bold text-3xl md:text-4xl text-gray-800">
            New Arrival
          </h2>
          <p className="text-gray-500 mt-2 md:mt-3">
            Check out the latest trending products in our collection
          </p>
        </div>
        <Link
          to="/products"
          className="mt-4 md:mt-0 md:block hidden font-semibold text-pink-500 hover:text-pink-600 transition-colors"
        >
          VIEW Cloths
        </Link>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-4 gap-6">
        {/* Left Big Image */}
        <div className="col-span-1 hidden md:flex items-center justify-center">
          <img
            className="rounded-xl w-full h-full object-cover"
            src={shopping}
            alt="New Arrival"
          />
        </div>

        {/* Right Grid Images */}
        <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            >
              <img
                className="w-full h-48 object-cover"
                src={img}
                alt={`Product ${idx + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewArrival;
