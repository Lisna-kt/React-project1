import React, { useState } from "react";
import { useProduct } from "../Context/";

const ProductPage = () => {
  const { products } = useProduct();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("none");

  const filtered = products
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter(p => category === "all" || p.categories === category)
    .sort((a, b) => {
      if (sortOrder === "low") return a.price - b.price;
      if (sortOrder === "high") return b.price - a.price;
      return 0;
    });

  const uniqueProducts = Array.from(new Map(filtered.map(p => [p.id, p])).values());

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Collection</h2>
      <div className="flex gap-4 mb-6">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className="border p-2"
        />
        <select onChange={(e) => setCategory(e.target.value)} className="border p-2">
          <option value="all">All</option>
          <option value="women">Women</option>
          <option value="men">Men</option>
        </select>
        <select onChange={(e) => setSortOrder(e.target.value)} className="border p-2">
          <option value="none">Sort</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {uniqueProducts.map((product) => (
          <div key={product.id} className="border p-2 rounded shadow">
            <img src={product.images} alt={product.name} className="w-full h-48 object-cover" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p>₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
