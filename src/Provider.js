
import React, {useState} from 'react';
import PackageContext from './components/Context';
const Provider  = (props) => {
    
    const [cricketers, setCricketers] = useState({
        name: "Sachin Tendulkar",
        age: 45,
        country: "India",
        highestScore: 200,
    })

    return(
         <PackageContext.Provider value={
             {
                  data:  cricketers,
                  updateAge: () =>setCricketers({...cricketers, age: cricketers.age+1})
             }
         }>

                {props.children}
         </PackageContext.Provider>

    )
   
}


export default Provider;



// info = cricketers