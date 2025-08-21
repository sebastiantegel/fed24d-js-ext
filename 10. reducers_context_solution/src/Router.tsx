import { createBrowserRouter } from "react-router";
import { TodoApp } from "./components/TodoApp";
import { Products } from "./components/Products";
import { Layout } from "./pages/Layout";

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
