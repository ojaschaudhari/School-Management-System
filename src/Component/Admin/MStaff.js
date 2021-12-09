import React, { Component } from 'react'
import LoginBar from '../LoginBar'
import ASidebar from './ASidebar'


export default class MStaff extends Component {
    render() {
        return (
            <>
                <LoginBar></LoginBar>
                <div className="container-fluid container-t">
                    <div className="row">
                        <div className="col-2 p-0">
                            <ASidebar></ASidebar>
                        </div>
                        <div className="col-8"></div>
                        <div className="col-2 p-0">
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
