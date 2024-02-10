import React from 'react'
import Styles from "./Home.module.css"
import "./Home.css"
import Hero from '../../Components/Hero/Hero'
import SectrionAboutUs from '../../Components/SectionAboutUs/SectionAboutUs'
import SectionCategory from '../../Components/SectionCategory/SectionCategory'


const Home = () => {
  return (
    <div className={Styles.container}>
      <section className={Styles.hero}>
      <Hero />
      <div className={Styles.about}>
      <SectrionAboutUs />
      </div>
      <div className={Styles.categories}>
       
        <SectionCategory />
      </div>

      </section>
    </div>
  )
}

export default Home
