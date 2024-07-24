import React from "react"
import hamburgerBtn from "../icons_assets/hamburger-btn.svg"

export default function Nav({ toggleNav, toggleNavs }) {
 
  console.log(toggleNav)
    return (
      <>
        <ul className="nav-bar">
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Menu</a></li>
          <li><a href="">Reservations</a></li>
          <li><a href="">Order Online</a></li>
          <li><a href="">Login</a></li>
        </ul>
        <div id={toggleNav ? "navOpen" : "navClose"} className="sidenav">
          <a href="#" className="closebtn" onClick={toggleNavs}>&times;</a>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Menu</a></li>
          <li><a href="">Reservations</a></li>
          <li><a href="">Order Online</a></li>
          <li><a href="">Login</a></li>
        </div>
        <button className="hamburger-menu-btn" onClick={toggleNavs}>
          <img src={hamburgerBtn} />
        </button>
      </>
    )
}
