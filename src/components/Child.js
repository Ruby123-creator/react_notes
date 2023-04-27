  import { useContext } from "react";
import { GlobalInfo } from "../App";
 import SuperChild from "./SuperChild";
const Child =()=>{
    const {appColor} = useContext(GlobalInfo);
    return(
        <div>
            <h4 style={{color:appColor}}>CHILD COMPONENT</h4>
            <SuperChild/>
        </div>
    )
}  

export default Child;