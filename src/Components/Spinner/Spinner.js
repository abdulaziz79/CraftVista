// Spinner.js
import React from 'react'
import Loader from "react-loader-spinner"
import Styles from "./Spinner.module.css";

const Spinner = ({ message }) => {
  return (
    <div className={Styles.container}>
      <div className={Styles.spinnerWrapper}>
        <Loader 
          type="Circles"
          color="#00BFFF"
          height={110}
          width={110}
          className={Styles.spinner}
        />
      </div>
      <p className={Styles.message}>{message}</p>
    </div>
  )
}

export default Spinner;
