import React from 'react'
import Styles from "./SectionAboutUs.module.css"
import { motion } from 'framer-motion'
import {Link} from "react-router-dom"
import CountUp from "react-countup"
// import { motion } from 'framer-motion'



const variants = {
  initial:{
    // y: "2%",
    opacity:0
    
  },
  animate:{
    // y:0,
    opacity:1,
    transition:{
      duration:1,
      
    }
  }
}

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
      <motion.div className={Styles.top} variants={variants} initial="initial" whileInView="animate">
        <motion.div className={Styles.left} variants={variants} >
         <motion.div className={Styles.leftleft} variants={variants} >
          <motion.div> <p className={Styles.number}><CountUp start={0} end={500} duration={2} />+</p> <p className={Styles.word}>Happy client</p> </motion.div>
          <motion.div> <p className={Styles.number}><CountUp start={0} end={500} duration={2} />+</p> <p className={Styles.word}>Happy client</p> </motion.div>
          </motion.div>
          <motion.div className={Styles.leftright}>
           <p className={Styles.number}><CountUp start={0} end={17} duration={4} />+</p> <p className={Styles.word}>Experience</p> 
           <p className={Styles.number}><CountUp start={0} end={17} duration={4} />+</p> <p className={Styles.word}>Experience</p> 

          </motion.div>
         </motion.div>
         <div className={Styles.right}>
        <motion.p variants={variants} initial="initial" whileInView="animate" className={Styles.righttext}>We link users to skilled handymen and job opportunities, enhancing their home maintenance experience</motion.p>
        {/* <Link to="/about" ><button className={Styles.btn}>Explore more</button></Link> */}
        <Link to="/about" ><button className={Styles.btnn}> Explore more</button></Link>

        {/* <button className={Styles.btnn}> Hover me</button> */}
        </div>
      </motion.div>
      <div className={Styles.bottom}>
         <motion.div className={Styles.slidingText} variants={slider} initial="initial" animate="animate">
         We link users to skilled handymen and job opportunities, enhancing their home maintenance experience      </motion.div>
      

      </div>
    </div>
  )
}

export default SectionCategory
