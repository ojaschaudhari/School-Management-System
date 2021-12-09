import axios from 'axios'
import React, { Component } from 'react'
import '../Design/Gallery.css'

export default class Gallery extends Component {
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

    callAPI() {
        axios.get('http://localhost:3001/gallery').then((response) => {
            console.log(response.data);
            this.setState({ items: response.data })
        }).catch((error) => {
            console.log(error);
        })
    }

    render() {

        return (
            <>
                <div className="container-fluid pt-2 gal-c">
                    <div className="row">
                        <h1 className="display-1 mt-3 gal-h1">School Gallery</h1>
                    </div>
                    <div className="row">
                        {this.state.items.map((item) => (
                            <div key={item.id} className="col-lg-4">
                                <div className="card mb-3 gal-card my-3">
                                    <img src={item.location} className="gal-img" />
                                    <div className="card-body">
                                        <h5 className="card-title gal-card-title">{item.title}</h5>
                                        <div className="divider"></div>
                                        <p className="card-text gal-card-text"> {item.description} </p>
                                        <div className="divider"></div>
                                        <p className="card-text gal-card-text"><small className="text-muted">{item.update}</small></p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </>
        )
    }
}
