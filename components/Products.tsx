import Image from 'next/image'
import { EXPLORE_PRODUCTS } from '../constants/index';
import React from 'react'


const Products = () => {
  

  return (
    <div className=" max-container  padding-container py-12">
      
      <h2 className="text-center text-4xl font-bold mb-6">Explore Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {EXPLORE_PRODUCTS.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg hover:shadow-2xl hover:border-blue-500 transition duration-300">
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={100}
              className="rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mt-4 mb-2">{product.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products
