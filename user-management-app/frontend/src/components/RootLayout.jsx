import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router"
import { pageBackground } from "../styles/common"
function RootLayout() {
  // define the structure of layout
  // Outlet is used to hold main content i.e like a placeholder
  return (
    <div >
      <Header/>
      <div className={pageBackground}>
        {/* default function in react  */}
          <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default RootLayout
