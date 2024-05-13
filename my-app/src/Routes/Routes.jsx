import Home from "../pages/site/Home/Home";
import SiteRoot from "../pages/site/SiteRoot";
import Basket from "../pages/site/Basket/Basket";
const ROUTES = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
    ],
  },
];
export default ROUTES;
