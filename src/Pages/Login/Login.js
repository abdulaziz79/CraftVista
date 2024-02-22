import React, { useState } from 'react';
import Styles from "./Login.module.css"
import { toast } from "react-toastify";
import axios from "axios"
import { useContext } from 'react';
import {UserContext} from "../../UserContext/UserContext"
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const { setUser, fetchUserData }=useContext(UserContext)
  const [formData, setFormData]= useState({
    email:'',
    password:''
  })
  const navigate = useNavigate()

  const handlInputChange=(e)=>{
    const {name, value}=e.target;

    setFormData({
      ...formData,
      [name]:value
    })
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^.{8,}$/;

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!formData.email) {
      toast.error("Please enter your email.");
      return;
    };
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!formData.password) {
      toast.error("Please enter your password.");
      return;
    };
    if (!passwordRegex.test(formData.password)) {
      toast.error("Password should be at least 8 characters.");
      return;
    }
    try {
      const response= await axios.post(`${process.env.REACT_APP_PATH}/login`,
      formData,
      {withCredentials:true}
      );
      console.log(response)
      if(response.data){
        await 
        // toast.success("Login successfully");
        setUser(response.data)
        console.log("login successful")
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 1000);
      }
    } catch (error) {
      console.log(error.message)
    }
  };



  return (
    <div className={Styles.body}>
    <div className={Styles.container}>
      <h2 className={Styles.h2}>Login</h2>
      <form className={Styles.form} onSubmit={handleLogin}>
        {/* <div className={Styles.inputLabel}> */}
        <label>
          Email:
          <input
          className={Styles.inpt}
            type="email"
            name="email"
            value={formData.email}
            onChange={handlInputChange}
            required
          />
        </label>
        {/* </div> */}
        <br />
        <label>
          Password:
          <input
          className={Styles.inpt}
            type="password"
            name='password'
            value={formData.password}
            onChange={handlInputChange}
          />
        </label>
        <br />
        <button type="submit" className={Styles.btn}>Login</button>
        <button type="submit" className={Styles.googleBtn}>Login with google</button>
        <p style={{ letterSpacing:"1px",color:"white", }}>Already have an account?   <Link  style={{textDecoration:"none", color:"lightblue"}} to="/signup">sign up</Link></p>
      </form>
    </div>
    </div>
  );
};

export default Login;
