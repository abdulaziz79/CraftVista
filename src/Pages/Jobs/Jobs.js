// import React, { useState, useEffect } from 'react';
// import Styles from './Jobs.module.css';
// import image from '../../assets/images/new.jpg';

// const Jobs = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [page, setPage] = useState(1);
//   const postsPerPage = 3;

//   // useEffect(()=>{
//   //   fetchPosts()
//   // },[])

//   useEffect(() => {
//     // Function to fetch posts from an API or any data source
//     let fetchPosts = async () => {
//       setLoading(true);
//       // Simulating a delay for demonstration purposes
//       setTimeout(() => {
//         // Example: Fetch posts from an API endpoint
//         // const response = await fetch(`api/posts?page=${page}&perPage=${postsPerPage}`);
//         // const data = await response.json();
//         // setPosts((prevPosts) => [...prevPosts, ...data]);
//         // setLoading(false);
//         // setPage((prevPage) => prevPage + 1);

//         // For demonstration, using mock data
//         const mockData = Array.from({ length: postsPerPage }, (_, index) => ({
//           id: index + 1,
//           name: 'Abdulaziz cherkawi',
//           time: 'just now',
//           description: 'A carpenter needed to fix my closet',
//           image: image,
//         }));
//         setPosts((prevPosts) => [...prevPosts, ...mockData]);
//         setLoading(false);
//         setPage((prevPage) => prevPage + 1);
//       }, 1000); // Simulated delay of 1 second
//     };

//     // Add event listener to detect scroll to bottom of page
//     const handleScroll = () => {
//       if (
//         window.innerHeight + document.documentElement.scrollTop ===
//         document.documentElement.offsetHeight
//       ) {
//         fetchPosts();
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [page]); 

//   return (
//     <>
//       <div className={Styles.container}>
//         <div className={Styles.top}>
//           <div className={Styles.topBottom}></div>
//         </div>
//         <div className={Styles.bottom}>
//           {posts.map((post) => (
//             <div key={post.id} className={Styles.post}>
//               <div className={Styles.imgTime}>
//                 <img src={post.image} className={Styles.profileImage} alt="Profile"></img>
//                 <div className={Styles.nametime}>
//                   <p className={Styles.name}>{post.name}</p>
//                   <p className={Styles.time}>{post.time}</p>
//                 </div>
//               </div>
//               <p className={Styles.description}>{post.description}</p>
//               <img src={post.image} className={Styles.postImage} alt="Post"></img>
//             </div>
//           ))}
//           {loading && <p>Loading...</p>}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Jobs;


import React, { useState, useEffect, useContext } from 'react';
import Styles from './Jobs.module.css';
import image from '../../assets/images/new.jpg';
import StarIcon from '@mui/icons-material/Star';
import ListIcon from '@mui/icons-material/List';
import axios from "axios"
import LocationCityIcon from '@mui/icons-material/LocationCity';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Spinner from '../../Components/Spinner/Spinner';
import { UserContext } from '../../UserContext/UserContext';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { Link } from 'react-router-dom';
import Addpost from './AddPost/AddPost';
import imagee from "../../assets/images/post.jpg"


