import {Component} from 'react'


class TestComponent extends Component{

        componentWillUnmount(){
                console.log("I am going out")
        }

        render(){
                return <div>I am test component</div>
        }

}


export default class Animal extends Component {

       constructor(){
        super()
        this.state={type:"bird", legs:5,inputstate:0,data:[],animalfood:"test",renderflag:false,test:true}
       }


       handletest(){

        this.setState({test:false})

       }

       handleInputvalue(value){
       

        this.setState({inputstate:value})
       }


       componentDidUpdate(){
        console.log("Component updated")
       }

       componentDidMount(){
        console.log("component mounted")
       }

//        shouldComponentUpdate(prevProp,prevState){

//         if(prevState.inputstate==this.state.inputstate){
//                 return false
//         }else{
//                 return true
//         }

//        } 
       render(){
        console.log("render component")
        let testComponent=null
        if(this.state.test){
                testComponent=<TestComponent/>
        }
        return (<><div> Animal Component  {this.state.inputstate} </div>



                        {testComponent}

                <button onClick={()=>this.handleInputvalue(4)}> Change value 4 </button>
                <button onClick={()=>this.handleInputvalue(5)}> Change value 5</button>
                <button onClick={()=>this.handleInputvalue(6)}> Change value 6 </button>
                <button onClick={()=>this.handletest()}>Delete Component</button>
            {/* <input onChange={(e)=>this.handleInputvalue(e.target.value)} value={this.state.inputstate} /> */}
         </>)
       } 

}




//Contructor
//getDErivedstatesfromprops
//componentdid mount
//render