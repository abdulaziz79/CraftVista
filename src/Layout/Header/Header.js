import axios from 'axios'
import Styles from "./Header.module.css"
import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../UserContext/UserContext'
import { toast } from 'react-toastify'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'

const Header = () => {
  const {user, setUser}=useContext(UserContext)
  const navigat= useNavigate()
  const location= useLocation()

  const handleLogout=async()=>{
    try {
      const logout = await axios.post(`http://localhost:5000/logout`,{},{withCredentials:true})
      setUser(null)
      navigat('/login')
    } catch (error) {
      console.error("Logout error:", error);
    }
  }
  const getPageName= ()=>{
    const pathname= location.pathname;
    const lasIndex =pathname.lastIndexOf('/')
    const pageName = pathname.substring(lasIndex + 1);
    return pageName || "Home";
  }
  return (
    <div className={Styles.navbar}>
      {/* sidbar */}
      <Sidebar />
      <div className={Styles.wrapper}>
        <span className={Styles.span}>whatever</span>
        <div className={Styles.profile}>{getPageName()}</div>
        {user ? (      <button onClick={handleLogout}> logout </button>
):(<Link to ="/signup "><p style={{cursor:"pointer", color:"lightgray"}}>signup</p></Link>)}
  
      </div>
    </div>
  )
}

export default Header