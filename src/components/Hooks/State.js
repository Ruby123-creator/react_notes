import React from 'react'
import { useState ,useEffect } from 'react'

const State =(props)=>{
    const[drink , setdrink] = useState("tea")
    const[count , setcount] = useState(0);
    const[name , setname]   = useState("")
    const handleclick =()=>{
      setdrink("coffee")
      console.log(drink);  // "tea"  
      // setState() does not immediately mutate this.state but creates a pending state transition. Accessing this.state after calling this method can potentially return the existing value. There is no guarantee of synchronous operation of calls to setState and calls may be batched for performance gains.we can use the useEffect hook to achieve it.
    }
  
    useEffect(()=>{
      console.log(drink)
    })

    const [value , setvalue] =useState(12)
      // initialize a value with a mesg
    // let [count, setCount]  = useState(()=>{console.log("Hello")
    // return 0
    
   
    function increasecount(){
        setvalue(value+1)
        setvalue(value+1) // why it doesnot increase the value by 2

    }
    function increaseCount1(){
        setvalue(prevCount => prevCount+1)   // async (use callbacks)
        setvalue(prevCount => prevCount+1)   // async (use callbacks)
    }
  // how to use with objects
    let [count1, setCount]  = useState({gold: 0, silver: 0, bronze: 0}) 
    // count = {gold: 0, silver: 0, bronze: 0}
     console.log("Value of count = " , count1)
    let {gold, silver, bronze} = count1

    function increaseGold() {
        setCount({...count1, gold: count1.gold + 1})
        // count = count.gold + 1
    }
    function increaseSilver() {
        setCount({...count1, silver: count1.silver + 1})
    }
    function increaseBronze() {
        setCount({...count1, bronze: count1.bronze + 1})
    }
    return (
        <div>
         <p>{drink} is available</p>  
      <button onClick={handleclick}>need coffee</button>
      <p>{drink} serves</p>
       <h4>{count}</h4>
       <button onClick={()=>setcount((count+1))}>increase count</button>
       <p>{value}</p>
       <button onClick={increasecount}>increase</button>
       <button onClick={increaseCount1}>increaseby 2 times</button>

       <h1> {gold}, {silver}, {bronze} </h1>
      <button onClick={increaseGold}> Increase Gold </button>
      <button onClick={increaseSilver}> Increase Silver </button>
      <button onClick={increaseBronze}> Increase Bronze </button>
       <br />
       <br />
       <div className="onchange" style={{margin:"30px"}}>
          
      <input type="text" name="" id="" onChange={(e)=>setname(e.target.value)} value={name} />
      <p>{name}</p>
      <button onClick={()=>{setname("")}}>clear</button>
       </div>
       <input type="text"  id="" onChange={(e)=>props.msgfun(e.target.value)}/>

        </div>

    )
}
export default State;