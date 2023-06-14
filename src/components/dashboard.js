import React,{ useState,useEffect } from "react";
import Navbar from "./navbar"
import Server from "./server"
const servers=[{"name":"server1","channels":[{"name":"1"},{"name":"2"}]},{"name":"server2","channels":[{"name":"1"},{"name":"2"}]}]

export default function Dashboard(){
  const [activeServer,setActiveServer]=useState(servers[0])
  const channels=activeServer.channels;
  const [activeChannel,setActiveChannels]=useState(channels[0])
  
    return(
        <>
          <Navbar/>

          <div className="row">
            <div className="col-1">
              {servers.map((server,key)=>{
                return(
                  <p><Server server={server} setActiveServer={setActiveServer} /></p>
                )
              })}
            </div>

            <div className="col-3">
              {servers.map((server,key)=>{
                return(
                  <p><Channel channel={channels} setActiveServer={setActiveServer} /></p>
                )
              })}

            </div>
            <div className="col-9">

            </div>

          </div>
        </>
    )
}