import React from "react"
import logo from "../icons_assets/Logo.svg"
import Nav from "./Nav"
import { useState } from "react";

export default function Header() {
    const [toggleNav, setToggleNav] = useState(false)

    function toggleNavs() {
      setToggleNav(prevToggleNav => !prevToggleNav)
      console.log(toggleNav)
    }
    
    return (
        <header>
            <img src={logo} alt="" className="logo"/>
            <Nav 
            toggleNav={toggleNav}
            toggleNavs={toggleNavs}
            />
        </header>
    )
}

