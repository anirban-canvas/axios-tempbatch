import { useContext, useReducer, useRef } from "react";
import Child from "./Child";
import Mycontext from "./Mycontext";

export default function Parent(){

const data=useContext(Mycontext)
const inputRef=useRef()

const showinput=()=>{

    console.log(inputRef.current.focus())

}


const reducer=(state,action)=>{

    switch(action.type){
        case "INCREMENT":
          return ++state 
        case "DECREMENT":
            return --state  
          
    }

}

const [rdata,dispatch]=useReducer(reducer,0)

    return(<>Hellow I am parent and this is my data - {data.parentData}
            <strong>Rendering Child</strong> <Child/>

            <strong>{rdata}</strong>
            <button onClick={()=>dispatch({'type':"INCREMENT"})}>Increment</button>
            <button onClick={()=>dispatch({'type':"DECREMENT"})}>Decrement</button>
    </>)


}