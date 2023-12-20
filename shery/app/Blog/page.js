"use client"
import axios from "axios"
import React, { useEffect, useState } from "react"

const blog =() => {
    const [users, setusers] = useState([])
    const getuser = async ()=>{
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
        setusers(data);
    }
    // useEffect(() => {
    //   getuser()
      
    // }, [])
    
    
    return(
        <>
        
       <div>blog Page</div>
       <button onClick={getuser} className="bg-green-600 text-white px-4 py-2 rounded font-bold ">GET DATA
       </button>
       <div className="p-8 bg-slate-300 mt-5">
        <ul>
            {users.map((e)=>{
                return <li>{e.username} ---  <a href={`/${e.id}`}>Explore</a></li>
            })}
        </ul>
       </div>
       
       
        </>
    )
}
export default blog