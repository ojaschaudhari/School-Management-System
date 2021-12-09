import axios from 'axios'
import React, { Component } from 'react'
import LoginBar from '../LoginBar'
import SSidebar from './SSidebar'

export default class Result extends Component {
    constructor(props) {
        super(props)

        this.state = {
            url: 'http://localhost:3001/student',
            items: [],
            msg: true
        }
        this.callAPI = this.callAPI.bind(this)
    }

    componentDidMount() {
        this.callAPI()
    }

    async callAPI() {
        await axios.get('http://localhost:3001/student', {
            params: {
                email: sessionStorage.getItem("username"),
                rollno: sessionStorage.getItem("rollno")  
            }
        }
        ).then((res) => {
            console.log(res.data);
            if (res.data[0].physics == null) {
                this.setState({ msg: true })
            }
            else {
                this.setState({ items: res.data })
                this.setState({ msg: false })
            }
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
                            <SSidebar></SSidebar>
                        </div>
                        <div className="col-10">

                            {this.state.msg ? <h1 className=""> Result is not declare yet. </h1>
                                : <span>
                                    {this.state.items.map((item) => (
                                        <div key={item.id} className="container-fluid">
                                            <div className="row s-label">
                                                <div className="col-6 text-end">
                                                    <label>Name :- </label>
                                                    <label>Roll No :- </label>
                                                    <label>Email Address :- </label>
                                                    <label>Physics :- </label>
                                                    <label>Chemistry :- </label>
                                                    <label>Maths :- </label>
                                                    <label>Computer :- </label>
                                                    <label>Biology :- </label>
                                                    <label>Total :- </label>
                                                    <label>Percentage :- </label>
                                                </div>
                                                <div className="col-6 text-start">
                                                    <label>{item.name}</label>
                                                    <label>{item.rollno}</label>
                                                    <label>{item.email}</label>
                                                    <label>{item.physics}</label>
                                                    <label>{item.chemistry}</label>
                                                    <label>{item.maths}</label>
                                                    <label>{item.computer}</label>
                                                    <label>{item.biology}</label>
                                                    <label>
                                                        {parseInt(item.biology)
                                                            + parseInt(item.physics)
                                                            + parseInt(item.chemistry)
                                                            + parseInt(item.maths)
                                                            + parseInt(item.computer)}
                                                    </label>
                                                    <label>
                                                        {(parseFloat(item.biology)
                                                            + parseFloat(item.physics)
                                                            + parseFloat(item.chemistry)
                                                            + parseFloat(item.maths)
                                                            + parseFloat(item.computer)) / 5} %
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </span>
                            }
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
