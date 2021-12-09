import axios from 'axios'
import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import LoginBar from '../LoginBar'
import ASidebar from './ASidebar'

export default class MStudent extends Component {
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

    async callAPI() {
        await axios.get('http://localhost:3001/student').then((res) => {
            this.setState({ items: res.data })
        }).catch((err) => {
            console.log(err);
        })
    }

    render() {
        return (
            <>
                <LoginBar></LoginBar>
                <div className="container-fluid container-t">
                    <div className="row">
                        <div className="col-2 p-0">
                            <ASidebar></ASidebar>
                        </div>
                        <div className="col-10 p-0">
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
                                    {this.state.items.map(item => (
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
                                            <td> {parseInt(item.physics) + parseInt(item.chemistry) + parseInt(item.maths) + parseInt(item.computer) + parseInt(item.biology)} </td>
                                            <td> {(parseFloat(item.physics) + parseFloat(item.chemistry) + parseFloat(item.maths) + parseFloat(item.computer) + parseFloat(item.biology)) / 5} </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
