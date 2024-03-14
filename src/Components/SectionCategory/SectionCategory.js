import React, { useEffect, useState } from 'react'
import Styles from "./SectionCategory.module.css"
import image from "../../assets/images/new.jpg"
import GradeIcon from '@mui/icons-material/Grade';
import { Link } from 'react-router-dom';

import axios from 'axios'

const items=[
    {
        id:1,
        
    }
]

const SectionCategory = () => {
  const [data, setData]= useState([])
  const fetchData = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_PATH}/user/read/topRated`);
    if (response && response.data) {
      setData(response.data);
      console.log(response.data);
    }
  } catch (error) {
    console.log(error.message);
  }
};

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div className={Styles.container}>
      <div className={Styles.div}>
      <p className={Styles.smallText}>Discover</p>
    <h1 className={Styles.title}>Check Our<br />Most Rated Workers</h1>
    </div>
    <div className={Styles.cards}>
      {data.map((worker,index) => (
      // <Link to={`/profile/${worker.name}`} state={worker}>
      
        <Link className={Styles.a} to={`/profile/${worker.name}`} state={worker} key={index}>
        <div className={Styles.card} key={worker._id}>

          <div className={Styles.imageBackgrd}></div>
          <div className={Styles.categ}>{worker.categoryId.title}</div>
          <p className={Styles.name}>{worker.name}</p>
          <p className={Styles.location}> <GradeIcon sx={{color:"gold"}} /> {worker.rate} ({worker.number})</p>
          <p className={Styles.text}>view more</p>
          <img className={Styles.img} src={`${process.env.REACT_APP_PATH}/${worker.image}`} alt={worker.name}></img>

        </div>
          </Link>
      ))}
    </div>
  </div>
  )
}

export default SectionCategory
