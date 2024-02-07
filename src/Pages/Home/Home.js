import React from 'react'
import Styles from "./Home.module.css"
import Hero from '../../Components/Hero/Hero'

const Home = () => {
  return (
    <div className={Styles.container}>
      <section className={Styles.hero}>
      <Hero />
      </section>
    </div>
  )
}

export default Home
