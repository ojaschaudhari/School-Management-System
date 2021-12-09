import React from 'react'
import '../Design/Loginbar.css'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router'

export default function LoginBar() {
    const navigate = useNavigate()

    function logout() {
        if (sessionStorage.getItem("post") === "admin") {
            navigate('/admin')
        }
        else if (sessionStorage.getItem("post") === "clerk") {
            navigate('/clerk')
        }
        else if (sessionStorage.getItem("post") === "student") {
            navigate('/student')
        }
        else if (sessionStorage.getItem("post") === "teacher") {
            navigate('/teacher')
        }

        sessionStorage.removeItem("username")
        sessionStorage.removeItem("sub")
        sessionStorage.removeItem("post")
        sessionStorage.removeItem("std")
        sessionStorage.removeItem("rollno")
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="mycontainer m-0 p-0">
                <Container fluid>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav m-0 p-0" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto myrow">
                            <div><p className="myp">Welcome , {sessionStorage.getItem("username")}</p></div>
                        </Nav>
                        <Nav>
                            <form className="d-flex">
                                <div>
                                    <button className="btn mybtn me-5" onClick={logout}>Log Out</button>
                                </div>
                            </form>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
