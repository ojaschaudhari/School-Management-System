import React from 'react'
import '../../Design/Sidebar.css'
import { NavLink } from 'react-router-dom'
import { SSData } from './SSData'

export default function SSidebar() {
    return (
        <>
            <nav className="nav-menu">
                <ul className='nav-menu-items'>
                    {SSData.map((item, index) => (
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
