import { create } from "zustand";

//create store
// the "create" hook returns the function i.e it create the zustand and store in useTest hook 
// useState hook used to modify the function
//but here we dont use the useState hook to modify instead we use functions: and we do : set and get 
export const useTest=create((set)=>({
    // state
    x:10,
    y:20,
    user:{
        name:"jyosna",
        age:20
    },
    // functions to modify state
    incrementX:()=>set((state)=>({x:state.x+1})),
    decrementX:()=>set((state)=>({x:state.x-1})),
     incrementY:()=>set((state)=>({y:state.y+1})),
     incrementXByValue:(v)=>set((state)=>({x:state.x+v})),
     updateUser:(newName)=>set(state=>({user:{...state.user,age:30,name:newName}}))
}));
