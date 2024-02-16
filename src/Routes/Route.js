import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './Layout';
import Home from '../Pages/Home/Home';
import ProtectedRoute from './Protected';
import { UserContext } from '../UserContext/UserContext';
import { useContext } from 'react';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Login from '../Pages/Login/Login';
import About from '../Pages/About/About';
import Workers from '../Pages/Workers/Workers';
import Jobs from '../Pages/Jobs/Jobs';
import Profile from '../Pages/Profile/Profile';
import Signup from '../Pages/Signup/Signup';


const Router = () => {
  const {user}= useContext(UserContext)
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path='/profile/:name?' element={<Profile />} />
                
            </Route>
            <Route path="/workers" element={<Workers />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />

            <Route element={
            <ProtectedRoute
            isAllowed={user && user.role ==="admin"}
            redirectPath="/unauthorized" 
            />
            }>
              <Route path='/dashboard' element={<Dashboard />} />

            </Route>
        </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default Router
