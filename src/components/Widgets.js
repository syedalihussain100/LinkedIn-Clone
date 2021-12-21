import { FiberManualRecord, Info } from '@material-ui/icons';
import React from 'react';
import "./Widgets.css";

function Widgets() {
    const getdata = (heading, title) => {
        return <div className='widgets_article'>
            <div className="widgetsarticle_left">
                <FiberManualRecord />
            </div>
            <div className="widgets_article_right">
                <h3>{heading}</h3>
                <p>{title}</p>
            </div>
        </div>
    }
    return (
        <div className='widgets'>
            <div className="widgets_headers">
                <h2>LinkedIn News</h2>
                <Info />
            </div>
            {getdata("Muhemin", 'top')}
            {getdata("Muzammil", 'top News Here')}
            {getdata("Zaid", 'Javascript Closuer!')}
            {getdata("Rahul", 'React.js Developer!')}
            {getdata("Danish", 'Backend Developer!')}
        </div>
    );
}


export default Widgets
