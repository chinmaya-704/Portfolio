import React from 'react'
import Intro from './Intro'


const Home = () => {
  return (
    <section className="flex flex-row max-md:flex-col items-center justify-between py-4 max-md:py-6">

      <Intro />

      <div className="box-wrapper max-md:w-full max-md:mt-4 flex items-center justify-center w-1/2 relative">
      <div className="box relative w-[530px] h-[530px] rounded-full p-[6px]">
        <img
          src="dp.png"
          alt="Chinmaya Kumar Sahoo"
          className="w-full h-full rounded-full object-cover relative z-10"
        />
        </div>
      </div>

  </section>
  )
}

export default Home
