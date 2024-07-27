import React from "react"
import logo from "../icons_assets/Logo.svg"
import Nav from "./Nav"
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [toggleNav, setToggleNav] = useState(false)

    function toggleNavs() {
      setToggleNav(prevToggleNav => !prevToggleNav)
      console.log(toggleNav)
    }
    
    return (
        <header>
            <Link to="/">
             <img src={logo} alt="" className="logo"/>
            </Link>
            <Nav 
            toggleNav={toggleNav}
            toggleNavs={toggleNavs}
            />
        </header>
    )
}

