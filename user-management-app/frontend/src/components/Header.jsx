import { NavLink } from "react-router"

function Header() {
  return (
    <div className="bg-gray-300 flex flex-wrap items-center justify-between">
      {/* logo */}
      <img
        src="https://toppng.com/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png"
        width="100px"
        className="rounded-4xl p-2"
      />
      {/* nav bar */}
      <nav className="w-full md:w-auto">
        {/* unordered list */}
        <ul className="flex flex-col md:flex-row gap-4 md:gap-10 p-4 md:p-8">
          
          {/* NavLink is act like a anchor tag by using this unneccesary re-rendering will stop */}
          <li>
            <NavLink
              to="/"
              // making the isActive in DOM 
              className={({ isActive }) =>
                isActive ? "text-white bg-blue-500 px-4 py-2 rounded" : ""
              }
            >
              Home
            </NavLink>
          </li>
           {/* "to" refers to "path" */}
          <li>
            <NavLink
              to="adduser"
              className={({ isActive }) =>
                isActive ? "text-white bg-blue-500 px-4 py-2 rounded" : ""
              }
            >
              AddUser
            </NavLink>
          </li>

          <li>
            <NavLink
              to="userlist"
              className={({ isActive }) =>
                isActive ? "text-white bg-blue-500 px-4 py-2 rounded" : ""
              }
            >
              UserList
            </NavLink>
          </li>

          <li>
            <NavLink
              to="user"
              className={({ isActive }) =>
                isActive ? "text-white bg-blue-500 px-4 py-2 rounded" : ""
              }
            >
              User
            </NavLink>
          </li>

        </ul>
      </nav>

    </div>
  )
}

export default Header