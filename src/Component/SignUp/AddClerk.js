import axios from 'axios';
import React, { useState } from 'react'
import { Modal, Button, Container, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import '../../Design/SignUp.css'

export default function AddClerk() {
    const navigate = useNavigate() 
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(true);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleClose1 = () => setShow1(false);

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [mobile, setmobile] = useState("")
    const [pwd, setpwd] = useState("")
    const [cpwd, setcpwd] = useState("")
    const [me, setme] = useState("")

    const [err, seterr] = useState(false)
    const [err1, seterr1] = useState(false)
    const [err2, seterr2] = useState(false)
    const [err3, seterr3] = useState(false)
    const [err4, seterr4] = useState(false)
    const [err5, seterr5] = useState(false)
    const [err6, seterr6] = useState(false)

    async function register() {
        if (name.length === "0" || email.length === "0" || me.length === "0" || mobile.length != 10 ||
            pwd.length < 8 || pwd.length > 16 || pwd.length !== cpwd.length) {
            console.log(" error");
            seterr(true)
            seterr1(true)
            seterr2(true)
            seterr3(true)
            seterr4(true)
            seterr5(true)
            seterr6(true)
            setShow1(true)
        }
        else {
            await axios.post('http://localhost:3001/clerk',
                {
                    name: name,
                    email: email,
                    mobile: mobile,
                    password: pwd,
                    description: me
                }).then((response) => {
                    console.log("success", response);
                    sessionStorage.setItem("username", email)
                    sessionStorage.setItem("post", "clerk")
                    navigate("/clerk/clerkpage")
                }).catch((error) => {
                    console.log(error);
                })
        }
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="btn btn-primary mx-auto">
                clerk
            </Button>

            <Modal show={show} fullscreen onHide={handleClose}>
                <Modal.Header closeButton className="bg-success">
                    <Modal.Title><h1 className="float-center display-2">Clerk Registration Form</h1 ></Modal.Title>
                </Modal.Header>
                <Modal.Body className="container-t">

                    <Container className="mt-5">

                        <Row className="my-3">
                            <Col lg={4} className="text-end">
                                <label className="lbl-txt"> Enter Full Name :- </label>
                            </Col>
                            <Col lg={8}>
                                <input type="text" placeholder="Your Full Name..."
                                    value={name} onChange={(e) => setname(e.target.value)}
                                    onBlurCapture={(e) => e.target.value.length === 0 ? seterr1(true) : seterr1(false)}
                                ></input>
                                {err1 ?
                                    <span style={{ color: '#f00' }}> This field is necesary.</span> :
                                    <span></span>}
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={4} className="text-end">
                                <label className="lbl-txt"> Enter Email Address :- </label>
                            </Col>
                            <Col lg={8}>
                                <input type="email" placeholder="Your Email Address..."
                                    value={email} onChange={(e) => setemail(e.target.value)}
                                    onBlurCapture={(e) => e.target.value.length === 0 ? seterr2(true) : seterr2(false)}
                                ></input>
                                {err2 ?
                                    <span style={{ color: '#f00' }}> This field is necesary.</span> :
                                    <span></span>}
                            </Col>
                        </Row>

                        <Row className="my-3">
                            <Col lg={4} className="text-end">
                                <label className="lbl-txt"> Enter Mobile Number :- </label>
                            </Col>
                            <Col lg={8}>
                                <input type="number" placeholder="Your Phone Number..."
                                    value={mobile} onChange={(e) => setmobile(e.target.value)}
                                    onBlurCapture={(e) => e.target.value.length === 10 ? seterr3(false) : seterr3(true)}
                                ></input>
                                {err3 ?
                                    <span style={{ color: '#f00' }}>Mobile numbers have must be ten digits.</span> :
                                    <span></span>}
                            </Col>
                        </Row>

                        <Row className="my-3">
                            <Col lg={4} className="text-end">
                                <label className="lbl-txt"> Enter Your password :- </label>
                            </Col>
                            <Col lg={8}>
                                <input type="password" placeholder="Your Password..."
                                    value={pwd} onChange={(e) => setpwd(e.target.value)}
                                    onBlurCapture={(e) => e.target.value.length >= 8 && e.target.value.length <= 16 ? seterr4(false) : seterr4(true)}
                                ></input>
                                {err4 ?
                                    <span style={{ color: '#f00' }}>Password must contain 8 to 16 letters.</span> :
                                    <span></span>}
                            </Col>
                        </Row>

                        <Row className="my-3">
                            <Col lg={4} className="text-end">
                                <label className="lbl-txt"> Confirm Your password :- </label>
                            </Col>
                            <Col lg={8}>
                                <input type="password" placeholder="Your Confirm Password..."
                                    value={cpwd} onChange={(e) => setcpwd(e.target.value)}
                                    onBlurCapture={(e) => e.target.value === pwd ? seterr5(false) : seterr5(true)}
                                ></input>
                                {err5 ?
                                    <span style={{ color: '#f00' }}>Re-enter Password.</span> :
                                    <span></span>}
                            </Col>
                        </Row>

                        <Row className="my-3">
                            <Col lg={4} className="text-end">
                                <label className="lbl-txt"> Yourself :- </label>
                            </Col>
                            <Col lg={8}>
                                <textarea rows="7" cols="50" placeholder="About Yourself..."
                                    value={me} onChange={(e) => setme(e.target.value)}
                                    onBlurCapture={(e) => e.target.value.length === 0 ? seterr6(true) : seterr6(false)}
                                ></textarea>
                                {err6 ?
                                    <span style={{ color: '#f00' }}> This field is necesary.</span> :
                                    <span></span>}
                            </Col>
                        </Row>
                    </Container>

                </Modal.Body>
                <Modal.Footer className="container-t">
                    <Button variant="secondary" onClick={handleClose} className="mx-5">
                        Close
                    </Button>
                    <Button variant="primary" onClick={register} className="mx-5">
                        Register
                    </Button>
                </Modal.Footer>
            </Modal>

            {err ?
                <Modal show={show1}>
                    <Modal.Header closeButton>
                        <Modal.Title>Error</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Please! Fill all the details carefully!!!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose1} className="btn btn-primary mx-auto">
                            Ok
                        </Button>
                    </Modal.Footer>
                </Modal>
                : <span></span>}
        </>
    )
}
