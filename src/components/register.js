import React from "react"

export default function Register(){
    return(
        <>
          <div className="row p-5 py-5" style={{backgroundColor:"purple"}}>
            <div className="container col-4 bg-dark text-white mt-5 mb-5 p-5 rounded-2">

                <h2 className="text-center mt-2">Sign Up</h2>

                <div className="">
                    <form>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email</label>
                            <input className="form-control" id="email" type="email" placeholder="Enter your email here" />
                        </div>
                        <div className="mb-3">
                            <label for="username" className="form-label">Username</label>
                            <input className="form-control" id="username" type="text" placeholder="Enter your Username here" />
                        </div>
                        <div className="text-center my-4">
                            <button className="btn btn-lg px-5 py-1 my-2 mx-5 text-white text-center" style={{backgroundColor:"purple"}}>Sign Up</button>
                        </div>
                    </form>

                </div>


            </div>

        </div>
        </>
    )
}