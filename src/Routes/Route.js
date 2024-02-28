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
import DashPosts from '../Pages/DashPosts/DashPosts';
import Signup from '../Pages/Signup/Signup';
import Unauthorized from '../Pages/Unauthorized/Unauthorized';
import Overview from '../Pages/Overview/Overview';
import ScrollToTop from '../Components/Scroll';


const Router = () => {
  const {user,checkUser}= useContext(UserContext)
  return (
    <div>
        <BrowserRouter>
        <ScrollToTop />
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/jobs" element={<Jobs />} />
                {/* <Route path='/profile/:name?' element={<Profile />} /> */}
                
            <Route element={
            <ProtectedRoute
            isAllowed={user}
            redirectPath="/unauthorized" 
            />
            }>
                     <Route path='/MyProfile/:name?' element={<Profile />} />
            </Route>
        
                     <Route path='/profile/:name?' element={<Profile />} />
            
            </Route>
            <Route path="/workers" element={<Workers />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/*' element={<Signup />} />


            <Route element={
            <ProtectedRoute
            isAllowed={user && user.role ==="admin"}
            redirectPath="/unauthorized" 
            />
            }>
              <Route path='/dashboard'  element={<Dashboard />} >
                <Route path='overview' index element={<Overview />} />
                <Route path='workers' index element={<Overview />} />
                <Route path='users' index element={<Overview />} />
                <Route path='posts' index element={<DashPosts />} />
                <Route path='categories' index element={<Overview />} />
              </Route>

            </Route>
        </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default Router
