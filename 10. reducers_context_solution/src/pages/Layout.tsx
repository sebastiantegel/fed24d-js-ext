import { useReducer } from "react";
import { NavLink, Outlet } from "react-router";
import { CartReducer } from "../reducers/CartReducer";
import { CartContext } from "../contexts/CartContext";
import { SmallCart } from "../components/SmallCart";

export const Layout = () => {
  const [cart, dispatch] = useReducer(
    CartReducer,
    JSON.parse(localStorage.getItem("cart") || "[]"),
  );

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to={"/todos"}>Todos</NavLink>
            </li>
            <li>
              <NavLink to={"/products"}>Products</NavLink>
            </li>
            <li>
              <NavLink to={"/cart"}>Cart</NavLink>
            </li>
          </ul>
        </nav>
        <SmallCart />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </CartContext.Provider>
  );
};
