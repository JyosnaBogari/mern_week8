//state Management :it broadcast the change 

import { useContext ,useEffect,useRef} from "react"
import {CounterContext} from "../contexts/CounterContext.js"
import { UserContext } from "../contexts/UserContext.js"

function A() {
  // tsking the useRef and assign to inputRef
  let inputRef=useRef(null);

  let {counter1,changeCounter}=useContext(CounterContext)//here destructuring is happening
  let {user,changeUser}=useContext(UserContext)

  console.log("component A render")

  // we use useEffect beacause we are dealing with real DOM[sideEffects]
  useEffect(()=>{
    inputRef.current.focus();
  },[])

  return (
    <div className="flex flex-col text-center shadow-2xl p-10 gap-2">
      <p className="font-bold">component A</p>
      {/* display counter */}
      <p>Counter:{counter1}</p>
        {/* display user Details */}
      <p>User Details:</p>
      <p>{user.name} {user.age} {user.email}</p>
      {/* updates counter val */}
      <button onClick={changeCounter} className="bg-blue-400 p-2 mt-2 cursor-pointer me-2">changeCounter</button>
      <button onClick={changeUser} className="bg-blue-400 p-2 mt-2 cursor-pointer">changeUser</button>
      <input ref={inputRef} className="border-2"></input>
    </div>
  )
}

export default A
