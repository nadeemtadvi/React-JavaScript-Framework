"use client"
import React, { useState } from "react"
import Header from "@/Components/Header"
import axios from "axios"
import { images } from "@/next.config"
// import Link from "next/link"


const page = () => {
  const [images, setimage] = useState([]);
  const getimg = async () => {
    try {
      const res = await axios.get("https://picsum.photos/v2/list");
      const data = res.data;
      setimage(data);
      console.log(images);
    } catch (error) {
      console.error("Error Fetching Images");
    }
  };
  const [marks, setmarks] = useState(80)
  const [name, setname] = useState("Nadeem")
  const a = 10
  // let marks = 80
  return (
    <>
      {/* <Header n={name}/> */}
      <div>page  a={a}</div>
      <h1 className="font-bold text-xl text-green-800">Total Marks = {marks}</h1>
      <button onClick={() => {
        setmarks(33)
      }} className="bg-blue-400 px-5 py-2 mt-5 rounded text-white font-bold">Update</button>
      <div><button onClick={getimg} className="bg-blue-400 px-5 py-2 mt-5 rounded text-white font-bold">GET-Image</button>
        <div className="p-10">{images.map((e, i) => {
          return <img key={i} src={e.download_url} width={300} height={300} className="m-10 rounded inline-block" />
        })}</div>
      </div>     </>

  )
}

export default page