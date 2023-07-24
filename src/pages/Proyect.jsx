import imagenFondo from '/bg3.jpg';

export default function Proyect() {
  return (
    <>
      <div id="projects" className='w-full min-h-screen flex flex-col md:flex-row'>
        <div className='w-full min-h-screen md:w-[70%] bg-white flex flex-col items-center justify-center pt-[80px] pb-[50px]'>
          <h1 className='text-black font-bold text-[50px] text-center leading-none'>Projects</h1>

          <div className='flex flex-col items-center md:flex-row  w-[70%] mt-5'>
            <img src="/project1.jpg" className="w-[200px] h-[200px] mt-[15px] mr-3 mb-5" />
            <div className='flex flex-col justify-center'>
              <h1 className='flex text-[30px] font-bold'>Minga <a href="https://github.com/santivanegas16/minga-purple-front" target="_blank">
                <svg style={{ marginRight: '20px' }} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" className="transition hover:scale-110 bi bi-github ml-5" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a></h1>
              <p className='text-justify'>Desarrollo de una página web dinámica y responsiva de cómics y manga utilizando MongoDB, Express.js, React.js, Node.js, Tailwind CSS y metodología SCRUM. Proporcionando a los usuarios una amplia variedad de contenido para explorar y disfrutar.</p>
            </div>
          </div>

          <div className='flex flex-col items-center md:flex-row  w-[70%] mt-5'>
            <img src="/project2.jpg" className="w-[200px] h-[200px] mt-[15px] mr-3 mb-5 " />
            <div className='flex flex-col justify-center'>
              <h1 className='flex text-[30px] font-bold'>Mindy Pet Shop <a href="https://github.com/JALZ2003/Pet_Shop" target="_blank">
                <svg style={{ marginRight: '20px' }} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" className="transition hover:scale-110 bi bi-github ml-5" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a></h1>
              <p className='text-justify'>Desarrollo de una página web dinámica y responsiva para una pet shop. Utilizando HTML,
                CSS, JavaScript, Bootstrap e integrando el consumo de una API; que permite postear un
                nuevo producto para que se visualice automáticamente en el catálogo, además, un carrito
                de compras funcional, donde se pueden agregar dichos productos y comprarlos.</p>
            </div>
          </div>

          <div className='flex flex-col items-center md:flex-row w-[70%] mt-5'>
            <img src="/project3.jpg" className="w-[200px] h-[200px] mt-[15px] mr-3 mb-5 " />
            <div className='flex flex-col justify-center'>
              <h1 className='flex text-[30px] font-bold'>Amazing Events <a href="https://github.com/JALZ2003/Grupo-5" target="_blank">
                <svg style={{ marginRight: '20px' }} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" className="transition hover:scale-110 bi bi-github ml-5" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a></h1>
              <p className='text-justify'>Desarrollo de una página web para una empresa de eventos. Haciendo uso de HTML, CSS,
                JavaScript, SwiperJS y Bootstrap. Integrando el consumo de una API, para obtener los
                datos sobre los eventos; permitiendo visualizar de manera óptima los eventos presentados y
                filtrados.</p>
            </div>
          </div>
        </div>
        <div className='hidden md:flex w-full min-h-screen md:w-[35%] py-[20px]  justify-center items-center md:flex-col relative bg-cover bg-no-repeat' style={{ backgroundImage: `url(${imagenFondo})` }} />
      </div>
    </>
  )
}
