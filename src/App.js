import React, { useEffect } from 'react';
import './App.css';
import Header from "./components/Header";
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import { selectUser, logout, login } from './features/userSlice';
import { useSelector, useDispatch } from "react-redux";
import Login from './components/Login';
import { auth } from './config/firebaseservice';
import Widgets from './components/Widgets';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //  login
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid
        }))
      } else {
        //  logout
        dispatch(logout())
      }
    })
  }, [])
  // console.log(user)
  return (
    <div className="App">
      <Header />

      {!user ? <Login /> : <>
        <div className='app_body'>
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
        {/* app body */}
        {/* sidebar */}
        {/* Feed */}
        {/* widgets */}
      </>

      }
    </div>
  );
}

export default App;
