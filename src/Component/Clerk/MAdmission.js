import React, { Component } from 'react'
import './ClerkPage.css'
import LoginBar from '../LoginBar'
import CSidebar from './CSidebar'
import { Table, InputGroup, FormControl } from 'react-bootstrap'
import axios from 'axios'
import YesNo from './YesNo'

export default class MAdmission extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items1: [],
            items2: [],
            rad: ""
        }
        this.callAPI = this.callAPI.bind(this)
    }

    componentDidMount() {
        this.callAPI()
    }

    async callAPI() {
        await axios.get('http://localhost:3001/temp').then((res) => {
            this.setState({ items1: res.data })
        }).catch((err) => {
            console.log(err);
        })
        await axios.get('http://localhost:3001/student').then((res) => {
            this.setState({ items2: res.data })
        }).catch((err) => {
            console.log(err);
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
                            <h6 className="display-6"> New Student </h6>
                            <Table striped bordered hover responsive variant="light" className="a-table">

                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Mobile No</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Standard</th>
                                        <th scope="col">Extra Curricular</th>
                                        <th scope="col">Admission</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.items1.map(item => (
                                        <tr key={item.id}>
                                            <td> {item.name} </td>
                                            <td> {item.mobile} </td>
                                            <td> {item.email} </td>
                                            <td> {item.std} </td>
                                            <td> {item.extra} </td>
                                            <td className="align-middle">
                                                <YesNo item={item}></YesNo>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <h6 className="display-6"> Old Student </h6>
                            <Table striped bordered hover responsive variant="light" className="a-table">

                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Mobile No</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Standard</th>
                                        <th scope="col">Extra Curricular</th>
                                        <th scope="col">Admission</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.items2.map(item => (
                                        <tr key={item.id}>
                                            <td> {item.name} </td>
                                            <td> {item.mobile} </td>
                                            <td> {item.email} </td>
                                            <td> {item.std} </td>
                                            <td> {item.extra} </td>
                                            <td className="align-middle">
                                                <span>Admission Confirmed</span>
                                            </td>
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
