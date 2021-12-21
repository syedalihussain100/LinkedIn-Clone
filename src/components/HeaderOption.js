import React from 'react';
import "./HeaderOption.css";
import { Avatar } from '@material-ui/core';


function HeaderOption({ avator, title, Icon,onClick }) {
    return (
        <div className='headerOption' onClick={onClick}>
            {Icon && <Icon className="headerOption_icon" />}
            {avator &&  <Avatar className='headeroption_icon' src={avator}/>}
            <h3 className='headerOption_title'>{title}</h3>
        </div>
    )
}

export default HeaderOption
