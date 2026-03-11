import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router"

function RootLayout() {
  // design the structure of layout
  return (
    <div>
       <Header/>
       {/* component placeholder */}
      <div className="mx-20 min-h-screen">
         <Outlet/>
      </div>
       <Footer/>
    </div>
  )
}

export default RootLayout
