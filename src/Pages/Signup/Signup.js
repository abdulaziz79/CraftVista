import React, { useEffect, useState } from 'react';
import Styles from "./Signup.module.css";
import { toast } from "react-toastify";
import { UserContext } from '../../UserContext/UserContext';
import { useContext } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import "./Signup.css"

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
  const { user , setUser, fetchUserData } = useContext(UserContext);

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
      if(response){
        setUser(response.data)
        // console.log(response.error);
        fetchUserData()
        

      }
      navigate("/");
    } catch (error) {
      if(error.response && error.response.status === 401) {
        console.log("email already there")
      } else {

        console.log(error.message);
      }
    }
  };
  const styleField = {
    '& .MuiOutlinedInput-root': {
      borderColor: 'white', // Default border color
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': { // More specific selector for focus
        borderColor: 'white',
      },
      '&.Mui-focused .MuiInputLabel-root': { // Target the label when focused
        color: 'white', // Change label color to white on focus
      },
      '&:hover .MuiOutlinedInput-notchedOutline': { // More specific selector for hover
        borderColor: 'white',
      },
      '& .MuiOutlinedInput-notchedOutline': { // More specific selector for hover
        borderColor: 'white',
      },
      '& .MuiInputLabel-root': {
        color: 'white'
      },
      '&:focus .MuiInputLabel-root': {
        color: 'white'
      },
      '& .MuiInputLabel-root': {
        color: 'white',
        '&.Mui-focused': {
          color: 'white',
          borderColor: 'white' // Set label color to white when focused
        },
      },
    },
    '& .MuiInputLabel-root': {
      color: 'white',
      borderColor: 'white'
    },
  }
  return (
    <div className={Styles.body}>
      <div className={Styles.container}>
        <h2 className={Styles.h2}>Sign Up</h2>
        <form className={Styles.form} onSubmit={handleSubmit}>
          <TextField
            label="Name"
            className={Styles.inpt}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            fullWidth
            variant="outlined"
           sx={styleField}
            InputLabelProps={{
              style: { color: 'white' }
            }}
          />
          {/* <br /> */}
          <TextField
            label="Email"
            className={Styles.inpt}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            fullWidth
            variant="outlined"
            sx={styleField}

            InputProps={{
              style: { color: 'white' },
              className: Styles.inputField
            }}
            InputLabelProps={{
              style: { color: 'white', borderColor:"white" }
            }}
            
          />
          {/* <br /> */}
          <TextField
            label="Phone Number"
            className={Styles.inpt}
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            fullWidth
            variant="outlined"
            sx={styleField}
            InputProps={{
              style: { color: 'white' },
              className: Styles.inputField
            }}
            InputLabelProps={{
              style: { color: 'white' }
            }}
          />
          {/* <br /> */}
          <div className={Styles.imagee}>
            {/* <label className={Styles.label}>Image:</label> */}
            <input
              name="image"
              type="file"
              onChange={handleImageChange}
              className={Styles.inputField}
            />
          </div>
          {/* <br /> */}
          <TextField
            label="Location"
            className={Styles.inpt}
            select
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
            fullWidth
            variant="outlined"
            sx={styleField}
            InputProps={{
              style: { color: 'white' },
              className: Styles.inputField
            }}
            InputLabelProps={{
              style: { color: 'white' }
            }}
          >
            <MenuItem value="">Select a city</MenuItem>
            <MenuItem value="Beirut">Beirut</MenuItem>
            <MenuItem value="Tripoli">Tripoli</MenuItem>
          </TextField>
          {/* <br /> */}
          <TextField
            label="Password"
            className={Styles.inpt}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            fullWidth
            variant="outlined"
            sx={styleField}
            InputProps={{
              style: { color: 'white' },
              className: Styles.inputField
            }}
            InputLabelProps={{
              style: { color: 'white' }
            }}
          />
          {/* <br /> */}
          <label>
            <input
              type="checkbox"
              name="isWorker"
              checked={formData.isWorker}
              onChange={handleCheckboxChange}
            />{' '}
            I am a worker 
          </label>
          {/* <br /> */}
          {showCategoryDropdown && (
            <TextField
              label="Select Category"
              className={Styles.inpt}
              select
              name="selectedCategory"
              value={formData.selectedCategory}
              onChange={handleInputChange}
              required
              fullWidth
              variant="outlined"
              sx={styleField}
              InputProps={{
                style: { color: 'white' },
                className: Styles.inputField
              }}
              InputLabelProps={{
                style: { color: 'white' }
              }}
            >
              <MenuItem value="">Select a category</MenuItem>
              {category.map(category => (
                <MenuItem key={category._id} value={category._id}>{category.title}</MenuItem>
              ))}
            </TextField>
          )}
          <br />
          <button type="submit" className={Styles.btn}>Sign Up</button>
          <p style={{ letterSpacing: "1px", color: "white" }}>Already have an account? <Link style={{ textDecoration: "none", color: "lightblue" }} to="/login">Log in</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Signup;