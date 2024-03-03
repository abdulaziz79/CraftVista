import React from 'react'
import DashSidebar from './DashSidebar/DashSidebar'
import { Outlet } from 'react-router-dom'
import Styles from  './Dashboard.module.css'
import { useContext } from 'react'
import {LayoutContext} from '../../UserContext/LayoutContext'

const Dashboard = () => {
  const {open,setOpen}=useContext(LayoutContext)
  return (
    <div>
      <DashSidebar />
      <section className={`${open?Styles.outletOpen:Styles.outletClose}`}>
                <Outlet />
            </section>
    </div>
  )
}

export default Dashboard
