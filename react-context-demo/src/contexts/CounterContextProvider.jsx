//it provides a state through  contextProvider
//every contextProvider should have only one state ,if we take more than one state unneccesary rendering will happen Reson: beacause whatever the one property a,on them are change then the react feel the object change so un're-rendering happen 

import { useState } from "react"
import { CounterContext } from "./CounterContext"

function CounterContextProvider({children}) {

    const [counter1,setCounter1]=useState(100);
    // const [counter2,setCounter2]=useState(100);
   //function to modify state 
    const changeCounter=()=>{
          setCounter1(counter1+1);
    }
    // const changeCounter2=()=>{
    //       setCounter2(counter1+1);
    // }

  //    return (
  // in this below: the react feels that the object[{counter1,counter2,changeCounter,changeCounter2}]  changes .it nit bother about the individual properties in object
  //   <CounterContext.Provider value={{counter1,counter2,changeCounter,changeCounter2}}>{children}</CounterContext.Provider>
  // )
  return (
    <CounterContext.Provider value={{counter1,changeCounter}}>{children}</CounterContext.Provider>
  )
}

export default CounterContextProvider
