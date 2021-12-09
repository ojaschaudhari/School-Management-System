import axios from 'axios'
import React, { useState } from 'react'
import '../../Design/Login.css'
import { useNavigate } from 'react-router-dom'
import SignUp from '../SignUp/SignUp'
import './StudentPage.css'

export default function Student() {
    const navigate = useNavigate()
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    function handleSignIn() {
        axios.get('http://localhost:3001/student',
            {
                params: {
                    email: username,
                    password: password
                }
            }).then(response => {
                if (response.data.length === 1) {
                    sessionStorage.setItem("username", username)
                    sessionStorage.setItem("post", "student")
                    response.data.map((i) => {
                            sessionStorage.setItem("std", i.std)
                            sessionStorage.setItem("rollno", i.rollno)  
                    })
                    navigate("/student/studentpage")
                }
                else {
                    console.log("Data is not there");
                }
            }).catch(error => {
                console.log("Err", error);
            });
    }

    return (
        <>
            <div className="background-s">
                <div className="login">
                    <h2> Student Login</h2>
                    <form >
                        <label>Email address</label><br />
                        <input type="email" name="username" placeholder="Enter Your Email"
                            onChange={(e) => setusername(e.target.value)}
                        ></input><br />

                        <label>Password</label><br />
                        <input type="password" name="password" placeholder="Enter Your Password"
                            onChange={(e) => setpassword(e.target.value)}
                        ></input><br />
                    </form>
                    <button type="submit" className="btn btn-primary mx-auto"
                        onClick={handleSignIn}>
                        Sign In</button>
                    <p style={{ textAlign: 'center' }}>Or</p>
                    <SignUp></SignUp>

                </div>
            </div>
        </>
    )
}

