import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-full bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-centre w-full h-screen'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl py-3'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium voluptate omnis ea odit ex incidunt, hic dolorem, architecto repellendus dolores aperiam ullam aut. Est et sunt sint sed aut consectetur?
            </p>
            <br />
            <p className='text-xl'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam eligendi sed explicabo neque recusandae itaque deleniti reiciendis, illum exercitationem, porro accusamus nobis repellat, facilis adipisci. Consequatur rerum voluptatem iste libero.

            </p>

        </div>        
    </div>
  )
}

export default About;