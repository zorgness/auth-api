import React, {Fragment, useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import NavbarApp from './components/Navbar';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

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
      fetchedData.message !== 'Logged.' && setUserData(fetchedData)

    }
    catch (error) {

      console.log(error.message)
    }
  }

  console.log(userData)

  useEffect(() => {

   checkedStatus()

  }, [])

  return (

        <Fragment>
        <NavbarApp/>
        <Router>
        <Routes>
            <Route exact path="/" element={<Home user={userData} />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/login" element={<Login />} />
        </Routes>
        </Router>
        </Fragment>


  );
}

export default App;
