import React from 'react'
import Styles from "./Unauthorized.module.css"
import image from "../../assets/images/backgroundd.jpg"

function Unauthorized() {
  return (
    <div className={Styles.container}>
        <div style={{height:"100%", width:"100%"}}>
        <img src={image} className={Styles.img}></img>
        </div>
        <div className={Styles.center}>
        <p className={Styles.p}>Unauthorized</p>
        <button className={Styles.btn}>Home Page</button>
        </div>
    </div>
  )
}

export default Unauthorized
