import { useContext, useEffect, useState } from "react";
import { CartActionTypes } from "../reducers/CartReducer";
import type { Product } from "../models/Product";
import { CartContext } from "../contexts/CartContext";

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { dispatch } = useContext(CartContext);

  // https://medieinstitutet-wie-products.azurewebsites.net/api/products
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(
        "https://medieinstitutet-wie-products.azurewebsites.net/api/products",
      );
      const products = await response.json();

      setProducts(products);
    };

    if (products.length > 0) return;

    getProducts();
  });

  return (
    <>
      <div>
        {products.map((p) => (
          <div key={p.name}>
            <h2>{p.name}</h2>
            <span>{p.price}</span>
            <button
              onClick={() =>
                dispatch({
                  type: CartActionTypes.ADDED,
                  payload: JSON.stringify(p),
                })
              }
            >
              Lägg i varukorg
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
