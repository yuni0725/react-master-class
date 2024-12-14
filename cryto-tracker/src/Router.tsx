import { createBrowserRouter } from "react-router-dom";
import Coins from "./routes/Coins";
import App from "./App";
import NotFound from "./routes/NotFound";
import Coin from "./routes/Coin";
import Price from "./routes/Price";
import Chart from "./routes/Chart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Coins />,
      },
      {
        path: ":coinId",
        element: <Coin />,
        children: [
          {
            path: "chart",
            element: <Chart></Chart>,
          },
          {
            path: "price",
            element: <Price></Price>,
          },
        ],
      },
    ],
  },
]);

export default router;
