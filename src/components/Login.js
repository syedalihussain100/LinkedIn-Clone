import React from 'react'
import "./Login.css";
import { auth } from "../config/firebaseservice";
import { useDispatch } from "react-redux";
import { login } from '../features/userSlice';
import Pic from "./pic.png"
import firebase from "firebase/compat/app";

function Login() {

    const dispatch = useDispatch()

    const google = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(googleProvider).then((res) => {
            console.log(res.user);
            dispatch(login({
                displayName: res.user.displayName,
                email: res.user.email,
                photoURL: res.user.photoURL,
                uid: res.user.uid
            }))
        }).catch((err) => console.log(err.message));
    }


    // const loginTotop = (e) => {
    //     e.preventDefault()

    //     auth.signInWithEmailAndPassword(email, password)
    //         .then((userAuth) => {
    //             dispatch(login({
    //                 email: userAuth.user.email,
    //                 uid: userAuth.user.uid
    //             }))
    //         }).catch(error => alert(error))
    // }
    // const register = () => {
    //     if (!name) {
    //         return alert("Please Enter a Full Name!")
    //     }
    //     auth.createUserWithEmailAndPassword(email, password)
    //         .then((userAuth) => {
    //             return userAuth.user
    //         }).then((res) => {
    //             dispatch(login({
    //                 email: res.email,
    //                 uid: res.uid,
    //             }))
    //         }).catch(error => alert(error.message))
    // }
    return (
        <div className='login'>
            <img src={Pic} alt="logo" />

            <button className='btn' onClick={google}>SignIn With Google</button>

        </div>
    )
}

export default Login
