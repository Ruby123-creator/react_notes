 import { useContext } from "react";
import { GlobalInfo } from "../App"; 

const SuperChild =()=>{
    const {appColor} = useContext(GlobalInfo);
    return(
        <div>
            <h4 style={{color:appColor}}>SUPERCHILD COMPONENT</h4>
        </div>
    )
}  

export default SuperChild;