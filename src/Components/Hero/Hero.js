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

  const nextImageIndex = (currentImageIndex + 1) % images.length;

  return (
    <motion.div>
      <motion.div className={Styles.container}>
        <motion.div variants={textVariants} initial="initial" animate="animate">
          <motion.p className={Styles.p} variants={textVariants}>Our business<br /> is <span style={{color:"orange", fontWeight:"700"}}>  powering</span> </motion.p>
          <motion.p variants={textVariants} className={Styles.text}> <span> Your business.</span> </motion.p>
          <motion.div className={Styles.btn} variants={textVariants}>
            <motion.button variants={textVariants} className={Styles.button}>Explore More</motion.button>
            <motion.button variants={textVariants} className={Styles.button2}>Contact us</motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
      {/* <img src={img} className={Styles.img}></img> */}
      <motion.div className={Styles.slidingText} variants={slider} initial="initial" animate="animate">
        content creator whatever
      </motion.div>
    </motion.div>
  );
}

export default Hero;