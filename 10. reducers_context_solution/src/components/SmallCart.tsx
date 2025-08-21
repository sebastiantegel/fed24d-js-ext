import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { CartActionTypes } from "../reducers/CartReducer";

export const SmallCart = () => {
  const { cart, dispatch } = useContext(CartContext);

  return (
    <ul>
      {cart.map((ci) => (
        <li key={ci.product.name}>
          <button
            onClick={() =>
              dispatch({
                type: CartActionTypes.DECREASED,
                payload: ci.product.id.toString(),
              })
            }
            disabled={ci.amount === 1}
          >
            -
          </button>
          {ci.product.name} - {ci.amount}
          <button
            onClick={() =>
              dispatch({
                type: CartActionTypes.INCREASED,
                payload: ci.product.id.toString(),
              })
            }
          >
            +
          </button>
          <button
            onClick={() =>
              dispatch({
                type: CartActionTypes.REMOVED,
                payload: ci.product.id.toString(),
              })
            }
          >
            Ta bort
          </button>
        </li>
      ))}
    </ul>
  );
};
