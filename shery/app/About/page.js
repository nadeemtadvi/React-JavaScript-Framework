"use client"

import React, { useState } from "react"

const about =() => {
   const [username, setusername] = useState("")
    return(
        <>
        
       <div>About Page</div> 
       <h1 className="mb-5 text-2xl">Enter Name </h1>
       <form>
        <input type="text" className="border-2 border-zinc-800 px-4 py-2 text-xl" 
        value={username} 
        onChange={(e)=>{
            setusername(e.target.value)
              
        }} />
       </form>
       
       </>
    )
}
export default about