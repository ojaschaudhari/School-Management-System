import axios from 'axios';
import React, { useState } from 'react'
import LoginBar from '../LoginBar';
import TSidebar from './TSidebar';
import './TeacherPage.css'

export default function Result() {

    const [rollno, setrollno] = useState(1)
    const [info, setinfo] = useState([])
    const [std, setstd] = useState(0)
    const [id, setid] = useState(1)
    const [show, setshow] = useState(true)
    const [view, setview] = useState(false)

    const [phy, setphy] = useState("")
    const [che, setche] = useState("")
    const [mat, setmat] = useState("")
    const [com, setcom] = useState("")
    const [bio, setbio] = useState("")
    let url = 'http://localhost:3001/student/'
    const temp = 'http://localhost:3001/student/'

    function getStudentData() {
        axios.get('http://localhost:3001/student', {
            params: {
                rollno: rollno,
                std: std
            }
        }).then((response) => {
            if (response.data.length === 1) {
                setid(response.data[0].id)
                setinfo(response.data)
                setview(true)
                setshow(false)
            }
        }).catch((err) => {
            console.log("error", url);
        })
    }

    async function handleUpload() {
        url = temp + id
        await axios.patch(url, {
            physics: phy,
            chemistry: che,
            maths: mat,
            computer: com,
            biology: bio
        }).then((response) => {
            console.log("data", response.data.status);
        }).catch((err) => {
            console.log("error", err);
        })
        setview(false)
        setshow(true)
        url = ""
        console.log("url", url);
    }

    return (
        <>
            <LoginBar></LoginBar>
            <div className="container-fluid h-100 container-t">
                <div className="row">
                    <div className="col-lg-2 col-sm-12 p-0">
                        <TSidebar></TSidebar>
                    </div>
                    <div className="col-lg-10 col-sm-12 p-0">
                        <h1 className="display-1">Result Upload</h1>
                        {show ?
                            <div className="container-fluid mt-5">
                                <div className="row my-2">
                                    <div className="col-4">
                                        <label className="s-label">Standard</label>
                                    </div>
                                    <div className="col-4">
                                        <input type="number" placeholder="Enter Student Standard"
                                            onChange={(e) => setstd(e.target.value)}
                                        ></input>
                                    </div>
                                </div>
                                <div className="row my-2">
                                    <div className="col-4">
                                        <label className="s-label">Roll No</label>
                                    </div>
                                    <div className="col-4">
                                        <input type="number" placeholder="Enter Student Roll No."
                                            onChange={(e) => setrollno(e.target.value)}
                                        ></input>
                                    </div>
                                </div>

                                <div className="row my-2">
                                    <div className="offset-3 col-2">
                                        <button onClick={getStudentData} className="btn btn-primary btn-t">Get</button>
                                    </div>
                                </div>

                            </div>
                            : <span></span>}

                        {view ?
                            <div>

                                {info.map(item => (
                                    <div key={item.id}>
                                        <div className="row my-2">
                                            <div className="col-4">
                                                <label>Name :- </label>
                                            </div>
                                            <div className="col-4">
                                                <label>{item.name}</label>
                                            </div>
                                        </div>

                                        <div className="row my-2">
                                            <div className="col-4">
                                                <label>Standard :- </label>
                                            </div>
                                            <div className="col-4">
                                                <label>{item.std}</label>
                                            </div>
                                        </div>

                                        <div className="row my-2">
                                            <div className="col-4">
                                                <label>Email Address :- </label>
                                            </div>
                                            <div className="col-4">
                                                <label>{item.email}</label>
                                            </div>
                                        </div>

                                        <div className="row my-2">
                                            <div className="col-4">
                                                <label>Mobile No :- </label>
                                            </div>
                                            <div className="col-4">
                                                <label>{item.mobile}</label>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <div className="row my-2">
                                    <div className="col-4">
                                        <label>Physics :-</label>
                                    </div>
                                    <div className="col-4">
                                        <input type="number" placeholder="Enter physics Marks..."
                                            onChange={(e) => setphy(e.target.value)}
                                        ></input>
                                    </div>
                                </div>

                                <div className="row my-2">
                                    <div className="col-4">
                                        <label>Chemistry :- </label>
                                    </div>
                                    <div className="col-4">
                                        <input type="number" placeholder="Enter chemistry Marks..."
                                            onChange={(e) => setche(e.target.value)}
                                        ></input>
                                    </div>
                                </div>

                                <div className="row my-2">
                                    <div className="col-4">
                                        <label>Maths :- </label>
                                    </div>
                                    <div className="col-4">
                                        <input type="number" placeholder="Enter maths Marks..."
                                            onChange={(e) => setmat(e.target.value)}
                                        ></input>
                                    </div>
                                </div>

                                <div className="row my-2">
                                    <div className="col-4">
                                        <label>Computer :- </label>
                                    </div>
                                    <div className="col-4">
                                        <input type="number" placeholder="Enter computer Marks..."
                                            onChange={(e) => setcom(e.target.value)}
                                        ></input>
                                    </div>
                                </div>

                                <div className="row my-2">
                                    <div className="col-4">
                                        <label>Biology :- </label>
                                    </div>
                                    <div className="col-4">
                                        <input type="number" placeholder="Enter biology Marks..."
                                            onChange={(e) => setbio(e.target.value)}
                                        ></input>
                                    </div>
                                </div>

                                <div className="row my-2">
                                    <div className="offset-3 col-1">
                                        <button onClick={handleUpload} className="btn btn-primary btn-t">Update</button>
                                    </div>
                                </div>


                            </div> : <span></span>
                        }
                    </div>
                </div>
            </div>

        </>
    )
}
