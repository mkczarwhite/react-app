import React from "react";

export default function Days(props){
    return (
        <div className="row">
               {props.days.map(function(day, index)) {
                   return(
<div className="column" key={index}>{day.name}</div>
                   )
               }
               
            
        </div>
    )
}