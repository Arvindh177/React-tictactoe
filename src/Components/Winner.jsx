import React,{useContext,useState} from "react";
import { AppContext } from "../App";

function Winner() {
    const {Winner} = useContext(AppContext)
    return(
        <div>Congratulations<span>{Winner}</span>,you WON!</div>
    )
}

export default Winner