import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Event from "../pages/Event";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/event",
    element: <Event />,
  },
]);

export default router;
