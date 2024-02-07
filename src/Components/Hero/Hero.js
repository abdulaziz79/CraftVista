import React from 'react'
import Styles from "./Hero.module.css"
import img from "../../assets/images/carpenterrr.png"

const Hero = () => {
  return (
    <div className={Styles.container}>
      <div>
      <p className={Styles.p}>Unlocking Local Talent<br />Transforming Communities.</p>
      <div className={Styles.btn}>
        <button className={Styles.button}>Explore More</button>
        <button className={Styles.button}>Contact us</button>
        </div>
      </div>
      <img className={Styles.img} src={img}></img>
    </div>
  )
}

export default Hero
