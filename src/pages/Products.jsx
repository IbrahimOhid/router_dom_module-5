import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const Products = () => {
  const { productData } = useContext(ProductContext);
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-center font-bold mb-5 underline">All Products</h1>

          <div className="flex flex-wrap -m-4">
            {productData &&
              productData.length > 0 &&
              productData.map((product) => (
                <div
                  key={product.id}
                  className="lg:w-1/4 md:w-1/2 p-4 w-full border"
                >
                  <Link to={`/products/${product.id}`} state={product}>
                    <div className="block relative h-48 rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={product.images[0]}
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {product.category}
                      </h3>
                      <h2 className="text-blue-600 title-font text-lg font-medium">
                        {product.title}
                      </h2>
                      <p className="mt-1">${product.price}</p>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
