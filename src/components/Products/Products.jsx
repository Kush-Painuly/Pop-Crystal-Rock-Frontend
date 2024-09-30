import React, { useState } from "react";
import Cards from "./inner-components/Cards";

const Products = () => {
  return (
    <>
      <div className="px-20 py-24">
        <h2 className="capitalize text-4xl text-gray-700 font-bold text-center">
          All Products
        </h2>
        <div className="pt-12 flex items-center justify-start gap-16">
          <div>
            <label htmlFor="filter" className="text-gray-400 font-medium">
              Filter:
            </label>
            <select id="filter" className="text-gray-700 font-bold ml-2">
              <option value="all">All Products</option>
            </select>
          </div>
          <div>
            <label htmlFor="sort" className="text-gray-400 font-medium">
              Sort:
            </label>
            <select id="sort" className="text-gray-700 font-bold ml-2">
              <option value="best-selling">Best Selling</option>
            </select>
          </div>
        </div>
        <Cards isFirstSet={true} />
        <Cards isFirstSet={false} />

        <div className="text-center pt-20">
          <button
            type="button"
            className="px-6 py-2 border-2 border-blue-500 rounded-2xl bg-transparent text-blue-500 font-medium capitalize"
          >
            View All
          </button>
        </div>
      </div>
    </>
  );
};

export default Products;
