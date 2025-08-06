import React, { useState } from "react";

const tShirtData = [
  {
    id: 1,
    name: "Classic Black Tee",
    price: 499,
    image: "https://via.placeholder.com/200x250?text=Black+Tee",
  },
  {
    id: 2,
    name: "Graphic White Tee",
    price: 599,
    image: "https://via.placeholder.com/200x250?text=White+Tee",
  },
  {
    id: 3,
    name: "Vintage Blue Tee",
    price: 699,
    image: "https://via.placeholder.com/200x250?text=Blue+Tee",
  },
];

const TShirtPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTShirts =
    selectedCategory === "All"
      ? tShirtData
      : tShirtData.filter((item) =>
          item.name.toLowerCase().includes(selectedCategory.toLowerCase())
        );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">T-Shirts Collection</h1>
        <p className="text-gray-600 mt-2">Find your perfect style</p>
      </div>

      <div className="flex justify-end mb-4">
        <select
          className="p-2 border rounded"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Black">Black</option>
          <option value="White">White</option>
          <option value="Blue">Blue</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredTShirts.map((shirt) => (
          <div
            key={shirt.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition"
          >
            <img
              src={shirt.image}
              alt={shirt.name}
              className="w-full h-60 object-cover mb-4"
            />
            <h2 className="text-xl font-semibold">{shirt.name}</h2>
            <p className="text-green-600 font-medium">₹{shirt.price}</p>
            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TShirtPage;