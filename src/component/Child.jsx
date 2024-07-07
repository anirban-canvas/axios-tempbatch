import Mycontext from "./Mycontext";
import { useContext } from "react";

export default function Child(){
    const data=useContext(Mycontext)



    return(<>Hellow I am child and this is my data - {data.childData}
            {/* <button onClick={()=>data.myfn()}>
                    Click me
            </button> */}
        
    </>)


}