import React, { useEffect, useRef } from 'react';
import Styles from './Category.module.css';
import image from '../../assets/images/background.jpg';
import imagee from '../../assets/images/jobs.png';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

const variants = {
  initial: {
    x: 0,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Category = () => {
//   const ref = useRef(null);
//   const { ref: inViewRef, inView } = useInView({ triggerOnce: true });


  return (
    <motion.div className={Styles.container}  variants={variants} initial="initial" whileInView="animate">
      <motion.div variants={variants}>
        <motion.p variants={variants} className={Styles.p}>
          Modern <br />
          Solutions for
          <br /> Local Services
        </motion.p>
      </motion.div>
      <motion.div variants={variants}>
        <motion.p variants={variants} className={Styles.otherP}>
          Your Job Hub, Customized for You.
        </motion.p>
      </motion.div>
      <motion.div variants={variants} className={Styles.bottom}>
        <motion.div variants={variants} className={Styles.left}>
          <motion.div className={Styles.heroBackgrd}></motion.div>
          <img src={image} className={Styles.img} alt="Background"></img>
          <img src={imagee} className={Styles.imgg} alt="Jobs"></img>
        </motion.div>
        <motion.div variants={variants} className={Styles.right}>
          <motion.div>
            <motion.p variants={variants} className={Styles.pRight}>
              Squarespace Creations
            </motion.p>
            <motion.p variants={variants} className={Styles.rightP}>
              User-Inspired Website Collection.
            </motion.p>
            <Link to="/jobs">
              <button className={Styles.btn}>VIEW MORE</button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Category;
