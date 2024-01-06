import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-screen h-full bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-centre w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-l py-3'>
                    I'm a passionate full-stack developer with a strong foundation in web technologies.
                    My expertise includes HTML,CSS,ReactJS, NodeJS,Javascript,Python,SQL and Flask. and I love crafting user interfaces with the power of Tailwind CSS
                    I enjoy turning ideas into reality by building scalable and efficient applications.
                </p>
                <br />
                <p className='text-l'>
                    Whether it involves designing a responsive front-end or developing robust back-end services, I strive to deliver high-quality solutions that meet the needs of users.
                    My journey in web development has been exciting, and I'm always eager to learn and adapt to new technologies and best practices.
                    Let's collaborate and bring your projects to life.
                </p>

            </div>
        </div>
    )
}

export default About;