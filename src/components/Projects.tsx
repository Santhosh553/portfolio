import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'

import 'swiper/swiper.min.css'
import 'swiper/css/pagination'

import { TitleSection, DisplayProject } from './others'

const Projects = () => {
  const projects = [
    {
      name: 'Flight Path: Your Ticket to Adventure',
      images: [
        '/images/Flight/A1.png',
        '/images/Flight/A2.png',
        '/images/Flight/A3.png',
        '/images/Flight/A4.png',
        '/images/Flight/A5.png',
        '/images/Flight/A6.png',
        '/images/Flight/A7.png'
      ]
    },
    {
      name: 'Cafe Chroma: Where Flavors Paint the Day',
      images: [
        '/images/Cafe/C1.png',
        '/images/Cafe/C2.png',
        '/images/Cafe/C3.png',
        '/images/Cafe/C4.png',
        '/images/Cafe/C5.png',
        '/images/Cafe/C6.png',
        '/images/Cafe/C7.png',
        '/images/Cafe/C8.png',
        '/images/Cafe/C9.png'
      ]
    },
    {
      name: 'BookWise: A Smart Library Management System',
      images: [
        '/images/LMS/L1.png',
        '/images/LMS/L2.png',
        '/images/LMS/L3.png'
      ]
    },
    {
      name: 'Amazart: Shop with Style and Ease',
      images: [
        '/images/ECommerce/E1.png',
        '/images/ECommerce/E2.png',
        '/images/ECommerce/E3.png',
        '/images/ECommerce/E4.png',
        '/images/ECommerce/E5.png',
        '/images/ECommerce/E6.png',
        '/images/ECommerce/E7.png',
        '/images/ECommerce/E8.png'
      ]
    }
    // {
    //   name: 'Event Plus Landing Page',
    //   images: [
    //     '/images/ev1.webp',
    //     '/images/ev2.webp',
    //     '/images/ev3.webp',
    //     '/images/ev4.webp',
    //     '/images/ev5.webp',
    //     '/images/ev6.webp'
    //   ]
    // }
  ]
  return (
    <div
      id="projects"
      className="w-full flex flex-col items-center justify-center gap-5 pt-20 px-5 lg:px-24"
    >
      <TitleSection title="Projects" />

      <div className="w-full flex h-64">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 0
            },
            376: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 0
            },
            576: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 0
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 30
            },
            992: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 30
            },
            1200: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 30
            }
          }}
          modules={[Autoplay]}
          className="mySwiper w-full h-full flex flex-col space-y-3"
        >
          <div className="w-full flex flex-row space-x-4">
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="w-full h-full">
                <div className="w-full h-full flex flex-col space-y-5 items-center justify-center">
                  <DisplayProject images={project.images} />
                  <h4 className="text-center text-xl font-medium">
                    {project.name}
                  </h4>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  )
}

export default Projects
