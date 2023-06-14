import React,{ useState,useEffect } from "react";
import Navbar from "./navbar"
import Server from "./server"
import Channel from "./channel";
const servers=[{"name":"server1","channels":[{"name":"1"},{"name":"2"}]},{"name":"server2","channels":[{"name":"1"},{"name":"2"}]}]

export default function Dashboard(){
  const [activeServer,setActiveServer]=useState(servers[0])
  const text_channels=activeServer.channels;
  const [activeChannel,setActiveChannel]=useState(text_channels[0])
  
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
              <div className="">
                <h2>Text Channels</h2>
                  {text_channels.map((channel,key)=>{
                    return(
                      <Channel channel={channel} setActiveChannel={setActiveChannel} />
                    )
                  })}
              </div>
              <div>
                <h2>Voice Channels</h2>
                <p className="text-center">Voice Channel1</p>
                <p className="text-center">Voice Channel2</p>
                

              </div>
              
              

            </div>
            <div className="col-9">

            </div>

          </div>
        </>
    )
}