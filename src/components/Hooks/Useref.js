import React, { useRef, useState } from 'react'

function Useref() {
    const [count , setcount] = useState(0)
    const inputone = useRef();
    const inputtwo = useRef();
    let fun1 =()=>{
        console.log("hello")
        console.log(inputone);
        console.log(inputone.current)
    }
    let fun2 =()=>{
        console.log("world")
        console.log(inputtwo);
        console.log(inputtwo.current)
        inputtwo.current.style.border ="2px solid red";
    }
  return (
    <div>
        <input type="number" ref={inputone} value={count} onChange={(e)=>setcount(e.target.value)} />
        <input type="number" style={{border:"2px solid blue"}} ref={inputtwo} value={count} onChange={(e)=>setcount(e.target.value)} />
        <p>My number is {count}</p>
        <button onClick={fun1}>btn1</button>
        <br />
        <button onClick={fun2}>btn2</button>
    </div>
  )
}

export default Useref