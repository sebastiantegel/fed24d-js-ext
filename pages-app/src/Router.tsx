import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { Products } from "./pages/Products";
import { SingleProduct } from "./pages/SingleProduct";

const basename = import.meta.env.DEV ? "" : "fed24d-gh-pages/";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/product/:id",
          element: <SingleProduct />,
        },
      ],
    },
  ],
  {
    basename,
  }
);
