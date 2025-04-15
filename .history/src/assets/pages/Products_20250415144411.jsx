import React, { useState, useMemo } from "react";
import { useProduct } from "../Context/Productcontext";
import Navbar from "../components/navbar";
import { useSearch } from "../Context/SearchContext";

const Products = () => {
  const { products } = useProduct();
  const { search } = useSearch();
//   const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("none");

  const filtered = useMemo(() => {
    let result = products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );

    if (category !== "all") {
        if (category === "bridal") {
            result = result.filter((p) => p.categories.toLowerCase() === "bridal");
          } else if (category === "Casuals") {
            result = result.filter((p) => p.categories.toLowerCase() !== "bridal");
          }
    }

    if (sortOrder === "low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    const unique = Array.from(new Map(result.map((p) => [p.id, p])).values());
    return unique;
  }, [products, search, category, sortOrder]);

  return (
    <>
    <Navbar/>
    <div className="p-4">
       
      <h2 className="text-xl font-bold mb-4">Collection</h2>
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          value={search}
          onChange={(e) => setSearc(e.target.value)}
          placeholder="Search"
          className="border p-2 rounded w-full sm:w-auto"
        />
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded"
          defaultValue="all"
        >
          <option value="all">All</option>
          <option value="bridal">Bridal</option>
          <option value="Casuals">Casuals</option>
        </select>
        <select
          onChange={(e) => setSortOrder(e.target.value)}
          className="border p-2 rounded"
          defaultValue="none"
        >
          <option value="none">Sort</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filtered.map((product) => (
          <div
            key={product.id}
            className="p-2 rounded shadow-md bg-white transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
            style={{ minHeight: "350px" }}
          >
            <img
              src={product.images}
              alt={product.name}
              className="w-full h-90 object-cover rounded"
            />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-700">₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Products;
