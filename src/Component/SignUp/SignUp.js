import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import AddAdmin from './AddAdmin';
import AddClerk from './AddClerk';
import AddStudent from './AddStudent';
import AddTeacher from './AddTeacher';

export default function SignUp() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="btn btn-primary mx-auto">
                Sign Up
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                        <AddAdmin></AddAdmin>
                        <AddTeacher></AddTeacher>
                        <AddStudent></AddStudent>
                        <AddClerk></AddClerk>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} className="btn btn-primary mx-auto">
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
