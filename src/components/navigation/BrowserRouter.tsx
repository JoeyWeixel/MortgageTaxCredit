import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../pages/home/HomePage";
import WebLayout from "./WebLayout";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <WebLayout />,
    children: [
      {
        path: "",
        element: <HomePage />
      }
    ]
  }
]);

export default BrowserRouter