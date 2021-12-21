import React, { useState, useEffect } from 'react'
import "./Feed.css";
import { Create } from '@material-ui/icons';
import InputOption from './InputOption';
import { Image } from '@material-ui/icons';
import { Subscriptions } from "@material-ui/icons";
import { EventNote } from "@material-ui/icons";
import { CalendarViewDay } from "@material-ui/icons";
import Post from './Post';
import { db } from "../config/firebaseservice"
import firebase from 'firebase/compat/app';
import LoadingGif from "./icon.gif";
import FlipMove from 'react-flip-move';

function Feed() {
    const [input, setInput] = useState("");
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        db.collection('posts').orderBy("timestamp", "desc").onSnapshot(snapshot => (
            setPost(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))
        setTimeout(() => {
            setLoading(false)
        }, 5000);
    }, [post])

    const handlesubmit = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name: "Muhemin ALi",
            description: "hello description how are you!",
            message: input,
            photoUrl: "https://avatars.githubusercontent.com/u/59026436?v=4",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput("");
    }

    return (
        <div className='feed'>
            <div className="feed_inputcontainer">
                <div className="feed_input">
                    <Create />
                    <form onSubmit={handlesubmit}>
                        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter Your Value' />
                        <button type='submit' />
                    </form>
                </div>
                {/* feed input_option */}
                <div className="input_feedoption">
                    <InputOption Icon={Image} title="Photo" color="#70B5F9" />
                    <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
                    <InputOption Icon={EventNote} title="Event" color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDay} title="Write Article" color="#7FC15E" />
                </div>
                {/* post */}

                {loading ? <div className='loading'><img src={LoadingGif} alt="logo" /></div> : <>
                    <FlipMove>
                        {post.map(({ id, data: { name, message, description, photoUrl } }) => (
                            <Post
                                key={id}
                                name={name}
                                message={message}
                                description={description}
                                photoUrl={photoUrl}
                            />
                        ))}
                    </FlipMove>
                </>}

            </div>
        </div>
    )
}

export default Feed
