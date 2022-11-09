import React from 'react'
import "../styles/navbar.css"

export default function NavBar() {
  return (
    <div className="navbar">
        <span className="heading">Movie DB</span>
        <input type="text" placeholder="Search..." className="search-bar" />
    </div>
  )
}
