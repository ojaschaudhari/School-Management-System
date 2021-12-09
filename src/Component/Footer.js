import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import email from '../img/email.png'
import phone from '../img/phone.png'
import location from '../img/location.png'
import '../Design/Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div >
                <Container style={{ padding: 25 }} fluid className="footer">
                    <Row>

                        <Col>

                            <h3 className="f-h3">Covid-19 Disclaimer</h3>
                            <div className="div-1"></div>
                            <p className="span-2">Our school adheres to the guidelines released periodically by the Government of India and The Ministry of Health & Family Welfare Directorate General of Health Services (EMR Division).</p>
                        </Col>

                        <Col>
                            <h3 className="f-h3">Useful Links</h3>
                            <div className="div-1"></div>
                            <span className="span-2">News</span><br />
                            <span className="span-2">Achievements</span><br />
                            <span className="span-2">Gallery</span><br />
                            <span className="span-2">FAQs</span><br />
                            <span className="span-2">Careers</span><br />
                            <span className="span-2">About Us</span><br />
                            <span className="span-2">Contact Us</span><br />
                        </Col>

                        <Col>
                            <h3 className="f-h3">Contact Us</h3>
                            <div className="div-1"></div>
                            <p className="span-2">
                                <span className="span-1">
                                    <img alt="" src={location} />
                                </span>
                                A B SCHOOL, Nr. city Tower, Grid Road, Kaliawadi, Navsari
                            </p>
                            <p className="span-2">
                                <span className="span-1">
                                    <img alt="" src={phone} />
                                </span>
                                9408189749, 02637-237001 / 002
                            </p>
                            <p className="span-2">
                                <span className="span-1">
                                    <img alt="" src={email} />
                                </span>
                                abhighersecondaryschool@gmail.com
                            </p>
                        </Col>

                    </Row>
                    <Row className="my-3">
                        <p className="span-2">CopyRight © 2021 All right are reserved by A B SCHOOL SURAT | Managed by Me</p>
                    </Row>
                </Container>
            </div>
        )
    }
}
