import React from "react";

function MouseOutEvent(){


    const handleMouseLeave = () => alert('Mouse left');

return (
    <div>

        <button onMouseLeave={handleMouseLeave} color="blue" >  Hover out me</button>
    </div>

);


}

export default MouseOutEvent;