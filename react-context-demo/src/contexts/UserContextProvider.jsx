import { useState } from "react";
import { UserContext } from "./UserContext";

function UserContextProvider({ children }) {
    // useState
    const [user, setUser] = useState({ name: "chandu", age:20, email: "chandu@gmail.com" })
      //function to modify state
    const changeUser = () => {
        setUser({ name: "ravi", age: 10, email: "ravi@gmail.com" })
    }

    return (
        // UserContextProvider
        <UserContext.Provider value={{ user, changeUser }}>{children}</UserContext.Provider>
    )
}
export default UserContextProvider