import React from 'react'
import Styles from "./Workers.module.css"
// import tools from '../../assets/images/tools.jpg'
import PageHero from '../../Components/pageHero/PageHero'
import Masonryy from '../../Components/Masonry/Masonry'
import Spinner from '../../Components/Spinner'
import { useState } from 'react'
// import Category from '../../Components/Category/Category'
import Sidebar from '../../Layout/Sidebar/Sidebar'
import NavWorker from '../../Components/NavWorker/NavWorker'
import image from "../../assets/images/men.png"

const Data=[
  {
    id:1,
    name:"abdallah",
    image:'https://img.freepik.com/free-photo/smiling-young-female-construction-worker-wearing-safety-helmet-safety-vest-hugging-notepad_409827-150.jpg'
  },
  {
    id:2,
    name:"abdallah",
    image:'https://www.myvisasource.com/hubfs/Compressed%20Blog%20Images/200kb/cheerful-construction-workers-discussing-work-my-visa-source-200kb.jpg'
  },
  {
    id:3,
    name:"abdallah",
    image:'https://img.freepik.com/free-photo/smiling-young-female-construction-worker-wearing-safety-helmet-safety-vest-hugging-notepad_409827-150.jpg'
  },
  {
    id:4,
    name:"abdallah",
    image:'https://www.myvisasource.com/hubfs/Compressed%20Blog%20Images/200kb/cheerful-construction-workers-discussing-work-my-visa-source-200kb.jpg'
  },
  {
    id:5,
    name:"abdallah",
    image:'https://img.freepik.com/free-photo/smiling-young-female-construction-worker-wearing-safety-helmet-safety-vest-hugging-notepad_409827-150.jpg'
  },

  {
    id:6,
    name:"abdallah",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ61yrH-uBgiaXUvYiH8A2tMofDJrhHtdBJQ&usqp=CAU'
  },  {
    id:7,
    name:"abdallah",
    image:'https://img.freepik.com/free-photo/smiling-young-female-construction-worker-wearing-safety-helmet-safety-vest-hugging-notepad_409827-150.jpg'
  },
  {
    id:8,
    name:"abdallah",
    image:'https://img.freepik.com/free-photo/smiling-young-female-construction-worker-wearing-safety-helmet-safety-vest-hugging-notepad_409827-150.jpg'
  },
  {
    id:9,
    name:"abdallah",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ61yrH-uBgiaXUvYiH8A2tMofDJrhHtdBJQ&usqp=CAU'
  },

]


const Workers = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
};
  if(loading) return <Spinner message="We are adding new ideas" />
  return (
    
    <div className={Styles.container}>
      <Sidebar />
      {/* <Category /> */}
      <div className={Styles.bottom}>
      <div className={Styles.left}>
        <div className={Styles.topLeft}>
        CHOOSE<br /> CATEGORY
        </div>
        <div className={Styles.bottomLeft}>
          <img src={image} className={Styles.img} />
          {/* <div className={Styles.categ}>PLUMBER</div>
          <div className={Styles.categ}>CARPENTER</div>
          <div className={Styles.categ}>WHATEVER</div>
          <div className={Styles.categ}>PLUMBER</div>
          <div className={Styles.categ}>CARPENTER</div>
          <div className={Styles.categ}>WHATEVER</div>
          <div className={Styles.categ}>PLUMBER</div>
          <div className={Styles.categ}>CARPENTER</div>
          <div className={Styles.categ}>WHATEVER</div>
          <div className={Styles.categ}>PLUMBER</div>
          <div className={Styles.categ}>CARPENTER</div>
          <div className={Styles.categ}>WHATEVER</div>
          <div className={Styles.categ}>PLUMBER</div>
          <div className={Styles.categ}>CARPENTER</div>
          <div className={Styles.categ}>WHATEVER</div>
          <div className={Styles.categ}>PLUMBER</div>
          <div className={Styles.categ}>CARPENTER</div>
          <div className={Styles.categ}>WHATEVER</div>
          <div className={Styles.categ}>PLUMBER</div>
          <div className={Styles.categ}>CARPENTER</div>
          <div className={Styles.categ}>WHATEVER</div>
          <div className={Styles.categ}>PLUMBER</div>
          <div className={Styles.categ}>CARPENTER</div>
          <div className={Styles.categ}>WHATEVER</div> */}
        </div>
        </div>
      <div className={Styles.right}>
        <div className={Styles.nav}>
          <NavWorker />
        </div>
        
      <Masonryy data={Data}  />
      </div>
      </div>
    </div>
  )
}

export default Workers
