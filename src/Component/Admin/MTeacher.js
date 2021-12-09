import axios from 'axios'
import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import LoginBar from '../LoginBar'
import ASidebar from './ASidebar'

export default class MTeacher extends Component {
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
        await axios.get('http://localhost:3001/teacher').then((res) => {
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
                            <Table striped bordered hover variant="light">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Mobile No</th>
                                        <th scope="col">Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.items.map(item => (
                                        <tr key={item.id}>
                                            <td> {item.name} </td>
                                            <td> {item.mobile} </td>
                                            <td> {item.email} </td>
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