const Jobs = () => {
  // console.log(process.env.REACT_APP_PATH)
  const [selected, setSelected] = useState("All")
  const [posts, setPosts] = useState([]);
  const {user} = useContext(UserContext)
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [scrolled, setScrolled] = useState(false); 
  const [visiblePosts, setVisiblePosts] = useState(0); 
  const [addPost, setAddPost] = useState(false)
  const [categories, setCategories]= useState([])
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [filters,setFilter]=useState({role:'user'})
  const postsPerPage = 3;

const handleChange = (e) => {
  setFilter((prev) => ({
    ...prev,
    [e.target.name]: e.target.value
  }))

  // console.log(filters)
}

useEffect(()=>{
fetchFilter()
},[filters])

  const fetchInitialPosts = async () => {
    // setLoading(true);
    setTimeout(async() => {
      try {
        const response =await axios.get(`${process.env.REACT_APP_PATH}/post/readUserPosts`)
        if(response){
          setPosts(response.data);
          setVisiblePosts(postsPerPage);
        }
      } catch (error) {
        console.log(error.message)
      }finally{
        setLoading(false);

      }
      
    }, 1000);
  };

  useEffect(() => {

    // fetchInitialPosts();
  }, []);

  const fetchCategories = async()=>{
    try {
      const response = await axios.get(`${process.env.REACT_APP_PATH}/category/read`)
      if(response){
        // console.log(response.data)
        setCategories(response.data)
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  const fetchFilter = async()=>{
    try {
      const response = await axios.post(`${process.env.REACT_APP_PATH}/post/filter`,null,{
        params:filters
      })
      if(response){
        setPosts(response.data)
        // console.log("ssssssssssssssssssssssssssssss",response.data[0].user[0].name)
        setLoading(false)
      }
    } catch (error) {
      console.log(error.message)
      
    }
  }
  useEffect(()=>{
    fetchCategories()
    
  },[])

  function formatTimeSince(dateString) {
    const date = new Date(dateString);
    const now = new Date();

    const seconds = Math.floor((now - date) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      if (days === 1) {
        return 'Yesterday';
      } else {
        return date.toLocaleDateString(); // You can format the date however you want
      }
    } else if (hours > 0) {
      return `${hours} hour${hours === 1 ? '' : 's'} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
    } else {
      return "just now";
    }
  }

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     setLoading(true);
  //     setTimeout(() => {
  //       const mockData = Array.from({ length: postsPerPage }, (_, index) => ({
  //         id: index + 1 + (page - 1) * postsPerPage,
  //         name: 'Abdulaziz cherkawi',
  //         time: 'just now',
  //         description: 'A carpenter needed to fix my closet A carpenter needed toq fix my closet A carpenter needed to fix my closet ',
  //         image: image,
  //       }));
  //       setPosts((prevPosts) => [...prevPosts, ...mockData]);
  //       setLoading(false);
  //       setPage((prevPage) => prevPage + 1);
  //       setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + postsPerPage);
  //     }, 1000);
  //   };

  //   const handleScroll = () => {
  //     if (
  //       window.innerHeight + document.documentElement.scrollTop ===
  //       document.documentElement.offsetHeight
  //     ) {
  //       fetchPosts();
  //     }
  //     setScrolled(true); 
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [page]);
  if(loading) return <Spinner  message={"preparing jobs opportunities"}/>

  return (
    <>
      <main className={`${Styles.container} ${scrolled ? Styles.scrolled : ''}`}>
        <section className={Styles.top}>
          <div className={Styles.topBottom}>
            <button className={Styles.btn}><ListIcon sx={{marginRight:"2rem", height:"2.5rem", width:"2.5rem"}} onClick={(()=>setFilter(''))} /> All</button>
            <select name="category" className={Styles.location} value={selectedCategory} onChange={handleChange} >
              <option value=""><LocationCityIcon /> Select a category</option>
              {categories.map(category => (
                <option key={category._id} value={category._id}>{category.title}</option>
              ))}
            </select>              
            <select name="location" className={Styles.location} value={filters.location|| ''}  onChange={handleChange}>
              <option value=""><LocationCityIcon /> Select a city</option>
              <option value="Beirut">Beirut</option>
              <option value="tripoli">Tripoli</option>
              <option value="Sidon">Sidon</option>
              <option value="Tyre">Tyre</option>
              <option value="Jounieh">Jounieh</option>
            </select>
          </div>
        </section>
        <section className={Styles.add}>
          {user && user.role ==="user" && (<button className={Styles.btnAdd}  onClick={()=>setAddPost(prev => !prev)}>Add new post</button>)}
        </section>
        <section className={Styles.bottom}>
          {/* {console.log(posts)} */}
          {posts && posts.map((post, index) => (
            <Link to ={`/profile/${post.user[0].name}`} state={post.user[0]} key={index}>
              <article key={post.id} className={`${Styles.post} ${index >= visiblePosts - postsPerPage ? Styles.visible : ''}`}>
                <div className={Styles.categ}>{post.category[0].title}</div>
                <div className={Styles.imgTime}>
                  {/* {console.log(post)} */}
                  {post.user && post.user[0].image ? (
                    <img src={`${process.env.REACT_APP_PATH}/${post.user[0].image}`} className={Styles.profileImage} alt="Profile" />
                  ) : (
                    <AccountCircleIcon className={Styles.defaultProfileImage} style={{ color: 'gray', height:"3rem", width:"3rem" }} />
                  )}
                  <div className={Styles.nametime}>
                    <p className={Styles.name}>{post.user[0].name}</p>
                    <p className={Styles.time}>{formatTimeSince(post.createdAt)}</p>
                  </div>
                </div>
                <p className={Styles.locationn} style={{opacity:"0.7"}}><LocationOnIcon />{post.location}</p>
                <p className={Styles.description}>{post.description}</p>
                {post.image ? (
                  <img src={`${process.env.REACT_APP_PATH}/${post.image}`} className={Styles.postImage} alt="Post"></img>
                ) : (
                  <img src={imagee} className={Styles.postImage}></img>
                )} 
              </article>
            </Link>
          ))}
          {loading && <p>Loading...</p>}
        </section>
        {addPost &&  <section className={Styles.formm}><Addpost setAddPost={setAddPost}/></section>}
      </main>
    </>
  );
};

export default Jobs;
