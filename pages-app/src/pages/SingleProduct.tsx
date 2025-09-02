import { useContext } from "react";
import { useParams } from "react-router";
import { ProductContext } from "../contexts/ProductContext";
import { MoviePresenation } from "../components/MoviePresentation";

export const SingleProduct = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  if (id) {
    const foundProduct = products.find((p) => p.id === +id);

    if (!foundProduct) {
      return <>No product found</>;
    }

    return <MoviePresenation product={foundProduct}></MoviePresenation>;
  }

  return <>No id found</>;
};
