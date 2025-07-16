// UseEffect =>  A react hook that lets you perform side effects in function components. It can be used to fetch data, directly interact with the DOM, and more. It runs after the render is comitted to the screen.

// useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
// 1. After the first render or when the compoent mounts
//2. After every render or when the component updates 
//3. when is the componet unmounts


//useEffect() => {} // Runs after every render
//useEffect(() => {}, []) // Runs only after the first render or runs only on mount
// useEffect(() => {}, [value]) // runs on mount and when the value changes

//used intion
//1. Data Fetching
//2. Directly interacting with the DOM
//3. Setting up a subscription
//4. Manually changing the DOM.


import React,  {useState, useEffect}from "react";
function Mycomponent1(){
    const [ count, setCount] = useState(0);

function increment(){
setCount(count+1);
}

function decrement(){
if (count > 0) {
    setCount(count - 1);

} 
//else{
  //  alert("count cannot be less");
//}

}
function reset(){
setCount(0);

}

return (
<div>
<p> count: </p>
<button onClick={increment}>Increment</button>
<button onClick={decrement}>Decrement</button>
<p>  count : {count}</p>
<button onClick={reset}>RESET</button>
</div>


);




}

export default Mycomponent1;