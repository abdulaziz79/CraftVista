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
import Addpost from './AddPost/Addpost';
import { Menu, MenuItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import MoreVertIcon from '@mui/icons-material/MoreVert';




const Profile = () => {
  

  const location=useLocation()
  const [workerData,setWorkerData]=useState(null)
  const [dataa, setDataa]= useState([])
  const [addPost, setAddPost] = useState(false)
  const {user, setUser} = useContext(UserContext)
  const [mine,setMine]=useState(false)
  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = useState(0);
  const [formData, setFormData] = useState({
    rater:user && user._id,
    rated:''
  })
  console.log(user)
  console.log(workerData)

  const handleChange = (event, newValue) => {
    setValue(newValue)
    handleSubmit(newValue)

  };

 const handleClose = () => {
   setAnchorEl(null);
 };

console.log("userrrrrrrrrrrrrr jot ounnn")
  useEffect(()=>{
    const worker=location.state && location.state
    console.log(worker)
    console.log(user)
    if(user && worker===null){
      setMine(true)
      console.log("userrrrrrrrrrrrrrrrrrrrr",user)
      setWorkerData(user)
    }
    else{
      setWorkerData(worker)
      setFormData(prev => ({ ...prev,"rated":worker._id,'rater':user&&user._id}));

    }
  },[location,user])

  useEffect(()=>{

    fetchData()
    // console.log(worker)
  },[workerData])

  const handleSubmit= async(value)=>{
    // setFormData(prev => ({ ...prev, 'value': value }));
    const rateData={...formData,'value':value}
    try {
      const response = await axios.post(`${process.env.REACT_APP_PATH}/rate/create`,rateData)
      if(response){
        console.log("responsssssssssse", response.data)
        fetchData()
        // setWorkerData(prevWorkerData => ({
        //   ...prevWorkerData, // Keep existing workerData properties
        //   'rate': response.data.average, // Update rate with average from response
        //   'number': response.data.number // Update number with number from response
        // }));    
        }
    } catch (error) {
      console.log(error.message)
    }
  }

  const deletePost = async (id)=>{
    console.log(id)
    try {
      const response= await axios.delete(`${process.env.REACT_APP_PATH}/post/delete/${id}`)
      if(response){
        console.log(response.data)
        fetchData()
        handleClose()
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  const fetchData=async()=>{
    try { 
      if (workerData && workerData._id){
      const response = await axios.get(`${process.env.REACT_APP_PATH}/post/readPosts/${workerData._id}`)
      if(response){
      setDataa(response.data)
      console.log("dataaaaaaa",response.data)
      }
    }
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div className={Styles.container}>
      <div className={Styles.top}>
        { workerData&& workerData.image ?( <img src={`${process.env.REACT_APP_PATH}/${workerData.image}`} className={Styles.img}></img>)
  : (<img src={img} className={Styles.img} alt='profile picture' />) }
             {mine&&(<button onClick={()=>setAddPost(prev => !prev) } className={Styles.btnAdd}> +</button>)} 

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
            <p className={Styles.location}> <GradeIcon sx={{color:"gold"}} /> {workerData.rate} ({workerData.number})</p>
        </div>
          </>
        )
}
       
        {dataa&& dataa.length>0 && dataa.map((item,index)=>(
        <div className={Styles.post} key={index}>
          <div className={Styles.postTop}>
          {workerData && workerData.image ? <img src={`${process.env.REACT_APP_PATH}/${workerData.image}`} className={Styles.postProfile}></img> 
          : <img src={img} className={Styles.postProfile}></img> }
          <div className={Styles.nameLocation}>
          <p className={Styles.namePost}>{workerData.name}</p>
          <p className={Styles.location}>{item.location}<LocationOnIcon /></p>
          </div>
          </div>
            
            
            <p className={Styles.desc}>{item.description} </p>
           {/* {mine&&(<MoreVertIcon className={Styles.dots} onClick={()=> deletePost(item._id)} /> )}  */}
           {mine&&( <div className={Styles.editDelete}>
            <DeleteIcon style={{color:"red", cursor:"pointer"}} onClick={()=>deletePost(item._id)} />
            <EditIcon style={{cursor:"pointer "}} />
          {/* <MoreVertIcon className={Styles.dots} onClick={handleClick} />
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            
          >
            <MenuItem onClick={handleClose}>Edit</MenuItem>
            <MenuItem onClick={()=>deletePost(item._id)}>delete</MenuItem>
          </Menu> */}
        </div> )} 

           {item.image && <img src={`${process.env.REACT_APP_PATH}/${item.image}`} className={Styles.postImage}></img>}
            
        </div>
        ))}
        </div>
        <div className={Styles.bottomRight}>
   
          <div className={Styles.numbers}>
            <div className={Styles.nb}>
                <p style={{fontSize:"38px", fontWeight:"500", opacity:"0.6", color:"blue"}}> 20</p>
                <p style={{opacity:"0.8"}}>Posts</p>
            </div>
            <div className={Styles.nb}>
                <p style={{fontSize:"38px", fontWeight:"500", opacity:"0.6", color:"blue"}}> 2+</p>
                <p style={{opacity:"0.8"}}>Years of experience</p>
            </div>    
            </div>
            <div className={Styles.rating}>
        <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <Rating
          name="simple-controlled"
          value={value}
          onChange={handleChange}
          max={5}
          precision={1}
        />
        <span>{value}</span>
      </Box>
      </div>
        </div>
      </div>
        {addPost &&  <div className={Styles.formm}><Addpost fetchData={fetchData}  setAddPost={setAddPost}/></div>}


    </div>
  )
}

export default Profile
