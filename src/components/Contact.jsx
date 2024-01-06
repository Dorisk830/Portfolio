import React from 'react';

const Contact = () => {
  return (
    <div name="contact" className='w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
      <div className='flex justify-between p-4 max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
          <p className='py-5 text-2xl text-cyan-600'>
            Get in touch with me;<br /></p>
            <p className='py-1 text-xl text-cyan-500'>
            kipropdoris@gmail.com <br />
            +254715123718 <br />
            P.o Box 26-30705 Kapsowar <br />
          </p>
        </div>
        <form action="https://getform.io/f/5b742169-b191-4cd3-a006-65511642f431"
              method='POST'
              className='flex flex-col w-full md:w-1/2'>
          <input
            type="text" 
            name="name"
            placeholder="Enter your name"
            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          />
          <input
            type="text" 
            name="email"
            placeholder="Enter your email"
            className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"                    
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="4"
            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          ></textarea>

          <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500
            px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 '>Send message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
