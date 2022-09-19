import React, {Fragment, useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import NavbarApp from './components/Navbar';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  // const userData = JSON.parse(sessionStorage.getItem('user'));


  // useEffect(() => {
  //   console.log(userData);
  // }, [])

  const [userData, setUserData] = useState({});

  const url = 'http://localhost:3000/current_user';

  const checkedStatus = async () => {

    const token = localStorage.getItem('token')

    try {

      const response = await fetch(url, { method: "GET", headers: {
        'Authorization': `${token}`,
        'Content-Type': 'application/json'
      },

    })

      if(!response.ok) {
        throw new Error(response.message)
      }

      const fetchedData = await response.json()

      if (fetchedData.message !== 'Logged.') {
        setUserData(fetchedData)
      }

    }
    catch (error) {

      console.log(error.message)
    }
  }

  const Logout = async (e) => {

    e.preventDefault();

    const url = 'http://localhost:3000/users/sign_out'

    const token = localStorage.getItem('token')

    try {

      const response = await fetch(url, { method: "DELETE", headers: {
        'Authorization': `${token}`,
        'Content-Type': 'application/json'
      },


    })

      if (!response.ok) {
        throw new Error(response.message)
      }
      const fetchedData = await response.json()

      if (fetchedData.message === 'Logged out.') {
        localStorage.clear()
        setUserData({})

      }


      console.log(fetchedData.message)


    }
    catch (error) {

      console.log(error.message)
    }


  }




  useEffect(() => {

   checkedStatus()


  }, [])

  return (

        <Fragment>
        <NavbarApp Logout={Logout} />
        <Router>
        <Routes>
            <Route exact path="/" element={<Home user={userData} />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/login" element={<Login setUserData={setUserData} />} />
        </Routes>
        </Router>
        </Fragment>


  );
}

export default App;
