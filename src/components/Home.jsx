import React from 'react'
import { NavLink } from 'react-router-dom'
import "../css/Home.css"
const Home = () => {
  return (
    <div className='counter-container' style={{ marginTop: "10px" }}>
      <div className="button-container" >
        <NavLink className="button" to="/button">ButtonComponent</NavLink>
        <NavLink className="button" to="/counter">Counter - Component</NavLink>
        <NavLink className="button" to="/data-fetching">Data Fetching - Component</NavLink>
      </div>
    </div>
  )
}

export default Home