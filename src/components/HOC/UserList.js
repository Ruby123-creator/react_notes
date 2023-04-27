// import { useState ,useEffect } from "react"
import HOC from "./HOC"
   const UserList =({data})=>{
    console.log(data);
//     const [users ,setUsers] =useState([]);
//    const [term ,setTerm] =useState("");
//     useEffect(()=>{
//         const fetchUsers = async ()=>{
//             const res = await fetch("https://jsonplaceholder.typicode.com/users")
//             const response = await res.json();
//             setUsers(response);
//             console.log(users);
//         }
//         fetchUsers();
//     },[])
    let renderUsers = data.map((user)=>{
        return(
            
            <div key = {user.id}>
                <p>
                    <strong>{user.name}</strong>
                </p>
            </div>
        )
    })
    // let filteredUser = users.filter(({name})=>{
    //     return name.indexOf(term)>=0;
    //     }).map((user)=>{
    //         return(
    //             <div key = {user.id}>
    //                 <p>
    //                     <strong>{user.name}</strong>
    //                 </p>
    //             </div>
    //         )
    //         })
    return (
        <div>
            {/* <h3>Users</h3> */}
            {/* <input type="text" name="" id="" value={term} onChange={(e)=>setTerm(e.target.value)} /> */}
           <div>{renderUsers}</div>
        </div>

    ) 

   }
const SearchUsers = HOC(UserList,"users")
export default SearchUsers;   