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
import CloseIcon from '@mui/icons-material/Close';
import styled from '@emotion/styled';


const Profile = () => {
  const {user, setUser, checkUser} = useContext(UserContext)
  const location=useLocation()
  const [workerData,setWorkerData]=useState({})
  const [dataa, setDataa]= useState([])
  const [updated, setUpdated]= useState()
  const [addPost, setAddPost] = useState(false)
  const [mine,setMine]=useState(false)
  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = useState(0);
  const [isLoading , setIsloading]=useState(true)
  const [formData, setFormData] = useState({
    // rater:user && user.userId,
    rated:""
  })
  const [reviews, setReviews] = useState([]);
  // console.log(user.user)
  // console.log(workerData)

  const handleChange = (event, newValue) => {
    if(user && user.role !== "admin"){
      setValue(newValue)
      handleSubmit(newValue)
    }else{
console.log("you have to registe")    }

  };

 const handleClose = () => {
   setAnchorEl(null);
 };


  useEffect(()=>{
    const worker=location.state && location.state
    // console.log("workerrrrrr",worker)
  
    // console.log(user)
    // if(user && (worker===null || user.userId===worker?._id)){
    if(location.pathname=== "/myprofile"){

      // console.log("minnnnnnnnnnnnnnnnneeeeeeeee")
      setMine(true)
      // console.log("userrrrrrrrrrrrrrrrrrrrr",user.userId)
      setWorkerData(user)
    }
    else{
      setWorkerData(worker)
      setFormData(prev => ({ ...prev,"rated":worker && worker._id,'rater':user&&user._id}));

    }
    // console.log(location.state)
    const fetchUser = async () => {
      try {
        const id=location.state? location.state._id:user.userId
      const res = await axios.get(`${process.env.REACT_APP_PATH}/user/read/${id}`)
      // console.log(res.data)
        
      } catch (error) {
        console.log(error.message)
      }
  }
  fetchUser()
  },[location,user, updated])

  useEffect(()=>{

    fetchData()
    // console.log(worker)
  },[workerData , updated])

  const handleSubmit= async(value)=>{
    // setFormData(prev => ({ ...prev, 'value': value }));
    const rateData={...formData,'value':value}
    try {
      const response = await axios.post(`${process.env.REACT_APP_PATH}/rate/create`,rateData)
        // console.log("responsssssssssse", response.data)
        // setWorkerData(response.data.updatedUserData); 
        fetchData()
        setUpdated(response.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  const deletePost = async (id)=>{
    // console.log(id)
    try {
      const response= await axios.delete(`${process.env.REACT_APP_PATH}/post/delete/${id}`)
      if(response){
        // console.log(response.data)
        fetchData()
        handleClose()
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  const fetchData=async()=>{
    try { 
      let id=''
      if(mine){
        id=user.userId
      }
      else{
        id=workerData._id
      }
      if (workerData && workerData._id){
      const response = await axios.get(`${process.env.REACT_APP_PATH}/post/readPosts/${id}`)
      
      // console.log("userrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",user)
      if(response){
        setDataa(response.data)
        // console.log("dataaaaaaa",response.data)
        // setIsloading(false)
        }
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  function formatTimeSince(dateString) {
    const date = new Date(dateString);
    const now = new Date();

    const seconds = Math.floor((now - date) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      if (days === 1) {
        return 'Yesterday';
      } else {
        return date.toLocaleDateString(); // You can format the date however you want
      }
    } else if (hours > 0) {
      return `${hours} hour${hours === 1 ? '' : 's'} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
    } else {
      return "just now";
    }
  }

  const [model, setModel] = useState(false)
    const [tempimgSrc, setTempImg] = useState('')
    // const getImg = () => {
    //     // setTempImg(story.images[index])
    //     setModel(true)
    // }
    const handleWindowResize = () => {
      setIsResponsive(window.innerWidth <= 970);
    };
  
 // Function to toggle description expansion
 const [isResponsive, setIsResponsive] = useState(window.innerWidth <= 970);
 const [expandedDescriptions, setExpandedDescriptions] = useState({});
 const toggleDescriptionExpansion = (reviewId) => {
  setExpandedDescriptions((prevState) => ({
    ...prevState,
    [reviewId]: !prevState[reviewId], 
  }));
};

return (
  <main className={Styles.container}>
    {checkUser ? (<div>loading...</div>) :(
      <>   
        <section className={`${model ? Styles.modelOpen : Styles.modelClose} ${Styles.model}`}>
          <img src={`${process.env.REACT_APP_PATH}/${workerData.image}`} className={Styles.showIMg} />
          <CloseIcon  sx={{color:"white"}} onClick={() => setModel(false)} className={Styles.closeModel}/> 
        </section>

        <section className={Styles.top}>
          <div className={Styles.heroBackgrd}></div>
          { workerData&& workerData.image ? (
            <img src={`${process.env.REACT_APP_PATH}/${workerData.image}`} className={Styles.img} onClick={()=>setModel(true)}></img>
          ) : (
            <img src={img} className={Styles.img} alt='profile picture' />
          )}
          {mine&& user.role !=="admin" &&(<button onClick={()=>setAddPost(prev => !prev) } className={Styles.btnAdd}> +</button>)} 
        </section>

        <section className={Styles.bottom}>
          <div className={Styles.bottomLeft}>
            { workerData !==null  && (
              <div className={Styles.userInfo}>
                <p className={Styles.name}>{workerData.name}</p>
                <p className={Styles.email}>{workerData.email}</p>
                <div className={Styles.info}>
                  <p className={Styles.location}><LocationOnIcon /> {workerData.location}</p>
                  <p className={Styles.location}><CalendarMonthIcon />- Joined April 2022</p>
                  <div className={Styles.inofR}>
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
                    <p className={Styles.location}> <GradeIcon sx={{color:"gold"}} /> {workerData.rate} ({workerData.number})</p>
                  </div> 
                </div>
              </div>
            )}
          
            {dataa&& dataa.length>0 ? (
              dataa.map((item,index)=>(
                <div className={Styles.post} key={index}>
                  <div className={Styles.postTop}>
                    {workerData && workerData.image ? 
                      <img src={`${process.env.REACT_APP_PATH}/${workerData.image}`} className={Styles.postProfile}></img> 
                    : 
                      <img src={img} className={Styles.postProfile}></img>
                    }
                    <div className={Styles.nameLocation}>
                      <p className={Styles.namePost}>{workerData.name}</p>
                      <p className={Styles.location}>{formatTimeSince(item.createdAt)}</p>
                    </div>
                  </div>
                  <p className={Styles.location}>{item.location}<LocationOnIcon /></p>
                  <div className={Styles.desc}>
                    {isResponsive ? (
                      expandedDescriptions[item._id] ? 
                        item.description : 
                        item.description.slice(0, 40)
                    ) : (
                      expandedDescriptions[item._id] ? 
                        item.description : 
                        item.description.slice(0, 100)
                    )}
                    {item.description.length > (isResponsive ? 40 : 100) && (
                      <span
                        className={Styles.viewMore}
                        onClick={() => toggleDescriptionExpansion(item._id)}
                      >
                        {expandedDescriptions[item._id] ? " View Less" : "... View More"}
                      </span>
                    )}
                  </div>
                  {mine&&( 
                    <div className={Styles.editDelete}>
                      <DeleteIcon style={{color:"red", cursor:"pointer"}} onClick={()=>deletePost(item._id)} />
                      <EditIcon style={{cursor:"pointer "}} />
                    </div>
                  )} 
                  {item.image && <img src={`${process.env.REACT_APP_PATH}/${item.image}`} className={Styles.postImage}></img>}
                </div>
              ))
            ) : (
              <p className={Styles.noPost}>No Posts Yet</p>
            )}
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
              {/* <Box
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
            </Box> */}
            </div>
            <div className={Styles.reviews}>
              <p className={Styles.rev}>Reviews ^^</p>
              <div className={Styles.comments}>
                <div className={Styles.singleComment}>
                  <div className={Styles.namee}>
                    <img className={Styles.commentImg} src={image}></img>
                    <p>User Name</p>
                  </div>
                  <p className={Styles.text}>here we can put the comment whateve here we can put the comment whatever here we can put the comment whateverhere we can put the comment whateverr</p>
                </div>
                <div className={Styles.singleComment}>
                  <div className={Styles.namee}>
                    <img className={Styles.commentImg} src={image}></img>
                    <p>User name</p>
                  </div>
                  <p className={Styles.text}> here we can put the comment whatever</p>
                </div>
                <div className={Styles.singleComment}>
                  <div className={Styles.namee}>
                    <img className={Styles.commentImg} src={image}></img>
                    <p>User name</p>
                  </div>
                  <p className={Styles.text}>here we can put the comment whatever</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {addPost &&  <div className={Styles.formm}><Addpost fetchData={fetchData}  setAddPost={setAddPost}/></div>}
      </>
    )}
  </main>
)
}

export default Profile
