import axios from 'axios'
import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

export default class Update extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            notice: "",
            url: 'http://localhost:3001/notice'
        }
        this.update = this.update.bind(this)
        this.delete = this.delete.bind(this)
        this.handleShow = this.handleShow.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    handleShow = () => { this.setState({ show: true }) }
    handleClose = () => { this.setState({ show: false }) }

    click = () => {
        if (this.props.title === "Notice") {
            this.setState({ show: true })
        }
    }

    update = () => {
        this.state.url = this.state.url + "/" + this.props.id

        axios.put(this.state.url, {
            news: this.state.notice
        }).then((rsp) => {
            console.log(rsp);
            sessionStorage.setItem("update", "true")
        }).catch((err) => {
            console.log(err);
        })
        this.setState({ show: false })
    }

    delete = () => {
        if (this.props.title === "Notice") {
            console.log("student update");
        }
    }

    render() {
        return (
            <>
                <button onClick={this.click}>Update {this.props.title}</button>

                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label>Old News:- </label>
                        <label>{this.props.news}</label>
                        <label>Updated News:- </label>
                        <input type="text" placeholder="Enter Updated Notice"
                            value={this.state.notice}
                            onChange={(e) => { this.setState({ notice: e.target.value }) }}
                        ></input>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.update}>
                            Update
                        </Button>
                    </Modal.Footer>
                </Modal>
                OR
                <button onClick={this.delete}>Delete {this.props.title}</button>
            </>
        )
    }
}
