import React from "react";

// Sample categories
const categories = [
  {
    img: "https://img.freepik.com/free-photo/closeup-shot-cool-looking-afro-american-girl-posing-with-some-shopping-bags_181624-45777.jpg",
    name: "Women Fashion",
  },
  {
    img: "https://img.freepik.com/free-photo/happy-beautiful-couple-posing-with-shopping-bags-violet_496169-2215.jpg",
    name: "Couple Style",
  },
  {
    img: "https://img.freepik.com/free-photo/medium-shot-man-holding-megaphone_23-2149220703.jpg",
    name: "Men Fashion",
  },
  {
    img: "https://img.freepik.com/free-photo/young-teen-woman-sunglasses-hat-holding-shopping-bags-her-hands-feeling-so-happiness-isolated-green-wall_231208-2681.jpg",
    name: "Teen Fashion",
  },
];

const ProductCategory = () => {
  return (
    <div className="py-10 px-4 md:px-20 bg-gray-50">
      <h2 className="text-center text-2xl md:text-3xl font-extrabold text-gray-800 mb-6">
        Product Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4  gap-3 md:gap-8">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 w-full h-16 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
              <span className="text-white font-semibold">{cat.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
