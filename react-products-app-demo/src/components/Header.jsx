import { NavLink } from "react-router"

function Header() {
  return (
    <div className="bg-gray-100 flex flex-wrap justify-between items-center">
      {/* image logo */}
      <img src="https://tse2.mm.bing.net/th/id/OIP.7c9y5-yNFy3iW711fSiVZQHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3&o=7&rm=3" width="100px"/>

      <input type="text" id="search" className="px-30"></input>

      {/* nav bar */}
      <nav className="p-8">
        <ul className="flex flex-wrap gap-10">
          <li>
            <NavLink to="/" className={({isActive})=>isActive?"text-blue-100 bg-blue-500 p-2 rounded":""}>Home</NavLink>
          </li>
          <li>
            <NavLink to="products" className={({isActive})=>isActive?"text-blue-100 bg-blue-500 p-2 rounded":""}>ProductsList</NavLink>
          </li>
          <li>
            <NavLink to="product" className={({isActive})=>isActive?"text-blue-100 bg-blue-500 p-2 rounded":""}>Product</NavLink>
          </li>
          <li>
            <NavLink to="contact" className={({isActive})=>isActive?"text-blue-100 bg-blue-500 p-2 rounded":""}>ContactUs</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header