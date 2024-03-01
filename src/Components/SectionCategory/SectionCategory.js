import React from 'react'
import Styles from "./SectionCategory.module.css"
import image from "../../assets/images/new.jpg"

const items=[
    {
        id:1,
        
    }
]

const SectionCategory = () => {
  return (
    <div className={Styles.container} >
 <h1 className={Styles.title}>CHECK OUR <br />MOST RATED WORKERS</h1> 
    <div className={Styles.cards}>
    {/* <div className={Styles.imageBackgrd}></div> */}
      <div className={Styles.card}>
      <div className={Styles.imageBackgrd}></div>

        <div className={Styles.categ}>Carpenter</div>
      <p className={Styles.name}>Abdulaziz cherkawi</p>
        <p className={Styles.text}>view more</p>

      <img className={Styles.img} src={image}></img>
      </div>
      <div className={Styles.card}>
      <div className={Styles.imageBackgrd}></div>

      <div className={Styles.categ}>Carpenter</div>
      <p className={Styles.name}>Louai Baghdadi</p>
      <p className={Styles.text}>view more</p>
      <img className={Styles.img} src={image}></img>
      </div>
      <div className={Styles.card}>
      <div className={Styles.imageBackgrd}></div>

      <div className={Styles.categ}>Carpenter</div>
      <p className={Styles.name}>Rayan Ali</p>

      <p className={Styles.text}>view more</p>
      <img className={Styles.img} src={image}></img>
      </div>
      <div className={Styles.card}>
      <div className={Styles.categ}>Carpenter</div>
      <p className={Styles.name}>Souhad Moussa</p>

      <p className={Styles.text}>view more</p>
      <img className={Styles.img} src={image}></img>
      </div>
      <div className={Styles.card}>
      <div className={Styles.categ}>Carpenter</div>
      <p className={Styles.name}>Rayan hassan</p>

      <p className={Styles.text}>view more</p>
      <img className={Styles.img} src={image}></img>
      </div>
     
    
      
      </div>
    </div>
  )
}

export default SectionCategory
