import { useContext } from "react"
import {CounterContext} from "../contexts/CounterContext.js"
import { UserContext } from "../contexts/UserContext.js"
import { useTest } from "../store/TestStore.js"

function B() {

   const x=useTest(state=>state.x)
   const incrementX=useTest(state=>state.incrementX)
   const incrementXByValue=useTest(state=>state.incrementXByValue)
  //  console.log(useTest()) this causes unneccesary re-rendering

  // UserContextProvider destructuring
  let {counter1,changeCounter}=useContext(CounterContext)
  let {user,changeUser}=useContext(UserContext)
  console.log("component B render")

  
  return (
    <div className="flex flex-col text-center shadow-2xl p-10 gap-2">
   <p className="font-bold">component B</p>
    <p>Counter:{counter1}</p> 
    <p>X:{x}</p> 
    <p>User Details:</p>
       <p>{user.name} {user.age} {user.email}</p>
     <button onClick={changeCounter} className="bg-blue-400 p-2 mt-2 cursor-pointer me-2">changeCounter</button>
     <button onClick={incrementX} className="bg-blue-400 p-2 mt-2 cursor-pointer me-2">incrementX</button>
     <button onClick={()=>{incrementXByValue(100)}} className="bg-blue-400 p-2 mt-2 cursor-pointer me-2">incrementXByValue</button>
     <button onClick={changeUser} className="bg-blue-400 p-2 mt-2 cursor-pointer" >changeUser</button>
      
    </div>
  )
}

export default B
