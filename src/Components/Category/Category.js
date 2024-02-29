import React from 'react'
import Styles from "./Category.module.css"
import image from "../../assets/images/background.jpg"
import imagee from "../../assets/images/jobs.png"
import {Link} from "react-router-dom"


const Category = () => {
  return (
    <div className={Styles.container}>
        <div>
            <p className={Styles.p}>Modern <br />Solutions for<br /> Local Services</p>
        </div>
        <div>
            <p className={Styles.otherP}>Your Job Hub, Customized for You.</p>
        </div>
        <div className={Styles.bottom}>
            <div className={Styles.left}>
            <div className={Styles.heroBackgrd}></div>

                <img src={image} className={Styles.img}></img>
                <img src={imagee} className={Styles.imgg}></img>
            </div>
            <div className={Styles.right}>
                <div>
                <p className={Styles.pRight}>Squarespace Creations</p>
                <p className={Styles.rightP}>User-Inspired Website Collection.</p>
                <Link to="/jobs"><button className={Styles.btn}>VIEW MORE</button></Link>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Category
