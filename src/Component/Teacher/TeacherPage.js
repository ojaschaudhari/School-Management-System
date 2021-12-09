import React from 'react'
import './TeacherPage.css'
import Notice from '../Notice'
import LoginBar from '../LoginBar'
import './TeacherPage.css'
import TSidebar from './TSidebar'

export default function TeacherPage() {
    return (
        <>
            <LoginBar />
            <div className="container-fluid container-t">
                <div className="row">
                    <div className="col-2 p-0">
                        <TSidebar></TSidebar>
                    </div>
                    <div className="col-8"></div>
                    <div className="col-2 p-0">
                        <Notice></Notice>
                    </div>
                </div>
            </div>
        </>
    )
}
