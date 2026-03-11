import { NavLink } from "react-router"

function Header() {
  return (
    <div className="bg-gray-400 flex justify-between">
      {/* image */}
      <img src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png" width="100px"/>
      {/* nav bar */}
      <nav className="p-8">
        <ul className="flex gap-10">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="register">Register</NavLink>
          </li>
          <li>
            <NavLink to="login">Login</NavLink>
          </li>
          <li>
            <NavLink to="technologies">Technologies</NavLink>
          </li>
          
        </ul>
      </nav>
    </div>
  )
}

export default Header
