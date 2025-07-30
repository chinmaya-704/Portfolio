import React from 'react'
import Intro from './Intro'


const Home = () => {
  return (
    <section className="flex flex-row max-md:flex-col items-center justify-between py-4 max-md:py-6">

      <Intro />

      <div className="max-md:w-full max-md:mt-4 flex items-center justify-center w-1/2">
        <img
          src="dp.png"
          alt="Chinmaya Kumar Sahoo"
          className="w-[530px] h-[530px] rounded-full object-cover"
        />
      </div>
      
    </section>
  )
}

export default Home
