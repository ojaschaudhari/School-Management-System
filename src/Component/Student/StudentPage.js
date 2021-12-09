import React from 'react'
import Loginbar from '../LoginBar'
import Notice from '../Notice'
import SSidebar from './SSidebar'
import './StudentPage.css'

export default function StudentPage() {

    return (
        <>
            <Loginbar />
            <div className="container-fluid my-container">
                <div className="row">
                    <div className="col-lg-2 col-sm-12 p-0">
                        <SSidebar></SSidebar>
                    </div>

                    <div className="col-lg-8 col-sm-12"></div>

                    <div className="col-lg-2 col-sm-12">
                        <Notice></Notice>
                    </div>
                </div>

            </div>
        </>
    )
}
