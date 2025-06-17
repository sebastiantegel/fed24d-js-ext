import { Outlet } from "react-router";
import { Navigation } from "../../components/Navigation/Navigation";
import "./Layout.css";
import { Footer } from "../../components/Footer/Footer";

export const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};
