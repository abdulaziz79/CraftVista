import React from 'react'
import Styles from "./Workers.module.css"
// import tools from '../../assets/images/tools.jpg'
import PageHero from '../../Components/pageHero/PageHero'
import Masonryy from '../../Components/Masonry/Masonry'
import Spinner from '../../Components/Spinner'
import { useState } from 'react'
import Category from '../../Components/Category/Category'

const Data=[
  {
    id:1,
    name:"abdallah",
    image:'https://img.freepik.com/free-photo/smiling-young-female-construction-worker-wearing-safety-helmet-safety-vest-hugging-notepad_409827-150.jpg'
  },
  {
    id:2,
    name:"abdallah",
    image:'https://img.freepik.com/free-photo/smiling-young-female-construction-worker-wearing-safety-helmet-safety-vest-hugging-notepad_409827-150.jpg'
  },
  {
    id:3,
    name:"abdallah",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ61yrH-uBgiaXUvYiH8A2tMofDJrhHtdBJQ&usqp=CAU'
  },
  {
    id:4,
    name:"abdallah",
    image:'https://img.freepik.com/free-photo/smiling-young-female-construction-worker-wearing-safety-helmet-safety-vest-hugging-notepad_409827-150.jpg'
  },
  {
    id:5,
    name:"abdallah",
    image:'https://img.freepik.com/free-photo/smiling-young-female-construction-worker-wearing-safety-helmet-safety-vest-hugging-notepad_409827-150.jpg'
  },

  {
    id:6,
    name:"abdallah",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ61yrH-uBgiaXUvYiH8A2tMofDJrhHtdBJQ&usqp=CAU'
  },  {
    id:7,
    name:"abdallah",
    image:'https://img.freepik.com/free-photo/smiling-young-female-construction-worker-wearing-safety-helmet-safety-vest-hugging-notepad_409827-150.jpg'
  },
  {
    id:8,
    name:"abdallah",
    image:'https://img.freepik.com/free-photo/smiling-young-female-construction-worker-wearing-safety-helmet-safety-vest-hugging-notepad_409827-150.jpg'
  },
  {
    id:9,
    name:"abdallah",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ61yrH-uBgiaXUvYiH8A2tMofDJrhHtdBJQ&usqp=CAU'
  },

]


const Workers = () => {
  const [loading, setLoading] = useState(false)
  if(loading) return <Spinner message="We are adding new ideas" />
  return (
    
    <div className={Styles.container}>
      <Category />
      <Masonryy data={Data} />
    </div>
  )
}

export default Workers
