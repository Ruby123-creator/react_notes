


let cal = (n)=>{
    for(let i=0;i<n;i++){
        sum += i;
    }
}


let memo = (fun)=>{
  let cache ={};
  return function(...args){
    let n = args[0];
    if(n in cache){
        console.log("comes from cache")
        return cache[n];
    }
    else{
        console.log("calculating first time");
        let result = fun(n);
        cache[n]=result;
        return result;

    }
  }
}

console.time();

let fun_val = memo(cal);
console.log( fun_val(5));
console.timeEnd();
console.time();

let ans = fun_val(5);
console.log(fun_val(5))
console.timeEnd();