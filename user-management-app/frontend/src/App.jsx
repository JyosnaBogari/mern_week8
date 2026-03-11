import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayout from "./components/RootLayout";
import Home from "./components/Home";
import AddUser from "./components/addUser";
import UserList from "./components/userList";
import User from "./components/User";

function App() {

  // create the routerObj by with help of the react-router
  const routeObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />, //component nesting
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path:"adduser",
          element:<AddUser/>
        },
        {
          path:"userlist",
          element:<UserList/>
        },
        {
          path:"user",
          element:<User/>
        },
      ]
    }
  ]);

  return (
    <RouterProvider router={routeObj} />
  )
}

export default App
