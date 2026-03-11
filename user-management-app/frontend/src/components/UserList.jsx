import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { userGrid, loadingClass,headingClass, subHeadingClass } from "../styles/common"

function UserList() {
  // useState
  let [users, setUsers] = useState([])
  let [error, setError] = useState(null)
  let [loading, setLoading] = useState(true)
  const [searchUser,setSearchUser]=useState('');

  // navigate
  const navigate = useNavigate();

  // useEffect used for side Effects
  useEffect(() => {
    async function getUsers() {
      try {
        let res = await fetch("http://localhost:3000/user-api/users")
        let data = await res.json()
        setUsers(data.payload)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
  //  Call the getUsers function
    getUsers()
  }, [])

  const gotoUser = (userObj) => {
    navigate('/user', { state: { user: userObj } })
  }

  // Loading status
  if (loading) {
    return <p className={loadingClass}>Loading..</p>
  }

   // error handling
  if (error) {
    return <p className="text-center text-2xl text-red-400">{error.message}</p>;
  }
  const filteredUsers=users.filter(userObj=>userObj.name.toLowerCase().includes(searchUser.toLowerCase()))
  return (
    <div>

      {/* {error && <p className={errorClass}>{error}</p>} */}
      {/* Filtering of an product */}
    <div className="p-2 m-2 text-center">
        <input type="text"
         id="search"
         value={searchUser}
         onChange={(e)=>setSearchUser(e.target.value)}
          className="px-6 border rounded" 
          placeholder="Enter User Name..">

          </input>
    </div>
           <h1 className={subHeadingClass}>User Details</h1>
      <div className={userGrid}>
       {/* Particular use details */}
        {filteredUsers.map((user, index) => (
          <div onClick={() => gotoUser(user)} key={index} className="border rounded-2xl p-3  m-2 cursor-pointer border-blue-500 hover:bg-blue-50">
            <p>Name:{user.name}</p>
            <p>Email:{user.email}</p>
            <p>DateOfBirth{user.dateOfBirth}</p>
            <p>mobileNumber:{user.mobileNumber}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default UserList