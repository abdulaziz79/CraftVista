import React, { useState } from 'react'
import Styles from "./NavWorker.module.css"

const NavWorker = ({sortDataByRate, fetchData, handleSearch}) => {
    const [activeBtn, setActiveBtn] = useState("showAll")

    const handleBtnClick = (btnName)=>{
        setActiveBtn(btnName)
    }
    const handleInputChange = (e)=>{
      handleSearch(e.target.value)
    }

  return (
    <div className={Styles.container}>
      <div className={Styles.left}>
      <button className={`${Styles.btn1} ${activeBtn === 'showAll' ? Styles.active : ""}`} onClick={()=> {handleBtnClick("showAll"); fetchData()} }>All</button>
      <select
        className={`${Styles.btn2} ${activeBtn === 'yearsOfExp' ? Styles.active : ""}`}
        onChange={(e) => handleBtnClick(e.target.value)}
      >
        <option value="yearsOfExp">Categories</option>
        <option value="rate">Rate</option>
      </select>      
      <button className={`${Styles.btn3} ${activeBtn === 'rate' ? Styles.active : ""}`} onClick={()=>{handleBtnClick("rate"); sortDataByRate()}}>Rate</button>
      </div>
      <div className={Styles.right}>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleInputChange}
        className={Styles.searchInput}
      />

      </div>
      
    </div>
  )
}

export default NavWorker
