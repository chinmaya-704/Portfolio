import { ul } from 'framer-motion/client'
import React from 'react'

const About = () => {
  return (
    <div className='m-auto flex flex-col items-center justify-center text-white font-sans overflow-hidden px-6'>      
      <h2 className='text-5xl dance font-bold my-6'>Experiences</h2>
      <div className="flex flex-col space-y-6 items-center justify-center py-6">

        {
          items.map((item,index)=>{
            return (
              <div key={index} className="max-md:w-full border-2 border-red-500 w-3/4 rounded-xl py-5 px-3 bg-gray-800/40 backdrop-blur-md shadow-lg">
                <h2 className='text-2xl play mb-2'>{item.title}</h2>
                <p className='text-gray-300 text-sm italic'>{item.date}</p>
                <p className='text-gray-300 text-sm italic'>{item.location}</p>
                <div className='text-gray-200 text-md mt-2 fair'>
                  <ul className="list-disc ml-6">
                    {item.desc.map((detail, id) => (
                      <li key={id}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>              
            )
          })
        }
      </div>
      
    </div>
  )
}

export default About

const items = [
  {
    title: "Advaita Core Team- The official fest of IIIT Bhubaneswar",
    date: "February 2025 - March 2025",
    location: "IIIT Bhubaneswar",
    desc: [
      "Event Coordinator: Coordinated and managed the logistics of the fest, ensuring smooth execution of events and activities.",
      "Decor & Design Lead: Led a team of 30+ members to design and execute innovative decor for flagship events, ensuring timely setup with budget and boosting engagement by 15%",
      "Art Lead: Led a team of 20+ volunteers and successfully organized 3 innovative events, each with"
    ]
  },
  {
    title: "Paracosm (Art & Design Society) - Joint Secretary & Treasurer",
    date: "September 2024 - August 2025",
    location: "IIIT Bhubaneswar",
    desc: [
      "Led and managed the society to hold various Art Events and handled the expenses, ensuring transparency and fair use."
    ]
  },
  {
    title: "Codealpha, Frontend Developer Intern",
    date: "June 2024 - July 2024",
    location: "Remote",
    desc: [
      "Designed and deployed a responsive personal portfolio and dynamic image gallery using ReactJS, Tailwind CSS, HTML, and JavaScript, showcasing frontend development and API integration skills."
    ]
  },
  {
    title: "Kshitiksha Foundation, Content Writing Intern",
    date: "February 2024 - March 2024",
    location: "Remote",
    desc: [
      "Selected and worked as a Content Writer and supported fundraising efforts and led awareness initiatives, resulting in a significant increase in donations and outreach, positively impacting 100 individuals in underserved communities."
    ]
  },
  {
    title: "Odiapreneur Mentor",
    date: "January 2023 - April 2023",
    location: "IIIT Bhubaneswar",
    desc: [
      "Mentored 3 finalist teams from Nuapada district of Odisha for Odiapreneur; a hackathon organized by the Odisha Government for Higher Secondary Students"
    ]
  },
];
