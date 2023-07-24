import React from 'react'
import imagenFondo from '/bg3.jpg';



export default function Home() {
  return (
    <>
      <div id="home" className='w-full min-h-screen flex flex-col md:flex-row'>
        <div className='w-full min-h-screen pt-[100px] pb-[100px] flex flex-col items-center justify-center bg-cover'>
          <img src="/profile-pic.png" className="w-[250px] h-[250px] object-cover mb-5" />
          <br className='w-[80%] border-black border-b-2 mb-5'></br>
          <div className='relative flex flex-col items-center '>
            <div className='bg-[#d7e7f4] flex flex-col justify-center items-center w-[70%] p-5 rounded-3xl z-10'>
              <h1 className='text-black font-bold text-[50px] text-center leading-none'>Hi! I'm Santiago Vanegas</h1>
              <p className='text-black font-normal text-[20px] text-center mt-5 w-[70%] '>Engineer and Full Stack Web Developer. I am a person passionate about technology and programming, oriented to the creation of functional, responsive and quality applications and websites.</p>
            </div>
            <div className="flex items-end justify-center mt-8 absolute top-[10px] rounded-3xl bg-[#2f4368] w-[75%] h-[100%]" />
          </div>
        </div>
        <div className='hidden md:flex w-full min-h-screen md:w-[50%] py-[20px]  justify-center items-center md:flex-col relative bg-cover bg-no-repeat' style={{ backgroundImage: `url(${imagenFondo})` }}/>
      </div>
    </>
  )
}
