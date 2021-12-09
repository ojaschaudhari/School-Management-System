import axios from 'axios'
import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import Update from './Update'
import './AdminPage.css'

export default class MyTable extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/notice').then(
            (response) => {
                this.setState({ items: response.data })
            }
        ).catch(
            (err) => { console.log(err); }
        )
    }

    render() {
        if (this.props.title === "Student") {
            return (
                <>
                    <Table striped bordered hover responsive variant="light" className="a-table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Mobile No</th>
                                <th scope="col">Email</th>
                                <th scope="col">Standard</th>
                                <th scope="col">physics</th>
                                <th scope="col">chemistry</th>
                                <th scope="col">maths</th>
                                <th scope="col">computer</th>
                                <th scope="col">biology</th>
                                <th scope="col">Total</th>
                                <th scope="col">Percentage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.values.map(item => (
                                <tr key={item.id}>
                                    <td> {item.name} </td>
                                    <td> {item.mobile} </td>
                                    <td> {item.email} </td>
                                    <td> {item.std} </td>
                                    <td> {item.physics} </td>
                                    <td> {item.chemistry} </td>
                                    <td> {item.maths} </td>
                                    <td> {item.computer} </td>
                                    <td> {item.biology} </td>
                                    <td> {item.physics + item.chemistry + item.maths + item.computer + item.biology} </td>
                                    <td> {(item.physics + item.chemistry + item.maths + item.computer + item.biology) / 5} </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </>
            )
        }
        else if (this.props.title === "Teacher" || this.props.title === "Clerk") {
            return (
                <Table striped bordered hover variant="light">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Mobile No</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.values.map(item => (
                            <tr key={item.id}>
                                <td> {item.name} </td>
                                <td> {item.mobile} </td>
                                <td> {item.email} </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )
        }

        else if (this.props.title === "Notice") {
            return (
                <>
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                                <th scope="col">Notice</th>
                                <th scope="col">Update or Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.items.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.news}</td>
                                    <td> {<Update id={item.id} news={item.news} title={this.props.title} />} </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </>
            )
        }
        else {
            return (
                <></>
            )
        }

    }
}
