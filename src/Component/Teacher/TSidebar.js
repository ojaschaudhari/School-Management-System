import React from 'react'
import './TeacherPage.css'
import { NavLink } from 'react-router-dom'
import { TSData } from './TSData'

export default function TSidebar() {

    return (
        <>
            <nav className="nav-menu">
                <ul className='nav-menu-items'>
                    {TSData.map((item, index) => (
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
