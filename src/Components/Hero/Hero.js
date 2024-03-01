import React from 'react'
import { useState } from 'react'
import Styles from "./Hero.module.css"
import { motion, AnimatePresence } from 'framer-motion'
import img from "../../assets/images/carpenterrr.png"
import img2 from "../../assets/images/background.jpg"
import img3 from "../../assets/images/backgroundd.jpg"
import { Link } from 'react-router-dom'

const textVariants ={
  initial:{
    x: -500,
    opacity:0
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.2,
    }
  }
}
const textVariantsRight ={
  initial:{
    x: +500,
    opacity:0
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.2,
    }
  }
}
const slider = {
  initial:{
    x: 0
  },
  animate:{
    x:"-220%",
    transition:{
      repeat:Infinity,
      repeatType:"mirror",
      duration:20,
      
    }
  }
}

const images=[ img, img2, img3]

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <motion.div>
      <motion.div >
        <motion.div className={Styles.container} variants={textVariants} >
          <div className={Styles.left}>
          <div className={Styles.heroBackgrd}></div>
          <motion.p className={Styles.p} variants={textVariants} initial="initial" animate="animate">Discover skilled<br /> <span style={{color:"orange", fontWeight:"700"}}>  professionals </span> <br />near you</motion.p>
           {/* <motion.p variants={textVariants} className={Styles.text} initial="initial" animate="animate"> <span className={Styles.span}> near you </span> </motion.p> */}
             <motion.div className={Styles.btn} variants={textVariants} initial="initial" animate="animate">
            <Link to="/workers"> <motion.button variants={textVariants} className={Styles.button}>Discover Talent</motion.button></Link>
            
          </motion.div>
          </div>
          <motion.div className={Styles.right} >
          <div className={Styles.heroBackgrdR} ></div>
            <motion.p className={Styles.pRight} variants={textVariantsRight} initial="initial" animate="animate"> Catch your next<br /> job <span style={{color:"white", fontWeight:"700"}}>  opportunity</span> <br />today</motion.p>
            {/* <motion.p variants={textVariantsRight} className={Styles.textRight} initial="initial" animate="animate"> today. </motion.p> */}
           <Link to="/jobs" style={{zIndex:"10"}}><motion.button variants={textVariantsRight} initial="initial" animate="animate" className={Styles.button2}>Browse Jobs</motion.button></Link> 
          </motion.div>
        </motion.div>
      </motion.div>
      {/* <img src={img} className={Styles.img}></img> */}
      {/* <motion.div className={Styles.slidingText} variants={slider} initial="initial" animate="animate">
        content creator whatever
      </motion.div> */}
    </motion.div>
  );
}

export default Hero;