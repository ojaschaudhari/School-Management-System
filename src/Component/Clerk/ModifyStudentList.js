import React, { Component } from 'react'
import './ClerkPage.css'
import LoginBar from '../LoginBar'
import CSidebar from './CSidebar'
import { Table } from 'react-bootstrap'
import axios from 'axios'
import Modify from './Modify'

export default class ModifyStudentList extends Component {
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
                <LoginBar />
                <div className="container-fluid container-t">
                    <div className="row">
                        <div className="col-2 p-0">
                            <CSidebar></CSidebar>
                        </div>
                        <div className="col-10 p-0">
                            <Table striped bordered hover responsive variant="light" className="a-table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Mobile No</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Standard</th>
                                        <th scope="col">Extra Curricular</th>
                                        <th scope="col">Modify</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.items.map(item => (
                                        <tr key={item.id}>
                                            <td> {item.name} </td>
                                            <td> {item.mobile} </td>
                                            <td> {item.email} </td>
                                            <td> {item.std} </td>
                                            <td> {item.extra} </td>
                                            <td>
                                                <div className="d-flex justify-content-center">
                                                    <Modify item={item}></Modify>
                                                </div>
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
