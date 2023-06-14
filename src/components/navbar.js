import React from "react"

export default function Navbar(){
    return(
        <>
          <nav className="bg-dark">
            <div style={{color:"purple"}}>
                <h2>DecenLink</h2>
            </div>

            <div className="position-end text-white">
                Account
            </div>
          </nav>
        </>
    )
    
}