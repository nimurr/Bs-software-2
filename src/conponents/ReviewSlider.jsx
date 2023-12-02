import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../App.css';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useRef } from 'react';
import { IoPlayCircleOutline } from 'react-icons/io5';


export default function ReviewSlider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };


 



  return (
    <div className='reviewBG h-auto py-20 '>
      <div className='h-auto '>
        <Swiper  
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper container"
        >
          <div className='w-full  h-[100vh]'>

            <SwiperSlide>
              <div className='w-10/12 m-auto bg-gray-200'>

                <div className='grid md:grid-cols-4  xl:grid-cols-4 justify-center gap-3'>
                  <div className='md:col-span-3 xl:col-span-3 bg-gray-300 col-span-4'>
                    <div className="relative h-full">

                      <img className="h-full" src="https://res.cloudinary.com/degz0rcbh/image/upload/v1701502429/bd_soft_vid6hj.png?fbclid=IwAR2KjRzVhppYorvqXq_rFCS3g-TaMnYdRsJBAjoDgElw8NR-vssYnaLQBoA" alt="" />
                      <div className="absolute bottom-7 right-7 ">

                        <button className=" " onClick={() => document.getElementById('my_modal_3').showModal()}><IoPlayCircleOutline className="text-6xl hover:text-blue-700 transition duration-400 text-white" /></button>
                        <dialog id="my_modal_3" className="modal ">
                          <div className="modal-box">
                            <form method="dialog">
                              <button className="btn btn-sm text-2xl btn-circle btn-ghost absolute right-5 top-3">✕</button>
                            </form>
                            <div className=" h-full">
                              <iframe className="w-full h-[50vh] py-10" width="560" height="315" src="https://www.youtube.com/embed/1yALDdNEuYs?autoplay=1&mute=1" frameBorder="0" allowFullscreen></iframe>
                            </div>
                          </div>
                        </dialog>
                      </div>

                    </div>
                  </div>
                  <div className='col-span-4 grid  md:col-span-1 xl:col-span-1 gap-3 '>
                    <div className="relative">

                      <img className="md:h-[150px] xl:h-80" src="https://res.cloudinary.com/degz0rcbh/image/upload/v1701502429/bd_soft_vid6hj.png?fbclid=IwAR2KjRzVhppYorvqXq_rFCS3g-TaMnYdRsJBAjoDgElw8NR-vssYnaLQBoA" alt="" />
                      <div className="absolute xl:bottom-7 xl:right-7 right-0 bottom-0">
                        <button className=" " onClick={() => document.getElementById('my_modal_3').showModal()}><IoPlayCircleOutline className="text-5xl xl:text-6xl hover:text-blue-700 transition duration-400 text-white" /></button>
                        <dialog id="my_modal_3" className="modal">
                          <div className="modal-box">
                            <form method="dialog">
                              <button className="btn btn-sm text-2xl btn-circle btn-ghost absolute right-5 top-3">✕</button>
                            </form>
                            <div className=" h-full">
                              <iframe className="w-full h-[50vh] py-10" width="560" height="315" src="https://www.youtube.com/embed/1yALDdNEuYs?autoplay=1&mute=1" frameBorder="0" allowFullscreen></iframe>
                            </div>
                          </div>
                        </dialog>
                      </div>

                    </div>
                    <div className="relative ">
                      <img className="md:h-[150px] lg:full xl:h-80" src="https://res.cloudinary.com/degz0rcbh/image/upload/v1701502429/bd_soft_vid6hj.png?fbclid=IwAR2KjRzVhppYorvqXq_rFCS3g-TaMnYdRsJBAjoDgElw8NR-vssYnaLQBoA" alt="" />
                      <div className="absolute xl:bottom-7 xl:right-7 right-0 bottom-0 ">
                        <button className=" " onClick={() => document.getElementById('my_modal_3').showModal()}><IoPlayCircleOutline className="text-5xl xl:text-6xl hover:text-blue-700 transition duration-400 text-white" /></button>
                        <dialog id="my_modal_3" className="modal ">
                          <div className="modal-box">
                            <form method="dialog">
                              <button className="btn btn-sm text-2xl btn-circle btn-ghost absolute right-5 top-3">✕</button>
                            </form>
                            <div className=" h-full">
                              <iframe className="w-full h-[50vh] py-10" width="560" height="315" src="https://www.youtube.com/embed/1yALDdNEuYs?autoplay=1&mute=1" frameBorder="0" allowFullscreen></iframe>
                            </div>
                          </div>
                        </dialog>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='w-10/12 m-auto bg-gray-200'>

                <div className='grid md:grid-cols-4  xl:grid-cols-4 justify-center gap-3'>
                  <div className='md:col-span-3 xl:col-span-3 bg-gray-300 col-span-4'>
                    <div className="relative h-full">

                      <img className="h-full" src="https://res.cloudinary.com/degz0rcbh/image/upload/v1701502429/bd_soft_vid6hj.png?fbclid=IwAR2KjRzVhppYorvqXq_rFCS3g-TaMnYdRsJBAjoDgElw8NR-vssYnaLQBoA" alt="" />
                      <div className="absolute bottom-7 right-7 ">

                        <button className=" " onClick={() => document.getElementById('my_modal_3').showModal()}><IoPlayCircleOutline className="text-6xl hover:text-blue-700 transition duration-400 text-white" /></button>
                        <dialog id="my_modal_3" className="modal ">
                          <div className="modal-box">
                            <form method="dialog">
                              <button className="btn btn-sm text-xl btn-circle btn-ghost absolute right-0 top-0">✕</button>
                            </form>
                            <div className=" h-full">
                              <iframe className="w-full h-[70vh]" width="560" height="315" src="https://www.youtube.com/embed/1yALDdNEuYs?autoplay=1&mute=1" frameBorder="0" allowFullscreen></iframe>
                            </div>
                          </div>
                        </dialog>
                      </div>

                    </div>
                  </div>
                  <div className='col-span-4 grid  md:col-span-1 xl:col-span-1 gap-3 '>
                    <div className="relative">

                      <img className="md:h-[150px] xl:h-80" src="https://res.cloudinary.com/degz0rcbh/image/upload/v1701502429/bd_soft_vid6hj.png?fbclid=IwAR2KjRzVhppYorvqXq_rFCS3g-TaMnYdRsJBAjoDgElw8NR-vssYnaLQBoA" alt="" />
                      <div className="absolute xl:bottom-7 xl:right-7 right-0 bottom-0">
                        <button className=" " onClick={() => document.getElementById('my_modal_3').showModal()}><IoPlayCircleOutline className="text-5xl xl:text-6xl hover:text-blue-700 transition duration-400 text-white" /></button>
                        <dialog id="my_modal_3" className="modal">
                          <div className="modal-box">
                            <form method="dialog">
                              <button className="btn btn-sm text-xl btn-circle btn-ghost absolute right-0 top-0">✕</button>
                            </form>
                            <div className=" h-full">
                              <iframe className="w-full h-[70vh]" width="560" height="315" src="https://www.youtube.com/embed/1yALDdNEuYs?autoplay=1&mute=1" frameBorder="0" allowFullscreen></iframe>
                            </div>
                          </div>
                        </dialog>
                      </div>

                    </div>
                    <div className="relative ">
                      <img className="md:h-[150px] lg:full xl:h-80" src="https://res.cloudinary.com/degz0rcbh/image/upload/v1701502429/bd_soft_vid6hj.png?fbclid=IwAR2KjRzVhppYorvqXq_rFCS3g-TaMnYdRsJBAjoDgElw8NR-vssYnaLQBoA" alt="" />
                      <div className="absolute xl:bottom-7 xl:right-7 right-0 bottom-0 ">
                        <button className=" " onClick={() => document.getElementById('my_modal_3').showModal()}><IoPlayCircleOutline className="text-5xl xl:text-6xl hover:text-blue-700 transition duration-400 text-white" /></button>
                        <dialog id="my_modal_3" className="modal ">
                          <div className="modal-box">
                            <form method="dialog">
                              <button className="btn btn-sm text-xl btn-circle btn-ghost absolute right-0 top-0">✕</button>
                            </form>
                            <div className=" h-full">
                              <iframe className="w-full h-[70vh]" width="560" height="315" src="https://www.youtube.com/embed/1yALDdNEuYs?autoplay=1&mute=1" frameBorder="0" allowFullscreen></iframe>
                            </div>
                          </div>
                        </dialog>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='w-10/12 m-auto bg-gray-200'>

                <div className='grid md:grid-cols-4  xl:grid-cols-4 justify-center gap-3'>
                  <div className='md:col-span-3 xl:col-span-3 bg-gray-300 col-span-4'>
                    <div className="relative h-full">

                      <img className="h-full" src="https://res.cloudinary.com/degz0rcbh/image/upload/v1701502429/bd_soft_vid6hj.png?fbclid=IwAR2KjRzVhppYorvqXq_rFCS3g-TaMnYdRsJBAjoDgElw8NR-vssYnaLQBoA" alt="" />
                      <div className="absolute bottom-7 right-7 ">

                        <button className=" " onClick={() => document.getElementById('my_modal_3').showModal()}><IoPlayCircleOutline className="text-6xl hover:text-blue-700 transition duration-400 text-white" /></button>
                        <dialog id="my_modal_3" className="modal ">
                          <div className="modal-box">
                            <form method="dialog">
                              <button className="btn btn-sm text-xl btn-circle btn-ghost absolute right-0 top-0">✕</button>
                            </form>
                            <div className=" h-full">
                              <iframe className="w-full h-[70vh]" width="560" height="315" src="https://www.youtube.com/embed/1yALDdNEuYs?autoplay=1&mute=1" frameBorder="0" allowFullscreen></iframe>
                            </div>
                          </div>
                        </dialog>
                      </div>

                    </div>
                  </div>
                  <div className='col-span-4 grid  md:col-span-1 xl:col-span-1 gap-3 '>
                    <div className="relative">

                      <img className="md:h-[150px] xl:h-80" src="https://res.cloudinary.com/degz0rcbh/image/upload/v1701502429/bd_soft_vid6hj.png?fbclid=IwAR2KjRzVhppYorvqXq_rFCS3g-TaMnYdRsJBAjoDgElw8NR-vssYnaLQBoA" alt="" />
                      <div className="absolute xl:bottom-7 xl:right-7 right-0 bottom-0">
                        <button className=" " onClick={() => document.getElementById('my_modal_3').showModal()}><IoPlayCircleOutline className="text-5xl xl:text-6xl hover:text-blue-700 transition duration-400 text-white" /></button>
                        <dialog id="my_modal_3" className="modal">
                          <div className="modal-box">
                            <form method="dialog">
                              <button className="btn btn-sm text-xl btn-circle btn-ghost absolute right-0 top-0">✕</button>
                            </form>
                            <div className=" h-full">
                              <iframe className="w-full h-[70vh]" width="560" height="315" src="https://www.youtube.com/embed/1yALDdNEuYs?autoplay=1&mute=1" frameBorder="0" allowFullscreen></iframe>
                            </div>
                          </div>
                        </dialog>
                      </div>

                    </div>
                    <div className="relative ">
                      <img className="md:h-[150px] lg:full xl:h-80" src="https://res.cloudinary.com/degz0rcbh/image/upload/v1701502429/bd_soft_vid6hj.png?fbclid=IwAR2KjRzVhppYorvqXq_rFCS3g-TaMnYdRsJBAjoDgElw8NR-vssYnaLQBoA" alt="" />
                      <div className="absolute xl:bottom-7 xl:right-7 right-0 bottom-0 ">
                        <button className=" " onClick={() => document.getElementById('my_modal_3').showModal()}><IoPlayCircleOutline className="text-5xl xl:text-6xl hover:text-blue-700 transition duration-400 text-white" /></button>
                        <dialog id="my_modal_3" className="modal ">
                          <div className="modal-box">
                            <form method="dialog">
                              <button className="btn btn-sm text-xl btn-circle btn-ghost absolute right-0 top-0">✕</button>
                            </form>
                            <div className=" h-full">
                              <iframe className="w-full h-[70vh]" width="560" height="315" src="https://www.youtube.com/embed/1yALDdNEuYs?autoplay=1&mute=1" frameBorder="0" allowFullscreen></iframe>
                            </div>
                          </div>
                        </dialog>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </SwiperSlide>

          </div>

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </div>
  );
}