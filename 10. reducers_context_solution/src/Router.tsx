import { createBrowserRouter } from "react-router";
import { TodoApp } from "./pages/TodoApp";
import { Products } from "./pages/Products";
import { Layout } from "./pages/Layout";
import { Cart } from "./pages/Cart";
import { Start } from "./pages/Start";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Start />,
      },
      {
        path: "/todos",
        element: <TodoApp />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
