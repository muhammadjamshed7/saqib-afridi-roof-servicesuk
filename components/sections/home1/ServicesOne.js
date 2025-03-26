'use client';
import Link from 'next/link';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Swiper options
const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 2,
  spaceBetween: 30,
  speed: 2000,
  autoplay: {
    delay: 9000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },
  pagination: {
    el: '.swiper-dot-style1',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    0: {
      spaceBetween: 0,
      slidesPerView: 1,
    },
    375: {
      spaceBetween: 30,
      slidesPerView: 1,
    },
    575: {
      spaceBetween: 30,
      slidesPerView: 1,
    },
    768: {
      spaceBetween: 30,
      slidesPerView: 1,
    },
    992: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    1200: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
    1320: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
  },
};

// Sample service data
const services = [
  {
    imgName: 'pitchupdated.webp',
    title: 'Pitched roof',
    link: '/pitched-roof',
    description: 'Roof service involves the maintenance and repair of roofs residential.',
  },
  {
    imgName: 'flatt.jpg',
    title: 'Flat Roofing services',
    link: '/sure-guard-roofing-services',
    description: 'Roof service involves the maintenance and repair of roofs residential.',
  },
  {
    imgName: 'g5.jpg',
    title: 'Guttering, Fascia and soffits',
    link: '/peak-performance-roofing',
    description: 'Roof service involves the maintenance and repair of roofs residential.',
  },
  {
    imgName: 'chm.jpg',
    title: ' Chimney Leadwork and chimney demolition',
    link: '/skyline-roofing-solutions',
    description: 'Roof ser vice involves the maintenance and repair of roofs residential.',
  },
  {
    imgName: 'led.jpg',
    title: 'Leadwork Solution',
    link: '/skyline-roofing-solutions',
    description: 'Lead work is a vital part of any roof and is necessary to prevent water ingress.',
  },
  {
    imgName: 'dry.jpg',
    title: 'Dry Verge System',
    link: '/skyline-roofing-solutions',
    description: 'Dry verge system is a maintenance free system that protects the verge of a roof.',
  },
  {
    imgName: 'rooofmass.jpeg',
    title: 'Roof moss & Gutter cleaning.',
    link: '/skyline-roofing-solutions',
    description: 'Roof moss and gutter cleaning we provide a professional roof cleaning service.',
  },
  {
    imgName: 'dry.jpeg',
    title: 'Dry ridges system.',
    link: '/skyline-roofing-solutions',
    description: 'Dry ridge system is a maintenance free system that secures the ridge tiles of a roof.',
  },
];

export default function ServicesOne() {
  return (
    <section className="services-one">
      <div className="container">
        <div className="section-title text-center">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">latest service</span>
          </div>
          <h2 className="section-title__title">
            Quality roofing <span>solutions</span> <br /> every time
          </h2>
        </div>
        <div className="services-one__carousel">
          <Swiper {...swiperOptions}>
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="services-one__single">
                  <div className="services-one__img-box">
                    <div className="services-one__img">
                      <img
                        src={`/assets/images/roof/${service.imgName}`}
                        alt={service.title}
                        width="300px"
                        height="200px"
                      />
                    </div>
                    <div className="services-one__icon">
                      <span className="icon-paint"></span>
                    </div>
                  </div>
                  <div className="services-one__content">
                    <h3 className="services-one__title">
                      <Link href={service.link}>{service.title}</Link>
                    </h3>
                    <p className="services-one__text">{service.description}</p>
                    <div className="services-one__btn-box">
                      <Link href={"#"} className="services-one__btn thm-btn">
                        Read more
                        <span className="icon-dubble-arrow-right"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Navigation Buttons */}
        
        {/* Pagination */}
        
      </div>
    </section>
  );
}
