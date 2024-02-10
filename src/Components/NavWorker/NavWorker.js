import React, { useState } from 'react'
import Styles from "./NavWorker.module.css"

const NavWorker = () => {
    const [activeBtn, setActiveBtn] = useState("showAll")

    const handleBtnClick = (btnName)=>{
        setActiveBtn(btnName)
    }

  return (
    <div className={Styles.container}>
      <button className={`${Styles.btn1} ${activeBtn === 'showAll' ? Styles.active : ""}`} onClick={()=> handleBtnClick("showAll")}>All</button>
      <button className={`${Styles.btn2} ${activeBtn === 'yearsOfExp' ? Styles.active : ""}`} onClick={()=>handleBtnClick("yearsOfExp")}>Years of experience</button>
      <button className={`${Styles.btn3} ${activeBtn === 'rate' ? Styles.active : ""}`} onClick={()=>handleBtnClick("rate")}>Rate</button>

      
    </div>
  )
}

export default NavWorker
