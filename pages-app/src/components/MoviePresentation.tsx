import { Link } from "react-router";
import type { Product } from "../models/Product";
import { MagicButton } from "./styled/Buttons";
import { P } from "./styled/P";
import { Title } from "./styled/Title";
import { MovieWrapper } from "./styled/Wrappers";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

type MoviePresenationProps = {
  product: Product;
};

export const MoviePresenation = ({ product }: MoviePresenationProps) => {
  const { dispatch } = useContext(ProductContext);

  return (
    <MovieWrapper selected={product.selected}>
      <Title>{product.name}</Title>
      <P>{product.price}</P>
      <MagicButton
        onClick={() => {
          dispatch({
            type: "SELECTED",
            payload: product.id.toString(),
          });
        }}
      >
        Välj
      </MagicButton>
      <Link to={`/product/${product.id}`}>Läs mer...</Link>
    </MovieWrapper>
  );
};
