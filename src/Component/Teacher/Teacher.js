import axios from 'axios'
import '../../Design/Login.css'
import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router'
import './TeacherPage.css'
import SignUp from '../SignUp/SignUp'

const User = createContext();

export default function Teacher() {
    const navigate = useNavigate()
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    function handleSignIn() {
        axios.get('http://localhost:3001/teacher',
            {
                params: {
                    email: username,
                    password: password
                }
            }).then(response => {
                if (response.data.length === 1) {
                    sessionStorage.setItem("username", username)
                    sessionStorage.setItem("post", "teacher")
                    response.data.map((i) => { return sessionStorage.setItem("sub", i.subject)})
                    
                    navigate("/teacher/teacherpage")
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

            <div className="background-t">
                <div className="login">
                    <h2> Teacher Login</h2>
                    <form >
                        <label>Email address</label><br />
                        <input type="email" name="username" placeholder="Enter Your Email"
                            onChange={(e) => setusername(e.target.value)}
                        ></input>
                        <br />

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

export { User };