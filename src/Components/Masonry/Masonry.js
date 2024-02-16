import React from 'react';
import Masonry from 'react-masonry-css';
import Styles from "./Masonry.module.css";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import image from "../../assets/images/profile.png"

const breakPointObj = {
  default: 4,
  3000: 4,
  2000: 3,
  1590: 2,
  1200: 1,
  // 770: 1
}

const Masonryy = ({ data }) => {
  return (
    <Masonry  columnClassName={Styles.column} className={Styles.masonry} breakpointCols={breakPointObj}>
      {data && data.map((item) => (
        <Link to={`/profile/${item.name}`} state={item}>
        <div className={Styles.cart} key={item.id}>
          <div className={Styles.itemContainer}>
          <p className={Styles.p}>{item.categoryId.title || ""}</p>
          <div className={Styles.profile}>
            {/* <img src={item.image} className={Styles.prof} /> */}
            {/* <h1 className={Styles.namee}>Abdulaziz cherkawi</h1> */}
            {/* <p className={Styles.experience}>6 years of experience</p> */}

          </div>
          {item.image ? <img src={`http://localhost:5000/${item.image}`} className={Styles.img} alt={item.name} />
           : <img src={image} className={Styles.img} /> }

            <div className={Styles.name}><p className={Styles.nameee}>{item.name}</p></div>
            {/* <p className={Styles.years}>6 years of experience</p> */}
          </div>
        </div>
        </Link>
      ))}
    </Masonry>
  );
}

export default Masonryy;
