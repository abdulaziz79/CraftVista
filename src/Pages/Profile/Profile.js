import React, { useContext, useEffect, useState } from 'react'
import Styles from "./Profile.module.css"
import image from "../../assets/images/new.jpg"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GradeIcon from '@mui/icons-material/Grade';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../UserContext/UserContext';
import img from "../../assets/images/profile.png"



const Profile = () => {
  const location=useLocation()
  const [workerData,setWorkerData]=useState(null)
  const [dataa, setDataa]= useState([])
  const {user, setUser} = useContext(UserContext)
 const [mine,setMine]=useState(false)
  useEffect(()=>{
    const worker=location.state && location.state
    
    if(user && !worker){
      setMine(true)
      console.log("userrrrrrrrrrrrrrrrrrrrr",user)
      setWorkerData(user)
    }
    else{
      setWorkerData(worker)
    }
    // fetchData()
    // console.log(worker)
  },[location])

  useEffect(()=>{

    fetchData()
    // console.log(worker)
  },[workerData])


  const fetchData=async()=>{
    try {
      const response = await axios.get(`http://localhost:5000/post/readPosts/${workerData._id}`)
      if(response){
      setDataa(response.data)
      console.log(response.data)
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div className={Styles.container}>
      <div className={Styles.top}>
        { workerData&& workerData.image ?        <img src={`http://localhost:5000/${workerData.image}`} className={Styles.img}></img>
  : <img src={img} className={Styles.img} alt='profile picture' /> }
      </div>
      <div className={Styles.bottom}>
        <div className={Styles.bottomLeft}>
        { workerData !==null  && (
          <>
           <p className={Styles.name}>{workerData.name}</p>
        <p className={Styles.email}>{workerData.email}</p>
        <div className={Styles.info}>
            <p className={Styles.location}><LocationOnIcon /> {workerData.location}</p>
            <p className={Styles.location}><CalendarMonthIcon />- Joined April 2022</p>
            <p className={Styles.location}> <GradeIcon sx={{color:"gold"}} /> 4.9 (10)</p>
        </div>
          </>
        )
}
       
        {dataa&& dataa.length>0 && dataa.map((item)=>(
        <div className={Styles.post} key={item._id}>
            <img src={`http://localhost:5000/${workerData.image}`} className={Styles.postProfile}></img>
            <p className={Styles.desc}>{item.description} </p>
           {mine&&(<button> Delete</button>)} 
            <img src={image} className={Styles.postImage}></img>
        </div>
        ))}
        {/* <div className={Styles.post}>
            <img src={image} className={Styles.postProfile}></img>
            <p className={Styles.desc}>A carpenter needed to fix my closet A carpenter needed toq fix my closet A carpenter needed to fix my</p>
            <img src={image} className={Styles.postImage}></img>
        </div> */}
        </div>
        <div className={Styles.bottomRight}>
            <div className={Styles.nb}>
                <p style={{fontSize:"38px", fontWeight:"500", opacity:"0.6", color:"blue"}}> 20</p>
                <p style={{opacity:"0.8"}}>Posts</p>
            </div>
            <div className={Styles.nb}>
                <p style={{fontSize:"38px", fontWeight:"500", opacity:"0.6", color:"blue"}}> 2+</p>
                <p style={{opacity:"0.8"}}>Years of experience</p>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Profile
