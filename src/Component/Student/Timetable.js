import React, { Component } from 'react'
import LoginBar from '../LoginBar'
import SSidebar from './SSidebar'
import { ListGroup } from 'react-bootstrap'
import axios from 'axios'

export default class Timetable extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [],
            url: 'http://localhost:3001/'
        }
        this.callAPI = this.callAPI.bind(this)
    }

    componentDidMount() {
        this.callAPI()
    }

    async callAPI() {
        await this.setState({ url: (this.state.url + sessionStorage.getItem("std") + "-timetable") })
        await axios.get(this.state.url).then((res) => {
            this.setState({ items: res.data },console.log(this.state.url))
        }).catch((err) => {
            console.log("error", this.state.url);
        })
    }

    render() {
        return (
            <>
                <LoginBar></LoginBar>
                <div className="container-fluid container-t">
                    <div className="row">
                        <div className="col-2 p-0">
                            <SSidebar></SSidebar>
                        </div>
                        <div className="col-10">
                            <h1 className="display-1">Std - {sessionStorage.getItem("std")} - Timetable</h1>
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
