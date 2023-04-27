import React from 'react'
import { useState } from 'react'
import Child1 from './Child1';
import { useCallback } from 'react';

function Usecallback() {
    const[counter1,setcounter1] = useState(0);
    const[counter2 , setcounter2] = useState([]);
    const increment = ()=>{
        setcounter1(counter1+1)
    }
    const fun_val =useCallback(()=>{
        console.log("function runs")
    },counter2)
     
  return (
    <div>
        <Child1 name={counter2} fun ={fun_val}/>
        <button onClick={increment}>Increase-value={counter1}</button>
    </div>
  )
}

export default Usecallback