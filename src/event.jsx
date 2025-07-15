import React from "react";
export function KeyboardEvent(){
const handleKeyPress = (event) => {
if(event.key == 'Enter'){
    alert('Enter key pressed');

}
};



return <input type="text" onKeyPress={handleKeyPress} placeholder="press enter" />;
}

//Ketboard events

export function KeyDownEvent() {

    const handleKeyDown = (event) => {
        alert(`key down:${event.key}`);

    };
   
return <input type="text" onKeyDown={handleKeyDown} placeholder="press any key" />;
}









//     const handleMouseLeave = () => alert('Mouse left');

// return (
//     <div>

//         <button onMouseLeave={handleMouseLeave} color="blue" >  Hover out me</button>
//     </div>

// );



return (

<div>
</div>

);



