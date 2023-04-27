import Pure from "./Pure";
import { Component } from "react";
import Reactmemo from "./Reactmemo";



class Problem extends Component{
  constructor(){
    super();
    this.state={
      name:"Got it channel"
    }
  }
  componentDidMount(){
    setInterval(()=>{
      this.setState({name:"Got it channel"})
    },1000)
  }

  render(){
    return(
      <div>
        <Pure data={this.state.name}/><Pure/>
        <Reactmemo data={this.state.name}/>
      </div>
    )
  }
}

export default Problem;