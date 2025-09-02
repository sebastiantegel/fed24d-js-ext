import { useContext } from "react";
import { MoviesWrapper } from "../components/styled/Wrappers";
import { ProductContext } from "../contexts/ProductContext";
import { MoviePresenation } from "../components/MoviePresentation";

export const Products = () => {
  const { products } = useContext(ProductContext);

  return (
    <MoviesWrapper>
      {products.map((p) => (
        <MoviePresenation product={p} key={p.id} />
      ))}
    </MoviesWrapper>
  );
};
