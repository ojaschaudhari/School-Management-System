import axios from 'axios'
import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

export default class Editgal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false,
            newurl: this.props.location,
            title: this.props.title,
            description: this.props.description
        }

        this.handleShow2 = this.handleShow2.bind(this)
        this.handleClose2 = this.handleClose2.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
    }

    handleShow2() { this.setState({ show: true }) }
    handleClose2() { this.setState({ show: false }) }

    handleEdit() {
        const time = new Date()
        let day = time.getDate()
        let mon = time.getMonth()
        let year = time.getFullYear()
        let val = "Last Updated " + day.toString() + '/' + mon.toString() + '/' + year.toString() + " ago"
        let url = 'http://localhost:3001/gallery/' + this.props.id
        axios.patch(url, {
            location: this.state.newurl,
            title: this.state.title,
            description: this.state.description,
            update: val
        }).then((response) => {
            console.log(response);
            this.setState({ show: false })
        }).catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            <>
                <Button variant="primary" onClick={this.handleShow2}>Edit
                </Button>
                <Modal show={this.state.show} centered onHide={this.handleClose2}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Image Data</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label>Enter Image URL :-</label>
                        <input type="text" value={this.state.newurl} placeholder="Enter Image URL..."
                            onChange={(e) => this.setState({ newurl: e.target.value })}>
                        </input>

                        <label>Enter Image Title :-</label>
                        <input type="text" value={this.state.title} placeholder="Enter Image Title..."
                            onChange={(e) => this.setState({ title: e.target.value })}>
                        </input>
                        <label>Enter Image Description :-</label>
                        <input type="text" value={this.state.description} placeholder="Enter Image Description..."
                            onChange={(e) => this.setState({ description: e.target.value })}>
                        </input>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" className="mx-auto" onClick={this.handleClose2}>
                            Close
                        </Button>
                        <Button variant="primary" className="mx-auto" onClick={this.handleEdit}>
                            Update
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}
