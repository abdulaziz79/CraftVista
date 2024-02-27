import React, { useState } from 'react'
import Styles from "./Sidebar.module.css"
import Links from './Links/Links'
import Button from './Button/Button'
import { motion} from "framer-motion"


const variants={
    open:{
        clipPath: "circle(1200px at calc(100% - 50px) 50px)",
        transition:{
            type:"spring",
            stiffness:40,
        }
    },
    closed:{
        clipPath: "circle(30px at calc(100% - 50px) 50px )",
        transition:{
            delay:0.5,
            type:"spring",
            stiffness:700,
            damping:70
        }
    }
}
const Sidebar = () => {
    const [open, setOpen]= useState(false)

    const handleClose=()=>{
        setOpen(false)
    }

  return (
    <motion.div className={Styles.sidebar} animate={open ? "open" : "closed"}>
        <motion.div variants={variants} className={Styles.bg}>
            <Links handleClose={handleClose} />
        </motion.div>
      <Button setOpen={setOpen} />
    </motion.div>
  )
}

export default Sidebar
