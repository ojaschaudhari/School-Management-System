import React, { Component } from 'react'
import { Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import student from '../img/student.jpg'
import principal from '../img/principal.jpg'
import '../Design/Home.css'
import AdCards from './AdCards'
import axios from 'axios'

export default class Home extends Component {
    render() {
        return (
            <>

                <div className="box-1-col p-0">
                    <Container className="box-1-col p-0" fluid="true">
                        <Row>
                            <Col>
                                <img
                                    alt=""
                                    src={student}
                                    className="d-inline-block align-top std box-1-col"
                                />
                            </Col>
                        </Row>
                        <Row className="quote py-5 px-0 m-0" >
                            <Col className="my-auto">
                                <p className="quote">
                                    An investment in knowledge pays the best interest.
                                </p>
                                <p className="author">
                                    - Benjamin Franklin
                                </p>
                            </Col>
                            <Col>
                                <img
                                    alt=""
                                    src={principal}
                                    className="d-inline-block align-top prin"
                                />
                            </Col>
                        </Row>
                    </Container>

                </div>
            </>
        )
    }
}
