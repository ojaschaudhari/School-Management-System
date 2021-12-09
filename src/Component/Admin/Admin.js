import axios from 'axios'
import React, { useState } from 'react'
import '../../Design/Login.css'
import { useNavigate } from 'react-router-dom'
import './AdminPage.css'
import SignUp from '../SignUp/SignUp'

export default function Admin() {

    let navigate = useNavigate()
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    function handleSubmit() {
        axios.get('http://localhost:3001/admin',
            {
                params: {
                    email: username,
                    password: password
                }
            }).then(response => {
                if (response.data.length === 1) {
                    sessionStorage.setItem("username", username)
                    sessionStorage.setItem("post", "admin")
                    navigate("/admin/adminpage")
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
            <div className="background-a">
                <div className="login">
                    <h2> Admin Login</h2>
                    <form >
                        <label>Email address</label><br />
                        <input type="email" name="username" placeholder="Enter Your Email"
                            value={username}
                            onChange={(e) => setusername(e.target.value)}
                        ></input><br />

                        <label>Password</label><br />
                        <input type="password" name="password" placeholder="Enter Your Password"
                            onChange={(e) => setpassword(e.target.value)}
                        ></input><br />
                    </form>
                    <button type="submit" className="btn btn-primary mx-auto"
                        onClick={handleSubmit}
                    >
                        Sign In</button>
                    <p style={{ textAlign: 'center' }}>Or</p>
                    <SignUp></SignUp>
                </div>
            </div>
        </>
    )
}
