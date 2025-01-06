import { createBrowserRouter  } from "react-router-dom";
import Login from "@/pages/Login";
import Home from "@/pages/Home";
import App from "@/App";

const router = createBrowserRouter ([
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/home",
    element:<Home/>
  },
  {
    path:"*",
    element:<App/>
  }
])

export default router