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


const Router = () => {
  const {user}= useContext(UserContext)
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/workers" element={<Workers />} />


            </Route>
            <Route path='/login' element={<Login />} />
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
