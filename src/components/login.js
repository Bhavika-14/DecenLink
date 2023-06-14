import React from "react"

export default function Login(){
    return(
        <>
        <div className="row ps-5 pe-1 pt-5" style={{backgroundColor:"purple"}}>
            <div className="row mt-5">
            <div className="container col-6 bg-dark text-white mt-5 mb-5 p-5 rounded-2">
                <div className="text-center">
                    <h1 className="mb-5 mx-5">Welcome to <span style={{color:"purple"}}>DecenLink</span></h1>
                    <div className="row my-5"></div>
                    <div className="m-2 mt-5">
                        <h4>Connect to DecenLink</h4>
                    </div>
                    
                    <div className="m-4">

                        <button className="btn btn-lg text-white px-5 py-2" style={{backgroundColor:"purple"}}>
                            Connect
                        </button>
                    </div>

                </div>
            
            </div>
            </div>
            <div className="row mb-1">
            <div className="mt-5 p-5 container col-6 text-center text-white">
                Powered by Ethereum

            </div>
            </div>
            
        </div>

        
        </>
    )
}