import React from "react"
import hamburgerBtn from "../icons_assets/hamburger-btn.svg"
import { Link } from "react-router-dom"

export default function Nav({ toggleNav, toggleNavs }) {
 
  console.log(toggleNav)
    return (
      <>
        <ul className="nav-bar">
          <Link to="/">Home</Link>
          <li><a href="/#about">About</a></li>
          <li><a href="/#specials">Menu</a></li>
          <Link to="/reservations">Reservations</Link>
          <li><a href="">Order Online</a></li>
          <li><a href="">Login</a></li>
        </ul>
        <div id={toggleNav ? "navOpen" : "navClose"} className="sidenav">
          <a href="#" className="closebtn" onClick={toggleNavs}>&times;</a>
          <Link to="/">Home</Link>
          <li><a href="/#about">About</a></li>
          <li><a href="/#specials">Menu</a></li>
          <Link to="/reservations">Reservations</Link>
          <li><a href="">Order Online</a></li>
          <li><a href="">Login</a></li>
        </div>
        <button className="hamburger-menu-btn" onClick={toggleNavs}>
          <img src={hamburgerBtn} />
        </button>
      </>
    )
}
