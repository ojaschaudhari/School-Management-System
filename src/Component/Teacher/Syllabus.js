import React, { Component } from 'react'
import LoginBar from '../LoginBar'
import TSidebar from './TSidebar'
import axios from 'axios'

export default class Syllabus extends Component {
    constructor(props) {
        super(props)

        this.state = {
            std: 0,
            chp: 1,
            topic: "",
            sub: sessionStorage.getItem("sub"),
            url1: "http://localhost:3001/11syllabus",
            url2: "http://localhost:3001/12syllabus",
        }
        this.uploadData = this.uploadData.bind(this)
    }

    uploadData() {
        if (this.state.std === "11") {
            this.state.url1 = this.state.url1 + this.state.sub
            
            axios.post(this.state.url1, {
                topic: this.state.chp + '-' + this.state.topic
            }).then((res) => {
                console.log("success", res)
            }).catch((err) => {
                console.log("err", err)
            })
        }
        else if (this.state.std === "12") {
            this.state.url2 = this.state.url2 + this.state.sub

            axios.post(this.state.url2, {
                topic: this.state.chp + '-' + this.state.topic
            }).then((res) => {
                console.log("success", res)
            }).catch((err) => {
                console.log("err", err)
            })
        }
        else {
            console.log("error",this.state.std);
        }
    }

    render() {
        return (
            <>
                <LoginBar></LoginBar>
                <div className="container-fluid container-t">
                    <div className="row">
                    
                    </div>
                    <div className="row">
                        <div className="col-2 p-0">
                            <TSidebar></TSidebar>
                        </div>
                        
                        <div className="col-3 my-5 p-0">
                        <h1 className="display-1 text-end mb-5 me-3">Add</h1>
                            <label>Add Standard</label>
                            <label>Add Chapter No.</label>
                            <label>Add Topic Name</label>
                        </div>
                        <div className="col-3 mt-5 p-0">
                        <h1 className="display-1 text-start mb-5 ms-3">Syllabus</h1>
                            <input type="number" value={this.state.std}
                                onChange={(e) => { this.setState({ std: e.target.value }) }}
                            />
                            <input type="number" value={this.state.chp}
                                onChange={(e) => { this.setState({ chp: e.target.value }) }}
                            />
                            <input type="text" value={this.state.topic}
                                onChange={(e) => { this.setState({ topic: e.target.value }) }}
                            />
                            <button onClick={this.uploadData} className="btn btn-primary btn-t"> Upload </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
