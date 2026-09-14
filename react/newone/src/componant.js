import { useState } from "react";

function Usecounter(){
    const[count,setcount]=useState(0)

    const increas =()=>{
        setcount(count+1);
    }

    const dencreas =()=>{
        setcount(count-1);
    }
    const resut =()=>{
        setcount(0)
    }

    return {
    count,
    increas,
    dencreas,
    resut
    }
};
export default Usecounter; 



