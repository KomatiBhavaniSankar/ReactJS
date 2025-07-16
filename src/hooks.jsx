/* hooks : Special function that allows functional components to use state and other react feature without writing a class componnet (Reat 16.8+)


2. (Hooks are finctions that )



*/


import React, { useState } from "react";

function Mycomponent(){
const[name, setName] = useState("Your name");


const [age, setAge ] = useState(21);


const[ isEmployed, setIsEmployed] = useState(false);

const changeName = () => {

    setName("bhavani");
}

const changeAge = () => {
    setAge(age+1);
}

const Employedstatus = () =>{
    setIsEmployed(!isEmployed);
}




return (


    <div>
<p> Name: {name}</p>

<button onClick={changeName}> Click me</button>




<p> age:{age}</p>
<button onClick={changeAge}> My age</button>
 
 <p> isEmployed: {isEmployed ? "yes": "no"}</p>
 <button onClick={Employedstatus}> YES/NO</button>
    </div>
);


}


export default Mycomponent;