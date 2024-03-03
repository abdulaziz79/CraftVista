import axios from 'axios'
import Styles from "./Header.module.css"
import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { UserContext } from '../../UserContext/UserContext'
import { toast } from 'react-toastify'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LoginIcon from '@mui/icons-material/Login';
import DashboardIcon from '@mui/icons-material/Dashboard';



const Header = () => {
  const {user, setUser} = useContext(UserContext)
  const navigat = useNavigate()
  const location = useLocation()
  const [bgColor, setBgColor] = useState('transparent');

  const handleLogout = async () => {
    try {
      const logout = await axios.post(`${process.env.REACT_APP_PATH}/logout`, {}, { withCredentials: true })
      setUser(null)
      navigat('/login')
    } catch (error) {
      console.error("Logout error:", error);
    }
  }

  const getPageName = () => {
    const pathname = location.pathname;
    const lasIndex = pathname.lastIndexOf('/')
    const pageName = pathname.substring(lasIndex + 1);
    return pageName || "Home";
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        setBgColor('rgba(18, 12, 55, 0.694)'); 
      } else {
        setBgColor('transparent'); 
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <div className={Styles.navbar} style={{ backgroundColor: bgColor }}>
      {/* sidbar */}
      <Sidebar />
      <div className={Styles.wrapper}>
        <span className={Styles.span}>CraftVista</span>
        <div className={Styles.profile}>{getPageName()}</div>
        {user && user.role!=="admin"? (
          <button onClick={handleLogout} className={Styles.log}><span className={Styles.spann} > logout </span><ExitToAppIcon /> </button>
        ) : user && user.role==="admin"?(
          <Link to="/dashboard">
            <p style={{ cursor: "pointer", color: "lightgray" }} className={Styles.log} ><span className={Styles.spann}>dashboard</span><DashboardIcon /></p>
          </Link>
        )
      :(
        <Link to="/signup">
        <p style={{ cursor: "pointer", color: "lightgray" }} className={Styles.log}><span className={Styles.spann}>signup</span> <LoginIcon /></p>
      </Link>
    )
      
}

      </div>
    </div>
  )
}

export default Header
