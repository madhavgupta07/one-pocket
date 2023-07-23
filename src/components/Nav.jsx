import React, {useState} from 'react'
import '../css/Nav.css'
import { Outlet, NavLink, Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
const Nav = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            <div className="nav">
                <div className="nav_logo">
                    <Link className="nav_element" to="/"><h1>One Pocket</h1></Link>
                </div>
                <div className="nav_items">
                    <NavLink className="nav_element nav_item" to="/">Home</NavLink>
                    <NavLink className="nav_element nav_item" to="/button">Button - Task</NavLink>
                    <NavLink className="nav_element nav_item" to="/counter">Counter - Task</NavLink>
                    <NavLink className="nav_element nav_item" to="/data-fetching">Data Fetching - Task</NavLink>
                </div>
                <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
                    <NavLink className="nav_menu menu_item" to="/" onClick={() => setShowMediaIcons(!showMediaIcons)}>Home</NavLink>
                    <NavLink className="nav_menu menu_item" to="/button" onClick={() => setShowMediaIcons(!showMediaIcons)}>Button - Task</NavLink>
                    <NavLink className="nav_menu menu_item" to="/counter" onClick={() => setShowMediaIcons(!showMediaIcons)}>Counter - Task</NavLink>
                    <NavLink className="nav_menu menu_item" to="/data-fetching" onClick={() => setShowMediaIcons(!showMediaIcons)}>Data Fetching - Task</NavLink>
                </div>
                <div className="nav_hamburger nav_element">
                    <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                        <GiHamburgerMenu />
                    </a>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Nav