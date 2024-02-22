import React, { useEffect } from 'react'
import Styles from "./Workers.module.css"
// import tools from '../../assets/images/tools.jpg'
import PageHero from '../../Components/pageHero/PageHero'
import Masonryy from '../../Components/Masonry/Masonry'
import Spinner from '../../Components/Spinner/Spinner'
import { useState } from 'react'
// import Category from '../../Components/Category/Category'
import Sidebar from '../../Layout/Sidebar/Sidebar'
import NavWorker from '../../Components/NavWorker/NavWorker'
import image from "../../assets/images/men.png"
import axios from 'axios'



const Workers = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const fetchData = async () => {
    setLoading(true);
  
    setTimeout(async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_PATH}/user/read/allWithrates`);
        if (response) {
          setData(response.data);
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false); 
      }
    }, 1000); 
  };
  
  useEffect(()=>{
    fetchData()
  },[])
//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
// };
  if(loading) return <Spinner message="You are about to find the workers" />
  return (
    
    <div className={Styles.container}>
      <Sidebar />
      {/* <Category /> */}
      <div className={Styles.bottom}>
      <div className={Styles.left}>
        <div className={Styles.topLeft}>
        CHOOSE<br /> CATEGORY
        </div>
        <div className={Styles.bottomLeft}>
          <img src={image} className={Styles.img} />
        </div>
        </div>
      <div className={Styles.right}>
        <div className={Styles.nav}>
          <NavWorker />
        </div>
        
      <Masonryy data={data}  />
      </div>
      </div>
    </div>
  )
}

export default Workers
