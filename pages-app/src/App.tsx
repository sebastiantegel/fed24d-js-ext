import { useEffect, useReducer } from "react";
import "./App.css";
import { getProducts } from "./services/ProductService";
import { ProductReducer } from "./reducers/ProductReducer";
import { ProductContext } from "./contexts/ProductContext";
import { RouterProvider } from "react-router";
import { router } from "./Router";

function App() {
  const [products, dispatch] = useReducer(ProductReducer, []);

  useEffect(() => {
    const getData = async () => {
      const products = await getProducts();
      dispatch({
        type: "LOADED",
        payload: JSON.stringify(products),
      });
    };

    if (products.length > 0) return;
    getData();
  });

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      <RouterProvider router={router}></RouterProvider>
    </ProductContext.Provider>
  );
}

export default App;
