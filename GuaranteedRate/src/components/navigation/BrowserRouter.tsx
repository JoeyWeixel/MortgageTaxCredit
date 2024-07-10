import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../pages/home/HomePage";

const BrowserRouter = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage />
  }
]);

export default BrowserRouter