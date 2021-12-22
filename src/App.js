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
  console.log('finaldata',user)
  const dispatch = useDispatch();


  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //  login
        dispatch(login({
          displayName: userAuth.displayName,
          email: userAuth.email,
          photoUrl: userAuth.photoURL,
          uid: userAuth.uid
        }))
      } else {
        //  logout
        dispatch(logout())
      }
    })
  }, [])
  console.log(user)
  return (
    <div className="App">
      {!user ? <Login /> : <>
        <Header />
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
