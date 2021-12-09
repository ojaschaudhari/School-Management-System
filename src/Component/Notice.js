import axios from 'axios'
import React, { Component } from 'react'
import '../Design/Notice.css'

export default class Notice extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [],
            upd: "true"
        }
        this.callAPI = this.callAPI.bind(this)
    }

    callAPI() {
        axios.get('http://localhost:3001/notice').then((response) => {
            this.setState({ items: response.data })
        }).catch((err) => {
            console.log(err);
        })
    }
    componentDidMount() {
        this.callAPI()
    }

    componentDidUpdate() {
        if (this.state.upd === sessionStorage.getItem("update")) {
            this.callAPI()
            sessionStorage.removeItem("update")
        }
    }

    render() {
        return (
            <div className="n-body">
                <h1 className="n-title">News</h1>
                <ol>
                    {this.state.items.map((item) => (
                        <li className="myli" key={item.id}> {item.news} </li>
                    ))}
                </ol>
            </div>
        )
    }
}
