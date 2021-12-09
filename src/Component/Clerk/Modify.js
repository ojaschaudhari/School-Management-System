import axios from 'axios';
import React, { useState } from 'react'
import { Modal, Button, Container, Row, Col, Form } from 'react-bootstrap';

export default function Modify(props) {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [name, setname] = useState(props.item.name);
    const [mobile, setmobile] = useState(props.item.mobile);
    const [email, setemail] = useState(props.item.email);
    const [std, setstd] = useState(props.item.std);
    const [err1, seterr1] = useState(false);
    const [err2, seterr2] = useState(false);
    const [err3, seterr3] = useState(false);
    const [err4, seterr4] = useState(false);
    const url = 'http://localhost:3001/student/' + props.item.id

    async function handleUpdate() {
        axios.patch(url, {
            name: name,
            mobile: mobile,
            email: email,
            std: std
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
        setShow1(false)
    }

    function handleDelete() {
        axios.delete(url).then((response)=>{
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        })
        setShow2(false)
    }

    return (
        <>
            <button className="btn-primary me-4 btn-c" onClick={handleShow1}>Modify</button>

            <Modal centered size="lg" show={show1} onHide={handleClose1}>
                <Modal.Header closeButton>
                    <Modal.Title><span className="display-6">Update Information</span></Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>

                        <Row className="my-2">
                            <Col lg={4} lg={{ offset: '3' }} className="text-center">Old Information</Col>
                            <Col lg={5}>New Information</Col>
                        </Row>

                        <Row className="my-2">
                            <Col lg={3} className="text-end">Name:-</Col>
                            <Col lg={4} className="text-start">{props.item.name}</Col>
                            <Col lg={5}>

                                <input type="text" placeholder="Your Full Name..."
                                    value={name} onChange={(e) => setname(e.target.value)}
                                    onBlurCapture={(e) => e.target.value.length === 0 ? seterr1(true) : seterr1(false)}
                                ></input>

                                {err1 ?
                                    <span style={{ color: '#f00' }}> This field is necesary.</span> :
                                    <span></span>}
                            </Col>
                        </Row>

                        <Row className="my-2">
                            <Col lg={3} className="text-end">Mobile:-</Col>
                            <Col lg={4} className="text-start">{props.item.mobile}</Col>
                            <Col lg={5}>

                                <input type="number" placeholder="Your Phone Number..."
                                    value={mobile} onChange={(e) => setmobile(e.target.value)}
                                    onBlurCapture={(e) => e.target.value.length === 10 ? seterr2(false) : seterr2(true)}
                                ></input>

                                {err2 ?
                                    <span style={{ color: '#f00' }}>Mobile numbers have must be ten digits.</span> :
                                    <span></span>}
                            </Col>
                        </Row>

                        <Row className="my-2">
                            <Col lg={3} className="text-end">Email Address:-</Col>
                            <Col lg={4} className="text-start">{props.item.email}</Col>
                            <Col lg={5}>

                                <input type="email" placeholder="Your Email Address..."
                                    value={email} onChange={(e) => setemail(e.target.value)}
                                    onBlurCapture={(e) => e.target.value.length === 0 ? seterr3(true) : seterr3(false)}
                                ></input>

                                {err3 ?
                                    <span style={{ color: '#f00' }}> This field is necesary.</span> :
                                    <span></span>}
                            </Col>
                        </Row>

                        <Row className="my-2">
                            <Col lg={3} className="text-end">Standard:-</Col>
                            <Col lg={4} className="text-start">{props.item.std}</Col>
                            <Col lg={5}>

                                <Form.Select value={std} onChange={(e) => setstd(e.target.value)}
                                    onBlurCapture={(e) => e.target.value === "0" ? seterr4(true) : seterr4(false)}>
                                    <option value="0">Open this select menu</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </Form.Select>

                                {err4 ?
                                    <span style={{ color: '#f00' }}>This field is necesary.</span> :
                                    <span></span>}
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose1}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            {/*------------------------------ DELETE ------------------------------*/}
            <button className="btn-primary ms-4 btn-c" onClick={handleShow2}>Delete</button>

            <Modal centered show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                    <Modal.Title><span className="display-6">Delete Information</span></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h6 className="h3 text-center">Are You Sure?</h6>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2} className="mx-auto">
                        No
                    </Button>
                    <Button variant="primary" onClick={handleDelete} className="mx-auto">
                        yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
