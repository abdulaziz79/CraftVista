import React, { useEffect, useState } from 'react';
import Styles from "./Signup.module.css";
import { toast } from "react-toastify";
import { UserContext } from '../../UserContext/UserContext';
import { useContext } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [category, setCategory] = useState([])
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  const [formData, setFormData]= useState({
    name: '',
    location: '',
    phone: '',
    email:'',
    image:'',
    password:'',
    isWorker: false,
    selectedCategory:''
  });


  const navigate = useNavigate();
  const { user , setUser } = useContext(UserContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleImageChange = (e)=>{
    console.log(e.target.files[0])
    setFormData((prev)=>({
      ...prev,
      image:e.target.files[0]
    }))
  }
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (!checked) {
      setFormData({
        ...formData,
        [name]: checked,
        selectedCategory: ''
      });
      setShowCategoryDropdown(false);
    }else{
      setFormData({
        ...formData,
        [name]: checked
      });
      setShowCategoryDropdown(checked);
    }

  };
  const fetchCategories = async ()=>{
    try {
      const response = await axios.get(`${process.env.REACT_APP_PATH}/category/read`)
      if(response){
        setCategory(response.data)
        // console.log(response.data)
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(()=>{
    fetchCategories()
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
      const response = await axios.post(`${process.env.REACT_APP_PATH}/user/register`, {...formData, image: formData.image},{headers: {'Content-Type': 'multipart/form-data'}});
      if(response.data){
        setUser(response.data)
      }
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={Styles.body}>
      <div className={Styles.container}>
        <h2 className={Styles.h2}>Sign Up</h2>
        <form className={Styles.form} onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              className={Styles.inpt}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <label>
            Email:
            <input
              className={Styles.inpt}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <label>
            Phone Number:
            <input
              className={Styles.inpt}
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <label>
            Image:
          <div className={Styles.imagee}>
          <label className={Styles.label}></label>
          <input
            name="image"
            type="file"
          onChange={handleImageChange} 
          className={Styles.inputField}
           
          />
        </div>
        </label>
        <br />
          <label>
            Location:
            <select
              className={Styles.inpt}
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              required
            >
           
              <option value="">Select a city</option>
              <option value="Beirut">Beirut</option>
              <option value="Tripoli">Tripoli</option>
           
            </select>
          </label>
     
         
          <br />
          <label></label>
          <br />
          <label>
            Password:
            <input
              className={Styles.inpt}
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="isWorker"
              checked={formData.isWorker}
              onChange={handleCheckboxChange}
            />{' '}
            I am a worker 
          </label>
           <br />
           {showCategoryDropdown && (<label>
            Select Category:
            <select
              className={Styles.inpt}
              name="selectedCategory"
              value={formData.selectedCategory}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a category</option>
              {category.map(category => (
                <option style={{backgroundColor:"black"}} key={category._id} value={category._id}>{category.title}</option>
              ))}
            </select>
          </label>)}
          
          <br />
          <button type="submit" className={Styles.btn}>Sign Up</button>
          <p style={{ letterSpacing: "1px", color: "white" }}>Already have an account? <Link style={{ textDecoration: "none", color: "lightblue" }} to="/login">Log in</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
