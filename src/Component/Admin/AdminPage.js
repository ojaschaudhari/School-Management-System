import React from 'react'
import './AdminPage.css'
import Notice from '../Notice'
import LoginBar from '../LoginBar'
import ASidebar from './ASidebar'

export default function AdminPage() {

    return (
        <>
            <LoginBar />
            <div className="container-fluid container-t">
                <div className="row">
                    <div className="col-2 p-0">
                        <ASidebar></ASidebar>
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
