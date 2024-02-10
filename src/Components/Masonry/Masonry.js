import React from 'react';
import Masonry from 'react-masonry-css';
import Styles from "./Masonry.module.css";
import { useState, useEffect } from 'react';

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
      {data.map((item) => (
        <div className={Styles.cart} key={item.id}>
          <div className={Styles.itemContainer}>
          <p className={Styles.p}>category</p>
          <div className={Styles.profile}>
            {/* <img src={item.image} className={Styles.prof} /> */}
            {/* <h1 className={Styles.namee}>Abdulaziz cherkawi</h1> */}
            {/* <p className={Styles.experience}>6 years of experience</p> */}

          </div>
            <img src={item.image} className={Styles.img} alt={item.name} />
            <p className={Styles.name}>abdulaziz</p>
            <p className={Styles.years}>6 years of experience</p>
          </div>
        </div>
      ))}
    </Masonry>
  );
}

export default Masonryy;
