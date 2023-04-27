import React from 'react'
// import { useState } from 'react';

const Props =(propsValue)=>{
    

    return(
        <div className="container">
            <div className="component" style={{margin:"10px"}}>
                {/* <h1>welcome</h1> */}
                <h2>{propsValue.name}</h2>
                <h3>{propsValue.age}</h3>
                <p>{propsValue.email}</p>
            </div>
            <div className="skills">
                <p>{propsValue.javascript}</p>
                <p>{propsValue.react}</p>
            </div>
        </div>
    )
}
export default Props;