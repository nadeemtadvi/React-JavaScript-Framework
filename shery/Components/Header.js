import React from "react"
import Link from "next/link"

// const Header = (props) => {
const Header = () => {
    return (
        <>
            <div className="h-16 bg-purple-800 flex text-white items-center justify-between px-5">
                {/* <h2>{props.n}</h2> */}
                <h2>LOGO</h2>
                <div className="flex gap-8">
                    <h4><Link href="/About">About</Link></h4>
                    <h4><Link href="/Blog">Blog</Link></h4>
                    <h4><Link href="/Career">Career</Link></h4>
                    <h4><Link href="/Contact">Contact</Link></h4>

                </div>
            </div>
        </>
    )
}
export default Header