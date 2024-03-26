import React, { useState } from 'react'
import Styles from "./NavWorker.module.css"

const NavWorker = ({sortDataByRate, fetchData, handleSearch,categories,setData,data,allData}) => {
    const [activeBtn, setActiveBtn] = useState("showAll")

    const handleBtnClick = (e ,btnName)=>{
        // setActiveBtn(e.target.name)
        // setData(allData)
        setActiveBtn(btnName&&btnName)
        const myData=allData
        // console.log(e.target.value)
        // console.log(data)
        try {
          const filteredData = myData.filter(worker =>
              worker.categoryId._id === e.target.value
          );
          setData(filteredData);
      } catch (error) {
          console.error("Error filtering data:", error);
      }
    }
    const handleInputChange = (e)=>{
      handleSearch(e.target.value)
    }


  return (
    <div className={Styles.container}>
      <div className={Styles.left}>
      <button className={`${Styles.btn1} ${activeBtn === 'showAll' ? Styles.active : ""}`} onClick={(e)=> {handleBtnClick(e,"showAll"); fetchData()} }>All</button>
      <select
        className={`${Styles.btn2} ${activeBtn === 'yearsOfExp' ? Styles.active : ""}`}
        onChange={(e) => handleBtnClick(e)}
      >
                <option value="">Categories</option>

        {
          categories.map((category,index)=>(
            <option value={category._id} key={index}>{category.title}</option>

          ))
        }
      </select>      
      <button className={`${Styles.btn3} ${activeBtn === 'rate' ? Styles.active : ""}`} onClick={(e)=>{handleBtnClick(e,"rate"); sortDataByRate()}}>Rate</button>
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
