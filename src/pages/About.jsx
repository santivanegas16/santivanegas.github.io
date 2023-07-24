import imagenFondo from '/bg3.jpg';

export default function About() {
  return (
    <>
      <div id="index" className='w-full min-h-screen flex flex-col md:flex-row'>
        <div className='w-full min-h-screen md:w-[70%] bg-white flex flex-col items-center justify-center pt-[80px] pb-[50px]'>
          <h1 className='text-black font-bold text-[50px] text-center leading-none'>About Me</h1>
          <p className='text-black font-normal text-[16px]  w-[60%] text-justify mt-5'>I'm Santiago Vanegas, I'm from Medellin, Colombia, I'm an electrical engineer and full stack web developer. I am a person passionate about technology and programming. I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me. </p>
          <p className='text-black font-normal text-[16px]  w-[60%] text-justify mt-5'>I consider myself a person with excellent teamwork skills, good communication, adaptability to change and problems solving.  I am always interested in continuing to learn a lot as this is an area of constant change and growth, and it is one of the main reasons I decided to be part of this world of development.</p>
          <h1 className='text-black font-bold text-[50px] text-center leading-none mt-10'>My skills</h1>
          <div className="flex justify-center mt-10 flex-wrap lg:flex-nowrap">
          <img src="/skj.png" className="w-[120px] h-[110px] mr-4 transition hover:scale-125 " />
          <img src="/skc.png" className="w-[120px] h-[110px] mr-4 transition hover:scale-125 " />
          <img src="/skh.png" className="w-[120px] h-[110px] mr-4 transition hover:scale-125 " />
          <img src="/sk2.png" className="w-[120px] h-[100px] mr-4 transition hover:scale-125 " />
          <img src="/sk3.png" className="w-[120px] h-[100px] mr-4 transition hover:scale-125 " />
          <img src="/sk4.png" className="w-[120px] h-[100px] mr-4 transition hover:scale-125 " />
          </div>
        </div>
        <div className='hidden md:flex w-full min-h-screen md:w-[35%] py-[20px]  justify-center items-center md:flex-col relative bg-cover bg-no-repeat' style={{ backgroundImage: `url(${imagenFondo})` }}>
          <img src="/Photo1.jpeg" className="w-[350px] h-[450px] object-cover absolute left-[-30px] rounded-lg" />
        </div>
      </div>
    </>
  )
}
