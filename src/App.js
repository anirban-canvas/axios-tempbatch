import logo from './logo.svg';
import './App.css';
import Parent from './component/Parent';

import Mycontext from './component/Mycontext';
import { useEffect, useState } from 'react';
import axios from 'axios'
function ConsoleTest(){
  console.log("I am called")
}

let data=['abcd']
let newdata=data;
newdata.push("12345")
console.log(data)
console.log(newdata)




function App() {
  const [data,setData]=useState([])
  const[inputemail,setInputEmail]=useState("")
  const[inputname,setInputName]=useState("")
  const[inputbody,setInputBody]=useState("")
  const [flag,setFlag]=useState(1)
  // const data={'parentData': 'parent Data','childData':'child Data','myfn':ConsoleTest}

  const hanlePost=()=>{

      axios({
        method:'POST',
        url:'http://localhost:3300/posts/',
        data:{
          "name": inputname,
    "email": inputemail,
    "body": inputbody,
        }
      }).then((res)=>{
        setInputEmail("")
        setInputName("")
        setInputBody("")
      })


  }



  useEffect(()=>{


      axios({
        method:'GET',
        url:'http://localhost:3300/posts/'
      })
      .then((res)=>{

        setData(res.data)
        if(flag==1){
          setFlag(0)
        }else{
          setFlag(1)
        }
      })




  },[])
return(<>
<div className='form'>
  <div>
    Name: <input onChange={(e)=>setInputName(e.target.value)} value={inputname}/>
  </div>
  <div>
    Email: <input onChange={(e)=>setInputEmail(e.target.value)} value={inputemail}/>
  </div>
  <div>
    body: <input onChange={(e)=>setInputBody(e.target.value)} value={inputbody}/>
  </div>
  <div>
    <button onClick={hanlePost}>
      Save
    </button>
  </div>

</div>

<div><ul>
  {data.length>0?data.map((dt)=>{
    return(<li>
      {dt.name}
      </li>)
  }):"No data found"}
    
  
</ul>
</div></>)

  // return(
  // <Mycontext.Provider value={data}>

  //       <Parent/>

  // </Mycontext.Provider>
  // )
}

export default App;
