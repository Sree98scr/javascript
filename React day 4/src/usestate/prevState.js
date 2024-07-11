import React,{useState} from 'react';




const Prevstate =()=>{
    const[count,setCount]=useState(0);
    const increasefive=()=>{
    for(let i=0;i<5;i++){
      //  setCount(count +1);
      setCount(prevState=>prevState+1);
    }


};
return(
        <div>
        <button onClick={()=>increasefive()}>click here to add 5</button>
  <p> The value is {count}</p>
  
  </div>
    );


};
export default Prevstate;

