import axios from 'axios';
import React, { useState } from 'react'
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';

export default function YesNo(props) {
    const [rad, setrad] = useState("")
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);

    let val = []
    let nval = 0
    let url = 'http://localhost:3001/temp/' + props.item.id

    function handleYes() {
        setShow1(true)
    }

    function handleNo() {
        setShow2(true)
    }

    function handleAdd() {
        console.log("Success update");
        setShow1(false)
    }

    function handleDelete() {
        axios.delete(url).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
        console.log("seccess delete", url);
        setShow2(false)
    }

    async function handleAdd() {
        await axios.get('http://localhost:3001/student').then(
            (response) => {
                response.data.map((i) => val.push(i.rollno))
                setShow1(false)
            }).catch((error) => {
                console.log(error);
            })

        val.sort(function (a, b) { return a - b });
        nval = val[val.length - 1] + 1
        console.log("val", nval);

        await axios.post('http://localhost:3001/student', {
            name: props.item.name,
            email: props.item.email,
            mobile: props.item.mobile,
            std: props.item.std,
            rollno: nval,
            tenthpercentage: props.item.ten,
            extra: props.item.ext,
            password: props.item.pwd,
            description: props.item.me
        }).then((response) => {
            console.log("res", response);
            setShow1(false)
        }).catch((error) => {
            console.log(error);
        })

        await axios.delete(url).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <>
            <div className="d-flex justify-content-center">

                <div className="form-check me-3">
                    <input className="form-check-input" type="radio" name="permission"
                        value="yes" onClick={handleYes} onClickCapture={(e) => setrad(e.target.value)} />
                    <label className="form-check-label cell-temp">
                        Yes
                    </label>
                </div>


                <div className="form-check ms-3">
                    <input className="form-check-input" type="radio" name="permission"
                        value="no" onClick={handleNo} onClickCapture={(e) => setrad(e.target.value)} />
                    <label className="form-check-label cell-temp">
                        No
                    </label>
                </div>
            </div>

            <Modal show={show1} onHide={handleClose1}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Admission</Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <h6 className="h3 text-center"> You want to Confirm this Admission!!! <br /> Are You Sure?</h6>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose1}>
                        No
                    </Button>
                    <Button variant="primary" onClick={handleAdd}>
                        yes
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                    <Modal.Title>Reject Admission</Modal.Title>
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
