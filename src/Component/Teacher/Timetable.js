import React, { Component } from 'react'
import LoginBar from '../LoginBar'
import TSidebar from './TSidebar'
import './TeacherPage.css'
import axios from 'axios'
import { ListGroup } from 'react-bootstrap'

export default class Timetable extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3001/t-timetable").then((res) => {
            this.setState({ items: res.data })
        }).catch((err) => {
            console.log("error");
        })
    }

    render() {
        return (
            <>
                <div className="container-fluid container-t">
                    <div className="row">
                        <LoginBar></LoginBar>
                    </div>
                    <div className="row">
                        <div className="col-2 p-0">
                            <TSidebar></TSidebar>
                        </div>
                        <div className="col-10">
                            <h1 className="display-1">Timetable</h1>
                            <ListGroup horizontal className="mt-1 lst">
                                {this.state.items.map((item) => (
                                    <span key={item.id}>
                                        <ListGroup.Item className="list-group-item cell"> {item.day}  </ListGroup.Item>
                                        <ListGroup.Item className="list-group-item cell"> {item.lec1} </ListGroup.Item>
                                        <ListGroup.Item className="list-group-item cell"> {item.lec2} </ListGroup.Item>
                                        <ListGroup.Item className="list-group-item cell"> {item.lec3} </ListGroup.Item>
                                        <ListGroup.Item className="list-group-item cell"> {item.lec4} </ListGroup.Item>
                                        <ListGroup.Item className="list-group-item cell"> {item.lec5} </ListGroup.Item>
                                        <ListGroup.Item className="list-group-item cell"> {item.lec6} </ListGroup.Item>
                                        <ListGroup.Item className="list-group-item cell"> {item.lec7} </ListGroup.Item>
                                        <ListGroup.Item className="list-group-item cell"> {item.lec8} </ListGroup.Item>
                                    </span>
                                ))}
                            </ListGroup>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
