import React from 'react'
import Styles from "./PageHero.module.css"
import tools from '../../assets/images/tools.jpg'


const PageHero = () => {
  return (
    <div>
        <main className={Styles.heroMain}>
            <div className={Styles.heroBackgrd}></div>
            <img src={tools} className={Styles.heroImage} />
            {/* <h1 className={Styles.pageTitle}>{title}</h1> */}
        </main>
    </div>
  )
}

export default PageHero
