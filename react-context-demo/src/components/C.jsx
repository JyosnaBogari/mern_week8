import { useContext, useState } from "react"
import {CounterContext} from "../contexts/CounterContext.js"
import {useTest} from "../store/TestStore.js"

function C() {
  
  // here we can also do the destructuring
  // 1.const {x,incrementX,decrementX}=useTest()  --but writing like this lead to some performance issue if we pass

  //  const {Y,incrementY}=useTest()  by taking simlly like this unneccesary re-rendering happening for that we need other way below 
  //  console.log(useTest())

  // zustand is state management method for maintain sync and share state
 const y= useTest(state=>state.y)
 const incrementY=useTest(state=>state.incrementY);
const updateUser=useTest(state=>state.updateUser);
const user=useTest(state=>state.user);

//function to modify
let {counter1,changeCounter}=useContext(CounterContext);
console.log("component C render")
  return (
    <div className="flex flex-col text-center shadow-2xl p-10 gap-2">
      <p className="font-bold">component C</p>
       <button onClick={changeCounter} className="bg-blue-400 p-2 mt-2 cursor-pointer">changeCounter</button>
           <p>Y:{y}</p>
           <p>User:{user.name}</p>
           <p>User:{user.age}</p>
       <button onClick={incrementY} className="bg-blue-400 p-2 mt-2 cursor-pointer">incrementY</button>
       <button onClick={()=>updateUser("radhika")} className="bg-blue-400 p-2 mt-2 cursor-pointer">updateUser</button>
    
    </div>
  )
}

export default C
