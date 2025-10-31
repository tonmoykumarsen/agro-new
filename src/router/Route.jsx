import { createBrowserRouter } from "react-router-dom";
import mainLayout from "../layout/mainLayout";
import Home from "../pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
        Component: mainLayout,
        children: [
            {
            index: true,
            Component:Home
        }
    ]
  },
]);
