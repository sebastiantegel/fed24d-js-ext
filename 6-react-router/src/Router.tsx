import { createBrowserRouter } from "react-router";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout/Layout";
import { Error } from "./pages/Error";
import { Movie } from "./pages/Movie";
import { Movies } from "./pages/Movies";

export const router = createBrowserRouter([
  {
    // path "/" kommer alltid att träffas och därmed visas alltid <Layout />
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        // http://localhost:5173/
        path: "/",
        element: <Home />,
      },
      {
        // http://localhost:5173/contact
        path: "/contact",
        element: <Contact />,
      },
      {
        // http://localhost:5173/about
        path: "/about",
        element: <About />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/movie/:id",
        element: <Movie />,
      },
    ],
  },
]);
