import { createBrowserRouter } from "react-router-dom"

import { PublicLayout  } from "./pages/_layouts/public"
import { Home } from "./pages/public/home"
import { About } from "./pages/public/about"
import { Services } from "./pages/public/services"


export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },  
      {
        path: '/about',
        element: <About />,
      }, 
      {
        path: '/services',
        element: <Services />,
      }   
    ],
  },  
])
