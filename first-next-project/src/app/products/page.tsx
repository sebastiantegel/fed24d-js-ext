// export default function Products() {
//   return <>Products</>;
// }

import Movie from "../components/Movie";
import { Product } from "../models/Product";

const Products = async () => {
  const response = await fetch(
    "https://medieinstitutet-wie-products.azurewebsites.net/api/products",
  );
  const products: Product[] = await response.json();

  return (
    <>
      {products.map((p) => (
        <Movie key={p.id} movie={p} />
      ))}
    </>
  );
};

export default Products;
