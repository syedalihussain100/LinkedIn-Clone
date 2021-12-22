import React from 'react'
import "./Sidebar.css";
import { Avatar } from '@material-ui/core';
import { selectUser } from '../features/userSlice';
import { useSelector } from "react-redux"

function Sidebar() {
    const { displayName, email, photoUrl } = useSelector(selectUser);
    console.log('sidebarchecking', displayName, email)
    return (
        <div className='sidebar'>
            <div className="sidebar_top">
                <img src="https://media.istockphoto.com/photos/elegance-composition-picture-id598230356?k=20&m=598230356&s=612x612&w=0&h=Mfr_PwCtasE3-_XUauJJDR004S_52dNE31L5G9oasks=" alt="logo" />
                <Avatar className='sidebar_avator' src={photoUrl} />
                <h2>{displayName}</h2>
                <h4>{email}</h4>
            </div>

            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who Viewed You</p>
                    <p className='sidebar_statnumber'>2,543</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views On Post</p>
                    <p className='sidebar_statnumber'>4,543</p>
                </div>
            </div>
            <div className="sidebar_bottom">
                <p>Recent</p>
                <div className='sidebar_recentItem'>
                    <p><span className='one'>#</span> html</p>
                    <p><span className='one'>#</span> css</p>
                    <p><span className='one'>#</span> javascript</p>
                    <p><span className='one'>#</span> es6</p>
                    <p><span className='one'>#</span> Frontend developer</p>
                    <p><span className='one'>#</span> Backend Developer</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
