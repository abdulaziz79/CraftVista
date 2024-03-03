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

      <h1 className={Styles.h1}>This is the mission <br />statement</h1>

      <div className={Styles.bottomRight}>
        <img src={image} className={Styles.aboutImage}></img>
        <div className={Styles.aboutBackgrd}></div>

      </div>
      <div className={Styles.bottomLeft}>
        <div className={Styles.messages}>
        <h1 className={Styles.h2}>Connecting Local Workers and Customers</h1>
        <p className={Styles.p}>CraftVista serves as a bridge between local service providers, such as handymen, electricians, and plumbers, and customers seeking their expertise. Our platform simplifies the process of finding skilled workers for various tasks, promoting local businesses and enhancing convenience for users </p>
        </div>
        <div className={Styles.messages}>
        <h1 className={Styles.h2}>Streamlining Service Discovery</h1>
          <p className={Styles.p}>CraftVista streamlines the process of discovering skilled local service providers, offering a user-friendly platform for individuals seeking assistance with tasks ranging from home repairs to maintenance services. </p>
        </div>

        <div className={Styles.messages}>
        <h1 className={Styles.h2}>Enhancing User Convenience</h1>
        <p className={Styles.p}> CraftVista enhances user convenience by offering a centralized hub for accessing a wide range of services. With intuitive search and filtering options, users can easily find and connect with the right service providers to meet their specific needs. </p>
        </div>

      </div>
      </div>
    </div>
  );
}

export default About;
