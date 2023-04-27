import React from 'react'

const HOC =(WrappedComponent ,entity)=>{
    console.log(WrappedComponent)
    return class extends React.Component{
        state ={
            data:[],
            term:"",
        };
        componentDidMount(){
            const fetchData = async ()=>{
                const res = await fetch(`https://jsonplaceholder.typicode.com/${entity}`)
                const response = await res.json();
             this.setState({...this.state ,data:response})             
        };
        fetchData();
    }
    render(){
        let {term ,data} = this.state;
        console.log(data);

        let filteredData = data.slice(0,10).filter((d)=>{
            if(entity==='users'){
                const {name} = d;
                return name.indexOf(term)>=0;
            }
            if(entity ==='todos'){
                const {title}=d;
                return title.indexOf(term)>=0;
            }
        });
        console.log(filteredData)
        return(
            <div>
                <h2>{entity}</h2>
                <input type="text" value={term} onChange={(e)=>this.setState({...this.state,term:e.target.value})} id="" />
                {
                    console.log(data)
                }
                <WrappedComponent data={filteredData} />
            </div>
        )
    }
}
}


export default HOC;