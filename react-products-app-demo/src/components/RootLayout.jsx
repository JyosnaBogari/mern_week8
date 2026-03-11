import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router"
function RootLayout() {
  // design the structure of an layout
  return (
    <div>
      <Header/>
      <div className="min-h-screen">
        {/* Outlet is a placeholder */}
          <Outlet/>
      </div>
      
      <Footer/>
    </div>
  )
}

export default RootLayout
