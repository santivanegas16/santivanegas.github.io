import imagenFondo from '/bg3.jpg';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ziko55f', 'template_utswuuj', form.current, 'T-2sSI2mN94KrAiw-')
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Message sent",
          confirmButtonColor: "#F97316"
      })
        form.current.reset()
      }, (error) => {
        Swal.fire({
          icon: "error",
          title: "Error sending message",
          html: error,
          confirmButtonColor: "#F97316"
      })
      });
  };

  return (
    <>
      <div id="contact" className='w-full min-h-screen flex flex-col md:flex-row bg-cover bg-no-repeat'>
        <div className='w-full h-screen min-h-[700px] flex flex-col items-center justify-center py-[200px]'>
          <h1 className='text-black font-bold text-[50px] text-center mb-5'>Contact</h1>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col justify-center items-center w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] h-[800px]  rounded-xl  shadow-2xl shadow-gray-700 bg-[#8fbed2] gap-5 p-5">
            <input name="user_email" className="bg-[#f0f0f0] w-[90%] h-[50px] rounded-xl p-2" required type='email' placeholder='Email'></input>
            <textarea name="message" className="bg-[#f0f0f0] w-[90%] h-[200px] resize-none rounded-xl p-2" required placeholder="Enter Your Message"></textarea>
            <button className='bg-[#2f4368] p-2 rounded-full w-[100px] text-white font-bold transition hover:scale-110' type='submit'>Send</button>
          </form>
        </div>
        <div className='hidden md:flex w-full min-h-screen md:w-[50%] py-[20px]  justify-center items-center md:flex-col relative bg-cover bg-no-repeat' style={{ backgroundImage: `url(${imagenFondo})` }}/>
      </div>
    </>
  )
}
