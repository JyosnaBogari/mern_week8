
import { createBrowserRouter,RouterProvider} from "react-router"
import Home from "./components/Home"
import Product from "./components/Product"
import ProductsList from "./components/ProductsList"
import RootLayout from "./components/RootLayout"
import ContactUs from "./components/ContactUs"
function App() { 
    // create routeObj
  const routeObj=createBrowserRouter([
    {
        path:"/",
        element:<RootLayout/>, 
        children:[
        {
        path:"",
        element:<Home/>
    },
    {
        path:"product",
        element:<Product/>
    },
    {
        path:"products",
        element:<ProductsList/>
    },
    {
        path:"contact",
        element:<ContactUs/>
    }
    ]
    }

  ])
//   RouterProvider
  return <RouterProvider router={routeObj}/>
}

export default App
