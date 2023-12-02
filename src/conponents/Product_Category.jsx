import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { useRef } from 'react';

function Product_Category() {

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const offerProduct = [

    {
      id: 1,
      name: "Mobile Pos Plus",
      description: "Mobile Pos Plus Website All in One Solution No1 Pos Application All Type Trading Business",
      images: ['https://api.bangladeshisoftware.com/a498784d89c-Mobile%20Pos%20Plus%20Website%20all%20in%20one%20solution.webp',
        'https://api.bangladeshisoftware.com/a498784d89c-Mobile%20Pos%20Plus%20Website%20all%20in%20one%20solution.webp',
        'https://api.bangladeshisoftware.com/a498784d89c-Mobile%20Pos%20Plus%20Website%20all%20in%20one%20solution.webp',
        'https://api.bangladeshisoftware.com/a498784d89c-Mobile%20Pos%20Plus%20Website%20all%20in%20one%20solution.webp']
    },
    {
      id: 2,
      name: "Computer Pos Plus",
      description: "Computer Pos Plus Website All in One Solution No1 Pos Application All Type Trading Business",
      images: ['https://api.bangladeshisoftware.com/498784d89cb-Promotion%20banner.webp',
        'https://api.bangladeshisoftware.com/498784d89cb-Promotion%20banner.webp',
        'https://api.bangladeshisoftware.com/498784d89cb-Promotion%20banner.webp',
        'https://api.bangladeshisoftware.com/498784d89cb-Promotion%20banner.webp']
    },
    {
      id: 3,
      name: "Website All in One Solution",
      description: "Pos Plus Website All in One Solution No1 Pos Application All Type Trading Business",
      images: ['https://api.bangladeshisoftware.com/ae8da3d083c-Glossary%20Pos%20Plus%20Websaite%20.webp',
        'https://api.bangladeshisoftware.com/ae8da3d083c-Glossary%20Pos%20Plus%20Websaite%20.webp',
        'https://api.bangladeshisoftware.com/ae8da3d083c-Glossary%20Pos%20Plus%20Websaite%20.webp',
        'https://api.bangladeshisoftware.com/ae8da3d083c-Glossary%20Pos%20Plus%20Websaite%20.webp']
    },
    {
      id: 4,
      name: "Domain Hosting Web Application",
      description: "Hosting Theme - Domain Hosting Web Application for Your Hosting Business",
      images: ['https://api.bangladeshisoftware.com/80ea05fab24-Hosting%20Website.webp',
        'https://api.bangladeshisoftware.com/80ea05fab24-Hosting%20Website.webp',
        'https://api.bangladeshisoftware.com/80ea05fab24-Hosting%20Website.webp',
        'https://api.bangladeshisoftware.com/80ea05fab24-Hosting%20Website.webp']
    },
    {
      id: 5,
      name: "Clipping Path Web Application",
      description: "Clipping Path Web Application for Graphics Service, E-Commerce & Post-Production Businesses",
      images: ['https://api.bangladeshisoftware.com/6b783780ea0-ClippingPath%20Web%20Application%20Banner.webp',
        'https://api.bangladeshisoftware.com/6b783780ea0-ClippingPath%20Web%20Application%20Banner.webp',
        'https://api.bangladeshisoftware.com/6b783780ea0-ClippingPath%20Web%20Application%20Banner.webp',
        'https://api.bangladeshisoftware.com/6b783780ea0-ClippingPath%20Web%20Application%20Banner.webp']
    },
    {
      id: 6,
      name: "SMS Verification Web Application",
      description: "SMS Verification Web Application for Google Voice, WhatsApp, Facebook, and 100+ Other Services",
      images: ['https://api.bangladeshisoftware.com/3b114a5092e-Sms%20Verified%20Web%20Application%20demo.webp',
        'https://api.bangladeshisoftware.com/3b114a5092e-Sms%20Verified%20Web%20Application%20demo.webp',
        'https://api.bangladeshisoftware.com/3b114a5092e-Sms%20Verified%20Web%20Application%20demo.webp',
        'https://api.bangladeshisoftware.com/3b114a5092e-Sms%20Verified%20Web%20Application%20demo.webp']
    },
    {
      id: 7,
      name: "Store Management Software",
      description: "Store Management Software Php And Laravel Script",
      images: ['https://api.bangladeshisoftware.com/ee14f39d498-Xstorebd.com.webp',
        'https://api.bangladeshisoftware.com/ee14f39d498-Xstorebd.com.webp',
        'https://api.bangladeshisoftware.com/ee14f39d498-Xstorebd.com.webp',
        'https://api.bangladeshisoftware.com/ee14f39d498-Xstorebd.com.webp']
    },
    {
      id: 8,
      name: "Topup Website",
      description: "Topup Website Theme Design: The Perfect Solution for Your Topup Business",
      images: ['https://api.bangladeshisoftware.com/87afceda5a8-topuptheme4.1%20copy.webp',
        'https://api.bangladeshisoftware.com/87afceda5a8-topuptheme4.1%20copy.webp',
        'https://api.bangladeshisoftware.com/87afceda5a8-topuptheme4.1%20copy.webp',
        'https://api.bangladeshisoftware.com/87afceda5a8-topuptheme4.1%20copy.webp']
    },
    {
      id: 9,
      name: "Online News Platform Solution",
      description: "News Theme 1.0 – The Ultimate Solution for Your Online News Platform!",
      images: ['https://api.bangladeshisoftware.com/cd87afceda5-news%20theme.webp',
        'https://api.bangladeshisoftware.com/cd87afceda5-news%20theme.webp',
        'https://api.bangladeshisoftware.com/cd87afceda5-news%20theme.webp',
        'https://api.bangladeshisoftware.com/cd87afceda5-news%20theme.webp']
    },
    {
      id: 10,
      name: "Physiotherapy Website",
      description: "Physiotherapy Website Theme Elevate Your Profession",
      images: ['https://api.bangladeshisoftware.com/c7ecd87afce-Physiotherapy-Website-Theme.webp',
        'https://api.bangladeshisoftware.com/c7ecd87afce-Physiotherapy-Website-Theme.webp',
        'https://api.bangladeshisoftware.com/c7ecd87afce-Physiotherapy-Website-Theme.webp',
        'https://api.bangladeshisoftware.com/c7ecd87afce-Physiotherapy-Website-Theme.webp']
    },
  ]

  return (
    <div className='container sm:py-12'>{/* 
      <h2 className='text-5xl md:w-2/3 text-gray-800 mx-auto font-semibold text-center mb-10'>10 Category solutions Softwere</h2> */}
      <div className=' '>
        <Tabs className='flex flex-col-reverse lg:flex-row gap-10 items-center'>
          <div className='lg:w-1/3  p-4 w-full custome_Shadow rounded-md'>
            <TabList className="text-left text-xl space-y-1 mb-5 text-gray-800">
              {
                offerProduct.map(title => <Tab className=" py-2 hover:pl-2 hover:rounded hover:bg-blue-500 hover:text-white cursor-pointer" key={title.id}><h4 className='text-sm xl:text-[18px]'>{title.name}</h4> </Tab>)
              }
            </TabList>
            <div className='text-left '><button className='bg-blue-600 w-full py-3 px-4 text-white rounded hover:bg-slate-800'>Explore All Template</button></div>
          </div>

          <div className='lg:w-2/3 h-full overflow-hidden'>
            {
              offerProduct.map(products => <TabPanel key={products.id} className="lg:space-y-3 w-full" >
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  // navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  onAutoplayTimeLeft={onAutoplayTimeLeft}
                  className="mySwiper backdrop:w-[320px] overflow-hidden sm:w-[620px] w-[320px] lg:w-full"
                >
                  {
                    products.images.map((img, id) => <SwiperSlide className='overflow-hidden sm:w-[620px] w-[320px]' key={id} data-history="1">
                      <figure className='overflow-hidden md:w-full sm:w-[620px] w-[320px]'>
                      <img className='rounded-xl sm:w-[620px]  md:h-auto w-[320px] overflow-hidden'  src={img} alt="" />
                      </figure></SwiperSlide>)
                  }

                  <div className="autoplay-progress hidden" slot="container-end">
                    <svg viewBox="0 0 0 0" ref={progressCircle}>
                      <circle cx="1" cy="1" r="1"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                  </div>
                </Swiper>

                {/* <h2 className=' text-xl  font-semibold w-3/4 mx-auto lg:mx-0'>{products.description}</h2> */}
              </TabPanel>)
            }

          </div>
        </Tabs>
      </div>

    </div>
  )
}

export default Product_Category ;
