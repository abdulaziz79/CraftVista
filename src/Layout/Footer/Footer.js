import React from "react";
import { Link } from "react-router-dom";
import './Footer.module.css';
import style from './Footer.module.css'
import { UserContext } from "../../UserContext/UserContext";
import { useContext } from "react";
import SvgComponent from "../../Components/SvgComponent";
// import logo from '../../assets/icons/tiktok.svg'
// import facebook from '../../assets/icons/facebook.svg'
// import instagram from '../../assets/icons/instagram.svg'
// import twitter from '../../assets/icons/twitter.svg'
// import tiktok from '../../assets/icons/tiktok.svg'
// import subscribeIcon from '../../assets/icons/send.png'
const Footer = () => {
    const {user,} = useContext(UserContext)

    return(
    <footer className={style.footer}>
        <div className={style.heroBackgrd}></div>
        <div className={style.container}>
            <div className={style.logoDescription}>
                <Link to="/">
                    {/* <img src={logo} alt="Global Fairy logo" /> */}
                    <Link to="/"><span className={style.span} >CraftVista</span></Link> 
                    {/* <SvgComponent /> */}
                </Link>
                <p>Unlock the potential of your projects with curated expertise, seamless solutions, and a supportive community on our premier work platform.</p>            </div>
            <div className={style.contact}>
                <h3 className={style.title}>Support</h3>
                <ul className={style.links}>
                    <li>aboudecharkawi.com</li>
                    <li>79165588</li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className={style.company}>
                <h3 className={style.title}>Account</h3>
                <ul className={style.links}>
                    <li><Link to="/">my Account</Link></li>
                    <li><Link to="/signup">Login/Signup</Link></li>
                    <li><Link to={user && "/myprofile"}>Profile</Link></li>
                </ul>
            </div>
          
            <div className={style.contact}>
                <h3 className={style.title}>Quick Links</h3>
                <ul className={style.links}>
                    <li>Events</li>
                    <li><Link to="/about">About us</Link></li>
                    <li>Stories</li>
                </ul>
            </div>
            <div className={style.social}>
                <h3 className={style.title}>Social</h3>
                <ul className={style.socialLinks}>
                    {/* <li><a href="https://www.instagram.com/globalfairy.lb/" ><img src={instagram} alt="Instagram Icon" /></a></li> */}
                    {/* <li><a href="#https://www.tiktok.com/@globalfairy.lb?_t=8hCEUAD1ahG&_r=1" ><img src={tiktok} alt="TikTok Icon" /></a></li> */}
                    {/* <li><a href="#"><img src={facebook} alt="Facebook Icon" /></a></li> */}
                    {/* <li><a href="#"><img src={twitter} alt="Twitter Icon" /></a></li> */}
                </ul>
                <form className={style.signUp}>
                    <label htmlFor="em">KEEP IN TOUCH</label>
                    <div className={style.inputBox}>
                        <input type="email" name="Email" id="em" placeholder="Your e-mail to subscribe" className={style.emailInput} />
                        {/* <input type="submit" value="Subscribe" className={style.submit} /> */}
                        {/* <img src={subscribeIcon} className={style.submit}></img> */}
                    </div>
                </form>
            </div>
        </div>
        <div className={style.copyright}>
            © 2024 - Craft-Vista All Rights Reserved | Powered By: Abdulaziz cherkawi
        </div>
    </footer>
)
}

export default Footer;