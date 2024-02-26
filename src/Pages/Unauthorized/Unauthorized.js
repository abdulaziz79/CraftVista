import React from 'react'
import Styles from "./Unauthorized.module.css"
import image from "../../assets/images/backgroundd.jpg"
import { Link } from 'react-router-dom'

function Unauthorized() {
  return (
    <div className={Styles.container}>
        <div style={{height:"100%", width:"100%"}}>
        <img src={image} className={Styles.img}></img>
        </div>
        <div className={Styles.center}>
        <p className={Styles.p}>Unauthorized</p>
       <Link to="/"><button className={Styles.btn}>Go back to Home Page</button></Link>
        </div>
    </div>
  )
}

export default Unauthorized
