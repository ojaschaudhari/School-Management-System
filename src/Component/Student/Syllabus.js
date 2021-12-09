import axios from 'axios'
import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
import LoginBar from '../LoginBar'
import Notice from '../Notice'
import SSidebar from './SSidebar'
import './StudentPage.css'

export default class Syllabus extends Component {
    constructor(props) {
        super(props)

        this.state = {
            phy: [],
            chem: [],
            mat: [],
            bio: [],
            com: [],
            temp: 'http://localhost:3001/',
            url: 'http://localhost:3001/'
        }
        this.callAPI = this.callAPI.bind(this)
    }

    componentDidMount() {
        this.callAPI()
    }

    async callAPI() {
        await this.setState({ url: this.state.temp + sessionStorage.getItem("std") + "syllabusphysics" })
        await axios.get(this.state.url).then((res) => {
            this.setState({ phy: res.data })
        }).catch((err) => { console.log(err) })

        await this.setState({ url: this.state.temp + sessionStorage.getItem("std") + "syllabuschemistry" })
        await axios.get(this.state.url).then((res) => {
            this.setState({ chem: res.data })
        }).catch((err) => { console.log(err) })

        await this.setState({ url: this.state.temp + sessionStorage.getItem("std") + "syllabusmaths" })
        await axios.get(this.state.url).then((res) => {
            this.setState({ mat: res.data })
        }).catch((err) => { console.log(err) })

        await this.setState({ url: this.state.temp + sessionStorage.getItem("std") + "syllabusbiology" })
        await axios.get(this.state.url).then((res) => {
            this.setState({ bio: res.data })
        }).catch((err) => { console.log(err) })

        await this.setState({ url: this.state.temp + sessionStorage.getItem("std") + "syllabuscomputer" })
        await axios.get(this.state.url).then((res) => {
            this.setState({ com: res.data })
        }).catch((err) => { console.log(err) })
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
                        <div className="col-8">
                            <h1 className="display-1"> {sessionStorage.getItem("std")} - Syllabus</h1>

                            <ListGroup className="align-items-start">
                                <h1 className="display-6 ms-5 s-h1"> Physics - Syllabus</h1>
                                {this.state.phy.map((ph) => (
                                    <div key={ph.id}>
                                        <ListGroup.Item className="s-cell">{ph.topic}</ListGroup.Item>
                                    </div>
                                ))}

                                <h1 className="display-6 ms-5 s-h1"> Chemistry - Syllabus</h1>
                                {this.state.chem.map((che) => (
                                    <div key={che.id}>
                                        <ListGroup.Item className="s-cell">{che.topic}</ListGroup.Item>
                                    </div>
                                ))}

                                <h1 className="display-6 ms-5 s-h1"> Maths - Syllabus</h1>
                                {this.state.mat.map((ma) => (
                                    <div key={ma.id}>
                                        <ListGroup.Item className="s-cell">{ma.topic}</ListGroup.Item>
                                    </div>
                                ))}

                                <h1 className="display-6 ms-5 s-h1"> Biology - Syllabus</h1>
                                {this.state.bio.map((bi) => (
                                    <div key={bi.id}>
                                        <ListGroup.Item className="s-cell">{bi.topic}</ListGroup.Item>
                                    </div>
                                ))}

                                <h1 className="display-6 ms-5 s-h1"> Computer - Syllabus</h1>
                                {this.state.com.map((co) => (
                                    <div key={co.id}>
                                        <ListGroup.Item className="s-cell">{co.topic}</ListGroup.Item>
                                    </div>
                                ))}
                            </ListGroup>
                        </div>
                        <div className="col-2 p-0">
                            <Notice></Notice>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
