import React from 'react'
import Carousel from './styles/Carousel'

const Projects = () => {
  return (
    <div className='flex flex-col space-y-6'>
      <Carousel items={items} />
      <p className=' text-center text-5xl dance text-amber-400'>Some Beginner Level Projects</p>
      <Carousel items={old} />
    </div>
  )
}

export default Projects

const items=[
   {
      img:"/projects/gemini.png",
      desc:"React JS, Tailwind CSS",
      title:"Gemini Clone",
      link:"https://gemini-flame-seven.vercel.app/"
   },
   {
      img:"/projects/Brain_Tumor.png",
      desc:"React JS, Tailwind CSS and Flask",
      title:"Brain Tumor Detection",
      link:"https://github.com/chinmaya-704/Brain_Tumor_Detection"
   },
   {
      img:"/projects/Book.png",
      desc:"MERN Stack",
      title:"Book List App",
      link:"https://book-chi-opal.vercel.app/"
   }   
]

const old=[
   {
      img:"/projects/game.png",
      desc:"HTML, CSS, Javascript",
      title:"Rock Paper Scissors",
      link:"https://chinmaya-704.github.io/Rock_Paper_Scissors/"
   },
   {
      img:"/projects/calculator.png",
      desc:"HTML, CSS, Javascript",
      title:"Calculator",
      link:"https://chinmaya-704.github.io/CALCULATOR/"
   },
   {
      img:"/projects/landing_page.png",
      desc:"HTML, CSS",
      title:"Landing Page",
      link:"https://chinmaya-704.github.io/LANDING-PAGE/"
   },
   {
      img:"/projects/gallery.png",
      desc:"HTML, CSS, Javascript",
      title:"Image Gallery",
      link:"https://chinmaya-704.github.io/IMAGE-GALLERY/"
   }
]

// export default items