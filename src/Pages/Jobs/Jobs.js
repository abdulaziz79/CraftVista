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


import React, { useState, useEffect } from 'react';
import Styles from './Jobs.module.css';
import image from '../../assets/images/new.jpg';
import StarIcon from '@mui/icons-material/Star';
import ListIcon from '@mui/icons-material/List';
import axios from "axios"
import LocationCityIcon from '@mui/icons-material/LocationCity';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';




const Jobs = () => {
  const [selected, setSelected] = useState("All")
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [scrolled, setScrolled] = useState(false); 
  const [visiblePosts, setVisiblePosts] = useState(0); 
  const postsPerPage = 3;

  useEffect(() => {
    const fetchInitialPosts = async () => {
      setLoading(true);
      const response =await axios.get("http://localhost:5000/post/readUserPosts")
      setPosts(response.data);
      console.log(response.data)
      setLoading(false);
      setVisiblePosts(postsPerPage);
    };
    fetchInitialPosts();
  }, []);

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

  return (
    <>
      <div className={`${Styles.container} ${scrolled ? Styles.scrolled : ''}`}>
        <div className={Styles.top}>
          <div className={Styles.topBottom}>
          <button className={Styles.btn}><ListIcon sx={{marginRight:"2rem", height:"2.5rem", width:"2.5rem"}} /> All</button>
            <button className={Styles.btn}><StarIcon sx={{marginRight:"2rem", height:"2rem", width:"2rem"}} /> Rate</button>
              <select name="location" className={Styles.location}>
                  <option value=""><LocationCityIcon /> Select a city</option>
                  <option value="Beirut">Beirut</option>
                  <option value="Tripoli">Tripoli</option>
                  <option value="Sidon">Sidon</option>
                  <option value="Tyre">Tyre</option>
                  <option value="Jounieh">Jounieh</option>
              </select>
          </div>
        </div>
        <div className={Styles.bottom}>
          {posts && posts.map((post, index) => (
            index < visiblePosts && (
              <div key={post.id} className={`${Styles.post} ${index >= visiblePosts - postsPerPage ? Styles.visible : ''}`}>
                <div className={Styles.imgTime}>
                {post.userId && post.userId.image ? (
                    <img src={`http://localhost:5000/${post.userId.image}`} className={Styles.profileImage} alt="Profile" />
                  ) : (
                    <AccountCircleIcon className={Styles.defaultProfileImage} style={{ color: 'gray', height:"3rem",
                  width:"3rem" }} />
                  )}
                  <div className={Styles.nametime}>
                    <p className={Styles.name}>{post.userId.name}</p>
                    <p className={Styles.time}>{post.time}</p>
                  </div>
                </div>
                <p style={{opacity:"0.7"}}>{post.location}</p>
                <p className={Styles.description}>{post.description}</p>
               {post.userId.image && <img src={`http://localhost:5000/${post.userId.image}`} className={Styles.postImage} alt="Post"></img>} 
              </div>
            )
          ))}
          {loading && <p>Loading...</p>}
        </div>
      </div>
    </>
  );
};

export default Jobs;
