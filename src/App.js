
import State from './components/Hooks/State'
import Api from './components/Api';
import Props from './components/Hooks/Props';
import './App.css';
import { useState } from 'react';
import Usememo from './components/Memorize/Usememo';
// import UserList from './components/UserList';
import SearchTodos from './components/HOC/Todolist';
// import Todolist from './components/Todolist';
import SearchUsers from './components/HOC/UserList';
import Provider from "./Provider"
import PackageContext from './components/Context';
import Child from './components/Child';
import SuperChild from './components/SuperChild';
import { createContext } from 'react';
import Problem from './components/Memorize/Problem';
import HOC2 from './components/HOC/HOC2';
import Reactmemo from './components/Memorize/Reactmemo';
import Usereducer from './components/Hooks/Usereducer';
import Usereducer1 from './components/Hooks/Usereducer1';
import Usecallback from './components/Memorize/Usecallback';
import Useref from './components/Hooks/Useref';
const Laugh = () => {
    return(
      <div>
        <h1>Laugh</h1>
      </div>
    )
      
}


const Smile = () => {
  
    return(
      <div>
            <PackageContext.Consumer> 
               {

                   (info) => (
                        <div>
                              <h1>Name of Cricketer is :{info.data.name} </h1>
                              <h2>Age of Cricketer is :{info.data.age} </h2>
                              <button onClick={info.updateAge}> Update Sachin Age</button>
                              <h3>Country of Cricketer is :{info.data.country} </h3>
                              <h4>Highest Score of Cricketer is :{info.highestScore} </h4>
                        </div>
                   )

               }
            </PackageContext.Consumer>
      </div>
    )
  
}
export const GlobalInfo = createContext();
function App() {
console.log(useState());
  const [color ,setColor] = useState('green')
   let arr = [{username:"Ruby Pal" , age:22,email:"ruby123@gmail.com" } , {username:"ruchi Pal" , age:24,email:"ruchi123@gmail.com" } ,{username:"sudha Pal" , age:21,email:"sudha123@gmail.com" }]
   const [msg , setmsg] = useState("");
   return (
    <div className="App">
      {/* <div className="props" style={{display:"flex"}}>
      
      {
        
        arr.map((element)=>
          
          <Props name ={element.username} 
           age ={element.age} 
           email={element.email}
           />

        )
      }

      
      </div>
      <h2>skills</h2>
      <Props javascript ="javascript" react ="react" />
      <State msgfun ={setmsg} />
      <p>{msg}</p>
     <Api/>
     <h1>Higher Order Components</h1>
       <HOC2/>
     <div style={{display:'flex' ,justifyContent:'center'}}>
     <SearchUsers/>
     <SearchTodos/>
     </div>
    <h2>Context API</h2>
     <div>
     <Laugh />
       <Provider>
            <Smile />
       </Provider>
     </div>
     <div>
      <GlobalInfo.Provider value={{appColor:color}}>
        <div>App component</div>
        <Child/>
      </GlobalInfo.Provider>
     </div>
     <div>
      <Problem/>
      <Usememo/>
     </div>
     <div>
      <Usereducer/>
      <Usereducer1/>
     </div> */}
     <Usecallback />
     <Useref/>
    </div>
  );
}

export default App;
