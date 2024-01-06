import React from 'react';
import Profile from '../assets/profile.png';
import { IoIosArrowForward } from 'react-icons/io';
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div
      name='home'
      className='h-screen w-screen bg-gradient-to-b from-black to to-gray-800'
    >
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text text-4xl sm:text-7xl font-bold text-white'>I'm a Full Stack Developer</h2>
          <p className='text-gray-200 py-4 max-w-md text-l'>
            Experienced in web development, I've refined my skills in creating user-friendly websites and robust applications.
            Eager to bring my expertise to new challenges and contribute to innovative projects."</p>
          <div>
            <Link to="Portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <IoIosArrowForward size={25} className='ml-1' /> { }
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={Profile}
            alt='my profile'
            className='rounded-2xl mx-auto w-2/3 md:w-full justify-end'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;