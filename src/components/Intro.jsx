import React, { useRef } from 'react'
import Socials from './Socials'
import BlurText from './styles/Blur'
import GradientText from './styles/Gradient'
import { ReactTyped } from 'react-typed'

const Intro = () => {
  const containerRef = useRef(null)
  const phrase = ["MERN Stack Developer"]

  return (
    <div className="max-md:w-full w-1/2 max-md:mb-4 ">
      <div className="flex flex-col justify-center items-center px-4 mt-4 space-y-4">

        <h2 className="text-6xl font-bold dance">
          Hi, I'm{' '}
          <span className="text-white block">
            <BlurText
              text="Chinmaya Kumar Sahoo"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-5xl mb-4 md:mb-8"
            />
          </span>
        </h2>

        <h3 className="  font-semibold text-4xl text-center mb-4">
          <ReactTyped
            strings={phrase}
            typeSpeed={200}
            loop
            backSpeed={20}
            cursorChar='|'
            showCursor={true}
          />
        </h3>

        <div
          ref={containerRef}
          style={{ position: 'relative' }}
          className="text-gray-400 w-full max-w-2xl lora text-base md:text-xl p-2 md:p-4 rounded-lg shadow-lg mx-auto bg-gray-800 backdrop-blur-md"
        >
          <GradientText
            colors={["#40ffaa", "#7e9fed", "#40ffaa", "#7e9fed", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class flex justify-center items-center"
          >
            I’m skilled in building full-stack applications using MongoDB, Express.js, React.js, and Node.js. I enjoy crafting responsive user interfaces and robust back-end systems. Passionate about clean code and continuous learning, I focus on creating scalable and efficient web solutions that deliver great user experiences and meet real-world business needs.
          </GradientText>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center justify-center mt-6 w-full">
          <div className="card-wrapper h-[50px] w-[150px] md:w-[120px] flex items-center justify-center">
            <div className="card-content flex items-center justify-center text-md text-center ">
              <div className=" md:max-w-[70%] text-center play flex items-center justify-center">
                <a
                  href="Chinmaya Kumar Sahoo.pdf"
                  download="Chinmaya Kumar Sahoo.pdf"
                  className="py-2 px-4  transition"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <Socials />
        </div>

      </div>
    </div>
  )
}

export default Intro
