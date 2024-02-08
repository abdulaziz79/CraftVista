import React from 'react';
import Masonry from 'react-masonry-css';
import Styles from "./Masonry.module.css";
import { useState, useEffect } from 'react';

const breakPointObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1
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
            <h1 className={Styles.namee}>Abdulaziz cherkawi</h1>
            <p>6 years of experience</p>

          </div>
            <img src={item.image} className={Styles.img} alt={item.name} />
            <p className={Styles.name}>{item.name}</p>
          </div>
        </div>
      ))}
    </Masonry>
  );
}

export default Masonryy;
