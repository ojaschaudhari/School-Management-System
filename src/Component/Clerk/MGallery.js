import axios from 'axios'
import React, { Component } from 'react'
import LoginBar from '../LoginBar'
import CSidebar from './CSidebar'
import { Modal, Button } from 'react-bootstrap'
import Editgal from './Editgal'

export default class MGallery extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [],
            show: false,
            newurl: "",
            title: "",
            description: ""
        }
        this.callAPI = this.callAPI.bind(this)
        this.handleShow1 = this.handleShow1.bind(this)
        this.handleClose1 = this.handleClose1.bind(this)
        this.handleNew = this.handleNew.bind(this)
    }

    componentDidMount() {
        this.callAPI()
    }

    callAPI() {
        axios.get('http://localhost:3001/gallery').then((response) => {
            console.log(response.data);
            this.setState({ items: response.data })
        }).catch((error) => {
            console.log(error);
        })
    }

    handleShow1() { this.setState({ show: true }) }
    handleClose1() { this.setState({ show: false }) }

    handleNew() {
        const time = new Date()
        let day = time.getDate()
        let mon = time.getMonth()
        let year = time.getFullYear()
        let val = "Last Updated " + day.toString() + '/' + mon.toString() + '/' + year.toString() + " ago"
        axios.post('http://localhost:3001/gallery', {
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
                <LoginBar />
                <div className="container-fluid container-t">
                    <div className="row">
                        <div className="col-2 p-0">
                            <CSidebar></CSidebar>
                        </div>
                        <div className="col-10 p-0">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="offset-5 col-2">
                                        <Button variant="primary" onClick={this.handleShow1}>
                                            Add New Image
                                        </Button>
                                    </div>
                                </div>
                                <div className="row">
                                    {this.state.items.map((item) => (
                                        <div key={item.id} className="col-lg-4">
                                            <div className="card mb-3 gal-card my-3">
                                                <img src={item.location} className="gal-img" />
                                                <div className="card-body">
                                                    <h5 className="card-title gal-card-title">{item.title}</h5>
                                                    <div className="divider"></div>
                                                    <p className="card-text gal-card-text"> {item.description} </p>
                                                    <div className="divider"></div>
                                                    <p className="card-text gal-card-text"><small className="text-muted">{item.update}</small></p>
                                                </div>
                                            </div>
                                            <Editgal className="mx-auto" id={item.id}
                                                location={item.location} title={item.title} description={item.description}
                                            ></Editgal>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal show={this.state.show} centered onHide={this.handleClose1}>
                    <Modal.Header closeButton>
                        <Modal.Title>Upload New Image</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label>Enter Image URL :-</label>
                        <input type="text" value={this.state.newurl} placeholder="Enter Image URL..."
                            onChange={(e) => this.setState({ newurl: e.target.value })}>
                        </input>

                        <label>Enter Image Title :-</label>
                        <input type="text" value={this.state.title} placeholder="Enter Image Tirle..."
                            onChange={(e) => this.setState({ title: e.target.value })}>
                        </input>
                        <label>Enter Image Description :-</label>
                        <input type="text" value={this.state.description} placeholder="Enter Image Description..."
                            onChange={(e) => this.setState({ description: e.target.value })}>
                        </input>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" className="mx-auto" onClick={this.handleClose1}>
                            Close
                        </Button>
                        <Button variant="primary" className="mx-auto" onClick={this.handleNew}>
                            Update
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}
