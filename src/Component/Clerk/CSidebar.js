import React from 'react'
import './ClerkPage.css'
import { NavLink } from 'react-router-dom'
import { CSData } from './CSData'

export default function CSidebar() {
    return (
        <>
            <nav className="nav-menu">
                <ul className='nav-menu-items'>
                    {CSData.map((item, index) => (
                        <li key={index} className="nav-text">
                            <NavLink to={item.path}>
                                <span>{item.title}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}
