// import { useState ,useEffect } from "react"
import HOC from "./HOC";
   const Todolist =({data})=>{
//     const [todos ,settodos] =useState([]);
//    const [term ,setTerm] =useState("");
//     useEffect(()=>{
//         const fetchtodos = async ()=>{
//             const res = await fetch("https://jsonplaceholder.typicode.com/todos")
//             const response = await res.json();
//             settodos(response);
//             console.log(todos);
//         }
//         fetchtodos();
//     },[])
   
    // let filteredtodo = data.filter(({title})=>{
    //     return title.indexOf(term)>=0;
    //     })
      let todolist =  data.map((todo)=>{
            return(
                <div key = {todo.userId}>
                    <p>
                        <strong>{todo.title}</strong>
                    </p>
                </div>
            )
            })
    return (
        <div>
            {/* <h3>To-Do-List</h3> */}
            {/* <input type="text" name="" id="" value={term} onChange={(e)=>setTerm(e.target.value)} /> */}
           {/* <div>{rendertodos}</div> */}
           <div>{todolist}</div>
        </div>

    ) 

   }
let searchTodos = HOC(Todolist,"todos")
export default searchTodos;   