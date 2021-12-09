import React from 'react'
import './ClerkPage.css'
import Notice from '../Notice'
import LoginBar from '../LoginBar'
import CSidebar from './CSidebar'

export default function ClerkPage() {
    return (
        <>
            <LoginBar />
            <div className="container-fluid container-t">
                <div className="row">
                    <div className="col-2 p-0">
                        <CSidebar></CSidebar>
                    </div>
                    <div className="col-8">

                    </div>
                    <div className="col-2 p-0">
                        <Notice></Notice>
                    </div>
                </div>
            </div>
        </>
    )
}
