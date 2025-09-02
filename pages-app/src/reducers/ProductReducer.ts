import type { Product } from "../models/Product";

export type ProductAction = {
  type: string;
  payload: string;
};

export const ProductReducer = (products: Product[], action: ProductAction) => {
  if (action.type === "LOADED") {
    return JSON.parse(action.payload);
  }

  if (action.type === "SELECTED") {
    const id = +action.payload;

    return products.map((p) => {
      if (p.id === id) return { ...p, selected: !p.selected };
      return p;
    });
  }

  return products;
};
