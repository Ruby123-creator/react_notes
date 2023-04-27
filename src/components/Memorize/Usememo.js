import React, { useState,useMemo } from 'react';

export default function MyComponent() {
const [name, setName] = useState("");
const [counter , setcounter] = useState(1);

const factorialResult = useMemo(()=>{
   return calculateFactorial(counter);

},[counter]);


return (
  <div>
    <input type="text" placeholder='Enter your name' onChange={(e)=>{setName(e.target.value)}} />
    <br />
    <hr />
   <DisplayName name ={name}/>
    <br />
    <button onClick={()=>setcounter(counter+1)}>Increment</button> 
    <button onClick={()=>{setcounter(counter-1)}}>decrement</button> 
     <br />
     <span>Factorial of {counter} is:{factorialResult}</span>
  </div>
);
}

function calculateFactorial(number) {
console.log('calculateFactorial called!');
return number <= 0 ? 1 : number * calculateFactorial(number - 1);
}

const DisplayName= React.memo(({name})=>{

    console.log("rendered");
    return <p>My name is {name}</p>
})

