import React from 'react'
import Styles from "../Sidebar.module.css"
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const variants = {
    open:{
        transition:{
            staggerChildren:0.1,
        }
    },
    closed:{
        transition:{
            staggerChildren:0.05,
            staggerDirection:-1
        }
    }
}
const itemVariants = {
    open:{
        y:0,
        opacity:1
    },
    closed:{
        y:50,
        opacity:0
    }
}

const Links = () => {
    const pages=[
        "HomePage",
        "workers",
        "Services",
        "About",
    ]

  return (
    <motion.div className={Styles.linkss} variants={variants}>
    {pages.map(page=>(
        <motion.div variants={itemVariants} key={page}>
            {page === "HomePage" ? (
                <Link to="/" style={{fontSize:"36px", color:"black",fontWeight:"400"}}>
                    {page}
                </Link>
            ) : (
                <Link to={`/${page.toLowerCase()}`} style={{fontSize:"36px", color:"black",fontWeight:"400"}}>
                    {page}
                </Link>
            )}
        </motion.div>
    ))}
</motion.div>
  )
}

export default Links
