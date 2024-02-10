import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Layout/Header/Header'
import Footer from '../Layout/Footer/Footer'

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <div style={{marginTop:"2rem"}}></div>
      <Footer />
    </div>
  )
}

export default Layout
