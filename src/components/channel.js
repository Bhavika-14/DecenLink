import React from "react";

export default function Channel({channel,setActiveChannel}){
    return(
        <p className="text-center"><button onClick={()=>setActiveChannel(channel)}>{channel.name}</button></p>
    )

}