import { createBrowserRouter } from "react-router-dom";
import Home from "./Routes/Home";
import Tv from "./Routes/Tv";
import Search from "./Routes/Search";
import Layout from "./components/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "movies/:movieId",
        element: <Home></Home>,
      },
      {
        path: "tv",
        element: <Tv></Tv>,
      },
      {
        path: "search",
        element: <Search></Search>,
      },
      {
        path: "",
        element: <Home></Home>,
      },
    ],
  },
]);
