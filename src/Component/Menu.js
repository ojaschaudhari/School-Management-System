import React, { Component } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from '../logo.svg'
import down from '../img/down.png'
import '../Design/Menu.css'

export default class navigation extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="my-nav-back py-2">
                    <Container fluid className="m-0 p-0">
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="me-auto">

                                <NavLink to="/" className="link"> <span> Home </span> </NavLink>
                                <NavLink to="/gallery" className="link"> <span> Gallery </span> </NavLink>

                                <div className="dropdown link"  >

                                    <span>
                                        Log In
                                        <img
                                            alt=""
                                            src={down}
                                            width="30"
                                            height="30"
                                            className="d-inline-block align-top"
                                        />
                                    </span>

                                    <div className="dropdown-content">
                                        <p> <NavLink to="/admin" className="drop-link">Admin Login</NavLink> </p>

                                        <p> <NavLink to="/clerk" className="drop-link">Clerk Login</NavLink> </p>   

                                        <p> <NavLink to="/teacher" className="drop-link">Teacher Login</NavLink> </p>

                                        <p> <NavLink to="/student" className="drop-link">Student Login</NavLink> </p>
                                    </div>
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}
