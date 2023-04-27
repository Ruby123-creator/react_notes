import React from "react"


const Reactmemo=(props)=>{
        console.log("purecomponent");
        return(
            <div>
            <h1> Pure component {props.data}</h1>
        </div>
        )
        
    
}
export default React.memo(Reactmemo);