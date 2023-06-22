import React from 'react'
import img from '../assets/img.jpeg' 

const About = () => {
  return (
    <div name="About" className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>

        <div className='max-w-[1000px] w-full  grid grid-cols-2 gap-8 '>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
          </div>
          <div>    </div>
        </div>

        <div className='max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold '>
            <p>Hi, I'm Adi
              <p>Nice to meet you.<br/>Please take a look around </p> </p>
          </div>
          <div>
            <p className='font-bold'>
              Organized and dependable candidate successful at managing multiple priorities with a positive attitude. Willingness to take on added responsibilities to meet team goals and , a passionate job seeker with strong organizational skills eager to secure entry-level Web Developer position. Ready to help team achieve company goals.
            </p>
          </div>
        </div>
       
      </div>
    </div>

  )
}

export default About