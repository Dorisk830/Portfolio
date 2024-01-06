import React from 'react';
import Profile from '../assets/profile.png';
import { IoIosArrowForward } from 'react-icons/io';

const Home = () => {
  return (
    <div
      name='home'
      className='h-screen w-full bg-gradient-to-b from-black to to-gray-800'
    >
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text text-4xl sm:text-7xl font-bold text-white'>I'm a Fullstack Developer</h2>
          <p className='text-gray-200 py-4 max-w-md text-3xl'>Experience</p>
          <div>
            <button className='group text-white w-fit px-6 py-3 my-2 flex items rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <IoIosArrowForward size={25} className='ml-1' /> {}
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={Profile}
            alt='my profile'
            className='rounded-2xl mx-auto w-2/3 md:w-full'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;