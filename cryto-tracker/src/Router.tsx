import { createBrowserRouter } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";
import Price from "./routes/Price";
import Chart from "./routes/Chart";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: "",
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
  ],
  { basename: "/cryto-tracker/" }
);

export default router;
