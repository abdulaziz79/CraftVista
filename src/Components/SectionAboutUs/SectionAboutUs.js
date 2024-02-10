import React from 'react'
import Styles from "./SectionAboutUs.module.css"
import { motion } from 'framer-motion'


const slider = {
  initial:{
    x: 0
  },
  animate:{
    x:"-420%",
    transition:{
      repeat:Infinity,
      repeatType:"mirror",
      duration:20,
      
    }
  }
}

const SectionCategory = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.top}>
        <div className={Styles.left}>
         <div className={Styles.leftleft}>
          <div> <p className={Styles.number}>500+</p> <p className={Styles.word}>Happy client</p> </div>
          <div> <p className={Styles.number}>500+</p> <p className={Styles.word}>Happy client</p> </div>
          </div>
          <div className={Styles.leftright}>
           <p className={Styles.number}>17+</p> <p className={Styles.word}>Experience</p> 
           <p className={Styles.number}>17+</p> <p className={Styles.word}>Experience</p> 

          </div>
         </div>
         <div className={Styles.right}>
        <p className={Styles.righttext}>We link users to skilled handymen and job opportunities, enhancing their home maintenance experience</p>
        <button className={Styles.btn}>Explore more</button>
        </div>
      </div>
      <div className={Styles.bottom}>
         <motion.div className={Styles.slidingText} variants={slider} initial="initial" animate="animate">
         We link users to skilled handymen and job opportunities, enhancing their home maintenance experience      </motion.div>
      

      </div>
    </div>
  )
}

export default SectionCategory
