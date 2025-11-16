import React from "react";
import { Link, useLocation } from "react-router-dom";

const ProductDetails = () => {
  const { state } = useLocation();

  return (
    <div>
    
        <Link className='bg-green-400 px-3 py-1 rounded-xl' to={'/'}>Go to Home</Link>
      {state ? (
        <div className="lg:w-1/4 md:w-1/2 p-4 mx-auto border">
          <div className="h-60">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              src={state.images?.[0]}
            />
          </div>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              {state.category}
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              {state.title}
            </h2>
            <p className="mt-1">${state.price}</p>
          </div>
        </div>
      ) : (
        <p>Product Not Found</p>
      )}
    </div>
  );
};

export default ProductDetails;
