import type { CartItem } from "../models/CartItem";
import type { Product } from "../models/Product";

export enum CartActionTypes {
  ADDED,
  REMOVED,
  INCREASED,
  DECREASED,
}

type CartAction = {
  type: CartActionTypes;
  payload: string;
};

export const CartReducer = (cart: CartItem[], action: CartAction) => {
  switch (action.type) {
    case CartActionTypes.ADDED: {
      const productToAdd: Product = JSON.parse(action.payload);

      // 1. Försök hitta produkten i varukorgen
      const foundCartItem = cart.find(
        (ci) => ci.product.name === productToAdd.name,
      );

      // Om den finns: Ändra amount
      if (foundCartItem) {
        return cart.map((ci) => {
          if (ci.product.name === foundCartItem.product.name) {
            return { ...ci, amount: ci.amount + 1 };
          }
          return ci;
        });
      }

      // Om den inte finns, lägg till
      return [...cart, { product: productToAdd, amount: 1 }];
    }

    case CartActionTypes.REMOVED: {
      return cart.filter((ci) => ci.product.name !== action.payload);
    }

    case CartActionTypes.INCREASED: {
      const productName = action.payload;

      return cart.map((ci) => {
        if (ci.product.name === productName) {
          return { ...ci, amount: ci.amount + 1 };
        }
        return ci;
      });
    }

    case CartActionTypes.DECREASED: {
      const productName = action.payload;

      //   const foundCartItem = cart.find((ci) => ci.product.name === productName);

      //   if (foundCartItem) {
      //     if (foundCartItem.amount > 1) {
      return cart.map((ci) => {
        if (ci.product.name === productName) {
          return { ...ci, amount: ci.amount - 1 };
        }
        return ci;
      });
      //     }

      //     return cart.filter((ci) => ci.product.name !== productName);
      //   }

      //   return cart;
    }

    default:
      return cart;
  }
};
