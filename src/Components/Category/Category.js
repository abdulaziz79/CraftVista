import React from 'react'
import Styles from "./Category.module.css"
import image from "../../assets/images/spiderman.png"

const categs =[
    {
        id:1,
        title:"plamber",
        image:"https://w7.pngwing.com/pngs/895/199/png-transparent-spider-man-heroes-download-with-transparent-background-free-thumbnail.png"
    },
    {
        id:1,
        title:"plamber",
        image:"https://w7.pngwing.com/pngs/895/199/png-transparent-spider-man-heroes-download-with-transparent-background-free-thumbnail.png"
    },
    {
        id:1,
        title:"plamber",
        image:"https://w7.pngwing.com/pngs/895/199/png-transparent-spider-man-heroes-download-with-transparent-background-free-thumbnail.png"
    },
    {
        id:1,
        title:"plamber",
        image:"https://w7.pngwing.com/pngs/895/199/png-transparent-spider-man-heroes-download-with-transparent-background-free-thumbnail.png"
    },
    {
        id:1,
        title:"plamber",
        image:"https://w7.pngwing.com/pngs/895/199/png-transparent-spider-man-heroes-download-with-transparent-background-free-thumbnail.png"
    },
    {
        id:1,
        title:"plamber",
        image:"https://w7.pngwing.com/pngs/895/199/png-transparent-spider-man-heroes-download-with-transparent-background-free-thumbnail.png"
    },
    {
        id:1,
        title:"plamber",
        image:"https://w7.pngwing.com/pngs/895/199/png-transparent-spider-man-heroes-download-with-transparent-background-free-thumbnail.png"
    },
    {
        id:1,
        title:"plamber",
        image:"https://w7.pngwing.com/pngs/895/199/png-transparent-spider-man-heroes-download-with-transparent-background-free-thumbnail.png"
    },
    {
        id:1,
        title:"plamber",
        image:"https://w7.pngwing.com/pngs/895/199/png-transparent-spider-man-heroes-download-with-transparent-background-free-thumbnail.png"
    },

]

const Category = () => {
  return (
    <div className={Styles.container}>
        <div className={Styles.wrapper}>
        {categs.map((categ)=>(
            <div className={Styles.categ} key={categ.id}>
                <img src={categ.image} className={Styles.img}></img>
                <h3 className={Styles.h3}>{categ.title}</h3>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Category
