export const saveCartToLocalStorage = (value: string) => {
  localStorage.setItem("cart", value);
};
