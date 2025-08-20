import { useReducer, useState } from "react";
import { CartActionTypes, CartReducer } from "../reducers/CartReducer";
import type { Product } from "../models/Product";

export const Products = () => {
  const [cart, dispatch] = useReducer(CartReducer, []);
  const [products, setProducts] = useState<Product[]>([
    {
      name: "Golfboll",
      price: 100,
      imageUrl: "",
      description: "Lorem ipsum",
    },
    {
      name: "Fotboll",
      price: 400,
      imageUrl: "",
      description: "dolor sit amet",
    },
  ]);

  const increase = (productName: string) => {
    dispatch({
      type: CartActionTypes.INCREASED,
      payload: productName,
    });
  };

  const decrease = (productName: string) => {
    dispatch({
      type: CartActionTypes.DECREASED,
      payload: productName,
    });
  };

  return (
    <>
      <ul>
        {cart.map((ci) => (
          <li key={ci.product.name}>
            <button
              onClick={() => decrease(ci.product.name)}
              disabled={ci.amount === 1}
            >
              -
            </button>
            {ci.product.name} - {ci.amount}
            <button onClick={() => increase(ci.product.name)}>+</button>
            <button
              onClick={() =>
                dispatch({
                  type: CartActionTypes.REMOVED,
                  payload: ci.product.name,
                })
              }
            >
              Ta bort
            </button>
          </li>
        ))}
      </ul>
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
