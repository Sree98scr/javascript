import React,{useEffect, useState} from 'react';


function Effect() {
    const [counter1,setCounter1]=useState(0);
    const [counter2,setCounter2]=useState(0);
    
  
    /*useEffect(()=>{
        console.log('Run')
    });*/


   /* useEffect(()=>{
        console.log('Run',counter1);
    },[counter1])*/

    useEffect(()=>{
        console.log('Run')
    },[]);
   



return(
       <div>
       <h1>{counter1}</h1>
       <h1>{counter2}</h1>
       <button onClick ={()=>setCounter1(counter1+1)}>increment 1</button>
       <button onClick ={()=>setCounter2(counter2+1)}>increment 2</button>



       </div>
       );
    }



export default Effect;

