import React from 'react'
import './AdminPage.css'
import { NavLink } from 'react-router-dom'
import { ASData } from './ASData'

export default function ASidebar() {
    return (
        <>
            <nav className="nav-menu">
                <ul className='nav-menu-items'>
                    {ASData.map((item, index) => (
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
