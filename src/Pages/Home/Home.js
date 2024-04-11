import React from 'react'
import Styles from "./Home.module.css"
import "./Home.css"
import Hero from '../../Components/Hero/Hero'
import SectrionAboutUs from '../../Components/SectionAboutUs/SectionAboutUs'
import SectionCategory from '../../Components/SectionCategory/SectionCategory'
import Category from '../../Components/Category/Category'


const Home = () => {
  return (
    <main className={Styles.container}>
      <section className={Styles.hero}>
        <Hero />
      </section>
      <section className={Styles.about}>
        <SectrionAboutUs />
      </section>
      <section className={Styles.categories}>
        <SectionCategory />
      </section>
      <section className={Styles.category}>
        <Category />
      </section>
    </main>
  );
};

export default Home
