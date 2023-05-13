import React from "react";
import UpdatedComp from "./HigherComp";

function CountC(props){
    return (
        <div className="countC">
            <h1>Count : {props.count}</h1>
            <button onClick={props.add}>Click!!</button>
        </div>
    );
}

export default UpdatedComp(CountC);