import React, { useState } from 'react';

const Carousel = ({ items }) => {
  
  const [current, setCurrent] = useState(Math.floor(items.length / 2));

  // @param {'left' | 'right'} direction 
  const rotate = (direction) => {
    setCurrent((prev) => {
      if (direction === 'left') {
        return (prev - 1 + items.length) % items.length;
      } else {
        return (prev + 1) % items.length;
      }
    });
  };

  
  const getTransform = (index) => {
    const offset = index - current;
    const totalItems = items.length;

    const circularOffset = (offset) => {
        if (offset < -Math.floor(totalItems / 2)) return offset + totalItems;
        if (offset > Math.floor(totalItems / 2)) return offset - totalItems;
        return offset;
    };

    const normalizedOffset = circularOffset(offset);

    switch (normalizedOffset) {
        case 0:
            return 'scale-110 z-20 translate-y-0';
        case 1:
            return 'rotate-y-30 translate-x-[100%] scale-90 z-10 translate-y-4';
        case -1:
            return '-rotate-y-30 translate-x-[-100%] scale-90 z-10 translate-y-4';
        case 2:
            return 'rotate-y-45 translate-x-[150%] scale-75 z-0 translate-y-8';
        case -2:
            return '-rotate-y-45 translate-x-[-150%] scale-75 z-0 translate-y-8';
        default:
            return 'opacity-0 pointer-events-none scale-50';
    }
  };

  return (
    <div className="flex flex-col items-center justify-center  text-white font-sans overflow-hidden">
      

      <div className="relative w-full flex justify-center items-center perspective-[1000px] h-[40vh] md:h-[50vh]">
        
        {items.map((item, index) => (
          <div
            key={index}
            className={`
              group absolute flex flex-col items-center justify-center rounded-lg border-2 border-white bg-gray-800/10 backdrop-blur-sm
              transition-transform duration-500 ease-in-out transform
              w-50 h-50 sm:w-53 sm:h-48 md:w-60 md:h-60
              ${getTransform(index)}
            `}
          >

            <div className=" w-full h-full rounded-lg relative bg-gradient-to-tr from-blue-900 to-slate-950">

              <img
                className='object-cover w-full h-full rounded-lg absolute hover:mix-blend-overlay pointer-events-none'
                src={item.img}
                alt={item.title}
              />


              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 z-10 
                opacity-0 translate-y-4 transition-all duration-300 ease-in-out 
                group-hover:opacity-100 group-hover:translate-y-0 pointer-events-auto bg-gradient-to-t from-blue-900/50 to-slate-950 rounded-lg ">
                <p className="mt-2 text-center text-lg">{item.title}</p>
                <p className="text-md text-center">{item.desc}</p>
                <a href={item.link} target='_blank' rel="noopener noreferrer">
                  <button className='text-xs bg-amber-400 text-black px-2 py-1 rounded mt-2 transition-colors duration-300 font-bold'>
                    View Project
                  </button>
                </a>
              </div>


            </div>
         </div>
        ))}

        <button
          className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-8 md:left-16 lg:left-24 text-4xl text-white/70 hover:text-white hover:scale-110 transition-all duration-300 z-30"
          onClick={() => rotate('left')}
          aria-label="Previous item"
        >
          &#9664;
        </button>
        <button
          className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-8 md:right-16 lg:right-24 text-4xl text-white/70 hover:text-white hover:scale-110 transition-all duration-300 z-30"
          onClick={() => rotate('right')}
          aria-label="Next item"
        >
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
