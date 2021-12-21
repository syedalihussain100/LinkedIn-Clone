import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import { Home } from '@material-ui/icons';
import HeaderOption from './HeaderOption';
import { SupervisorAccount } from '@material-ui/icons';
import { BusinessCenter } from '@material-ui/icons';
import { Notifications } from '@material-ui/icons';
import { Chat } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { auth } from '../config/firebaseservice';
import { logout } from '../features/userSlice';
import LinkedIn from "./download.png"


function Header() {
    const dispatch = useDispatch()

    const logoutUser = () => {
        dispatch(logout());
        auth.signOut()
    }
    return (
        <div className="header">
            <div className="header_left">
                <img src={LinkedIn} alt="logo" />
                <div className="header_search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header_right">
                <HeaderOption Icon={Home} title="Home" />
                <HeaderOption Icon={SupervisorAccount} title="My Network" />
                <HeaderOption Icon={BusinessCenter} title="Jobs" />
                <HeaderOption Icon={Notifications} title="Notification" />
                <HeaderOption Icon={Chat} title="Chat" />
                <HeaderOption avator="https://avatars.githubusercontent.com/u/59026436?v=4" title="me" onClick={logoutUser} />
            </div>
        </div>
    )
}

export default Header


// 