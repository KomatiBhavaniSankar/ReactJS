import React from "react";
import Greeting from "./rendering";
import RenderList from "./renderlist";

function App() {


  const students =[
  {name:"John", age:20, isStudent:true},
  {name:"Joe", age:21, isStudent:false},
  {name:"Jo", age:22, isStudent:false},
 {name:"bob", age:20, isStudent:true},
  {name:"bobby", age:21, isStudent:false},
  {name:"Jo", age:22, isStudent:false},



  ];
return(


<div>

<RenderList students={ students} />
</div>

);


}
export default App;