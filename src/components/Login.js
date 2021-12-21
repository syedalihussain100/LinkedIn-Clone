import React, { useState } from 'react'
import "./Login.css";
import { auth } from "../config/firebaseservice";
import { useDispatch } from "react-redux";
import { login } from '../features/userSlice';


function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()
    const loginTotop = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
            .then((userAuth) => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid
                }))
            }).catch(error => alert(error))
    }
    const register = () => {
        if (!name) {
            return alert("Please Enter a Full Name!")
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                return userAuth.user
            }).then((res) => {
                dispatch(login({
                    email: res.email,
                    uid: res.uid,
                }))
            }).catch(error => alert(error.message))
    }
    return (
        <div className='login'>
            <img src="https://e7.pngegg.com/pngimages/323/768/png-clipart-linked-in-icon-linkedin-logo-icons-logos-emojis-tech-companies.png" alt="logo" />
            <form>
                <input type="text" placeholder='Full name (required if registeration!)' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Enter Your Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit' onClick={loginTotop}>Sign In</button>
            </form>
            <p >Not a member? <span className='login_register' onClick={register}>Register Now</span></p>
        </div>
    )
}

export default Login
