import React, { Suspense, lazy, useContext } from 'react';
import Masonry from 'react-masonry-css';
import Styles from "./Masonry.module.css";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import image from "../../assets/images/profile.png"
import GradeIcon from '@mui/icons-material/Grade';

import { UserContext } from '../../UserContext/UserContext';

const breakPointObj = {
  default: 4,
  3000: 4,
  2000: 3,
  1590: 2,
  1200: 1,
  // 770: 1
}

const Masonryy = ({ data }) => {
  const {user, setUser} = useContext(UserContext)
  return (
    <Masonry  columnClassName={Styles.column} className={Styles.masonry} breakpointCols={breakPointObj}>
      { data && data.map((item, index) => (
        <Link to={`/profile/${item.name}`} state={item} key={index}>
        <div className={Styles.cart} >
          <div className={Styles.itemContainer}>
            <p className={Styles.rate}><GradeIcon sx={{color:"gold"}} />{item.rate} ({item.number})</p>
            <p className={Styles.p}>{item.categoryId && item.categoryId.title || ""}</p>
            <div className={Styles.profile}>
            </div>
               {item.image ? <img src={`${process.env.REACT_APP_PATH}/${item.image}`} className={Styles.img} alt={item.name} />
               : <img src={image} className={Styles.img} /> }
            <div className={Styles.name}><p className={Styles.nameee}>{item.name}</p></div>
          </div>
        </div>
        </Link>
      ))}
    </Masonry>
  );
}

export default Masonryy;
