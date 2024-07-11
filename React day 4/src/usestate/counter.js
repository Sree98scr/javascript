import React,{useState} from 'react';


const Counter =()=>{
const [count,setCount]=useState(0);
const [Color,setColor] = useState("Red");

const changeColor=()=>{
  
setColor("Blue");

};
return(
        <div>
        <button onClick={()=>setCount(count + 1)}> Click</button>
        <p> Current value of count is {count}</p>     
        <h1> My favourite color is {Color}</h1> 
        <button onClick ={changeColor}>clickme
        </button>
  
  
  </div>
    );
}


export default Counter;

