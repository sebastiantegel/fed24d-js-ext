import { Outlet } from "react-router";

export const Layout = () => {
  // useReducer (cart)

  return (
    <>
      <header>{/* Cart */}</header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};
