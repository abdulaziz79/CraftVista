import React from 'react';
import Styles from "./About.module.css";
import image from "../../assets/images/building.jpg";

const About = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <img src={image} className={Styles.img} alt="Background"></img>
        <h1 className={Styles.title}>About Us</h1>
        <div className={Styles.heroBackgrd}></div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={Styles.svg}>
          <path fill="rgb(15, 6, 40)" fillOpacity="1" d="M0,288L60,293.3C120,299,240,309,360,298.7C480,288,600,256,720,218.7C840,181,960,139,1080,112C1200,85,1320,75,1380,69.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
      <div className={Styles.bottom}>

      <h1 className={Styles.h1}>This is a mission <br />statement here</h1>

      <div className={Styles.bottomRight}>
        <img src={image} className={Styles.aboutImage}></img>
        <div className={Styles.aboutBackgrd}></div>

      </div>
      <div className={Styles.bottomLeft}>
        <div className={Styles.messages}>
        <h1 className={Styles.h2}>this is the title here</h1>
        <p className={Styles.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
        </div>
        <div className={Styles.messages}>
        <h1 className={Styles.h2}>this is the title here</h1>
          <p className={Styles.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
        </div>

        <div className={Styles.messages}>
        <h1 className={Styles.h2}>this is the title here</h1>
        <p className={Styles.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
        </div>

      </div>
      </div>
    </div>
  );
}

export default About;
