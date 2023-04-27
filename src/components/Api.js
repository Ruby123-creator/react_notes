// import { Post } from "react-axios";
import axios from 'axios';

const Api=()=>{

    let product ={
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
    }
    axios.defaults.baseURL ="https://fakestoreapi.com"
   let addproduct=()=>{
    axios('/products' ,{
        method:"POST",
        body: JSON.stringify(product)
    })
    .then((res)=>{console.log(res.data)})
    .catch((e)=>{console.log(e)})

   }
    // for multiple request
    let multipleRequest=()=>{
    let request1 = axios('/products')
    let request2 = axios('/products/1')
    let request3 = axios('/products/2')
    let request4 = axios('/products/3')
    let request5 = axios('/carts')
    
    axios.all([request1,request2.request3,request4,request5])
    .then(
        axios.spread((...response)=>{
       console.log(response[0].data);
       console.log(response[1]);
       console.log(response[2]);
       console.log(response[3]);
       console.log(response[4].data);

    })
    )
    .catch((e)=>console.log(e))
}
    return(
        <div>
            <button onClick={addproduct}>Add product</button>
            <button onClick={multipleRequest}>requests</button>

        </div>
    )
}
export default Api;
