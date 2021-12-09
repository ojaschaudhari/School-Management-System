import React, { Component } from 'react'
import principal from '../img/principal.jpg'
import '../Design/Mycard.css'
import { Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'

export default class AdCards extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: []
        }
        this.callAPI = this.callAPI.bind(this)
    }

    componentDidMount() {
        this.callAPI()
    }

    callAPI() {
        axios.get('http://localhost:3001/admin').then(
            (response) => {
                this.setState({ items: response.data })
            }).catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="box-1-col">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6 my-col-1">
                            <h1 className="display-1 py-5 my-h1"> 400+ Students </h1>
                        </div>
                        <div className="col-6 my-col-2">
                            <h1 className="display-3 py-5 my-h1"> Including 3 Branch </h1>
                        </div>
                    </div>
                </div>

                <Container className="box-1-col">
                    <Row>
                        <h1 className="display-1 mt-5"> Our Trustee </h1>
                    </Row>

                    <Row>
                        {this.state.items.map((item) => (
                            <Col lg={4} key={item.id}>
                                <div className="card my-5 mycard">
                                    <img src={principal} className="card-img-top rounded p-5 b-0" alt="..." />
                                    <div className="card-body">
                                        <h4 className="card-title my-card-title">{item.name}</h4>
                                        <p className="card-text my-card-text">{item.description}</p>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item my-list-group">{item.email}</li>
                                        <li className="list-group-item my-list-group">{item.mobile}</li>
                                    </ul>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        )
    }
}
