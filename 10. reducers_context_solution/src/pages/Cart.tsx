import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);

  return <></>;
};
