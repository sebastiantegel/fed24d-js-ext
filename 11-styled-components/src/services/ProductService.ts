import { type Product } from "./../models/Product";

export const getProducts = async () => {
  const response = await fetch(
    "https://medieinstitutet-wie-products.azurewebsites.net/api/products",
  );
  const products: Product[] = await response.json();

  return products;
};
