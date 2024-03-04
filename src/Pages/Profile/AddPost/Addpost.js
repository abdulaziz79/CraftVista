import React, { useState, useEffect,useContext } from 'react';
import Styles from "./AddPost.module.css";
import axios from 'axios';
 import {UserContext} from "../../../UserContext/UserContext"
const Addpost = ({setAddPost , fetchData}) => {
  const { user } = useContext(UserContext); // Assuming your context provides userId
  console.log("ssssssssssssssssssssssssss",user)

  const [formData, setFormData] = useState({
    description: '',
    image: '',
    location: '',
    userId: user._id, 
    categoryId: ''
  });
  const[categories, setCategories]= useState([])
  console.log(user)
////////////////////////////////////////////

  useEffect(() => {
  
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_PATH}/category/read`);
      if(response){

       setCategories(response.data)
      }

    } catch (error) {
      console.log(error.message);
    }
  };
  const handleImageChange = (e) => {
    setFormData((prevData) => ({
        ...prevData,
        image: e.target.files[0],
    }));
};

console.log("addddddddddddddddddddddddd")
  /////////////////////////////////////////////////
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // console.log(formData)
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
  // console.log("submittt")
    try {
      const response =await axios.post(`${process.env.REACT_APP_PATH}/post/create`,formData, {headers:{"Content-Type":"multipart/form-data"}})
      if(response){
        setFormData({
          description: '',
          image: '',
          location: '',
          userId:user && user.userId, 
          categoryId: ''
        });
        onclose()
        fetchData()
    }
    } catch (error) {
      console.log(error.message)
    }


  };

  const onclose=()=>{
    setAddPost(false)
  }


  return (
    <>
    <div className={Styles.overlay}></div>
    <div className={Styles.container}>
      <h2 className={Styles.h2}>Add New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className={Styles.formGroup}>
          <label className={Styles.label}>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={Styles.inputField}
            required
          />
        </div>
        <div className={Styles.formGroup}>
          <label className={Styles.label}>Image URL:</label>
          <input
            name="image"
            type="file"
          onChange={handleImageChange} 
          className={Styles.inputField}
           
          />
        </div>
        <div className={Styles.formGroup}>
          <label className={Styles.label}>Location:</label>
          <input
            name="location"
            type="text"
            value={formData.location}
            onChange={handleChange}
            className={Styles.inputField}
            required
          />
        </div>
        <div className={Styles.formGroup}>
        <label className={Styles.label}>Category:</label>
        <select
  name="categoryId" // Change name to "category"
  value={formData.categoryId} // Update value to formData.category
  onChange={handleChange}
  className={Styles.inputField}
  required
>
  <option value="">Select category...</option>
  {categories.map(category => (
    <option key={category._id} value={category._id}>{category.title}</option>
  ))}
</select>
        </div>
        <button className={Styles.submitButton}>Submit</button>
        
      </form>
      <button className={Styles.cancelButton} onClick={onclose}>cancel</button>
    </div>
    </>
  );
};

export default Addpost;
