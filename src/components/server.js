import React,{ useState,useEffect } from "react";

export default function Server({server,setActiveServer}){
    return(
        <button onClick={()=>setActiveServer(server)}>{server.name}</button>
    )
    
}