import React from 'react'
import { useState } from 'react'
import Styles from "./Hero.module.css"
import { motion, AnimatePresence } from 'framer-motion'
import img from "../../assets/images/carpenterrr.png"
import img2 from "../../assets/images/background.jpg"
import img3 from "../../assets/images/backgroundd.jpg"


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
          <motion.p className={Styles.p} variants={textVariants} initial="initial" animate="animate">Our business<br /> is <span style={{color:"orange", fontWeight:"700"}}>  powering</span> </motion.p>
           <motion.p variants={textVariants} className={Styles.text} initial="initial" animate="animate"> <span> Your business.</span> </motion.p>
             <motion.div className={Styles.btn} variants={textVariants} initial="initial" animate="animate">
             <motion.button variants={textVariants} className={Styles.button}>Explore More</motion.button>
            
          </motion.div>
          </div>
          <div className={Styles.right}>
          <div className={Styles.heroBackgrdR}></div>
            <p className={Styles.pRight}> Our business<br /> is <span style={{color:"orange", fontWeight:"700"}}>  powering</span> </p>
            <motion.p variants={textVariants} className={Styles.textRight} initial="initial" animate="animate"> <span> Your business.</span> </motion.p>
            <motion.button variants={textVariants} className={Styles.button2}>Contact us</motion.button>
          </div>
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