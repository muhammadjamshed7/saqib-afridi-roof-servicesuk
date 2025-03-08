'use client';
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
      spaceBetween: 0,
      slidesPerView: 1,
    },
    575: {
      spaceBetween: 0,
      slidesPerView: 2,
    },
    768: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
    992: {
      spaceBetween: 30,
      slidesPerView: 4,
    },
    1200: {
      spaceBetween: 30,
      slidesPerView: 5,
    },
    1320: {
      spaceBetween: 30,
      slidesPerView: 5,
    },
  },
};

// Dynamic data array
const brandData = [
  { src: 'https://cdn.dribbble.com/userupload/17477813/file/original-b55bfea0dc06b00077808a2f3ff208d7.jpg?resize=400x0', alt: 'Construction Brand 1' },
  { src: 'https://cdn.dribbble.com/userupload/17477813/file/original-b55bfea0dc06b00077808a2f3ff208d7.jpg?resize=400x0', alt: 'Construction Brand 2' },
  { src: 'https://cdn.dribbble.com/userupload/17477813/file/original-b55bfea0dc06b00077808a2f3ff208d7.jpg?resize=400x0', alt: 'Construction Brand 3' },
  { src: 'https://cdn.dribbble.com/userupload/17477813/file/original-b55bfea0dc06b00077808a2f3ff208d7.jpg?resize=400x0', alt: 'Construction Brand 4' },
  { src: 'https://cdn.dribbble.com/userupload/17477813/file/original-b55bfea0dc06b00077808a2f3ff208d7.jpg?resize=400x0', alt: 'Construction Brand 5' },
  { src: 'https://cdn.dribbble.com/userupload/17477813/file/original-b55bfea0dc06b00077808a2f3ff208d7.jpg?resize=400x0', alt: 'Construction Brand 6' },
  { src: 'https://cdn.dribbble.com/userupload/17477813/file/original-b55bfea0dc06b00077808a2f3ff208d7.jpg?resize=400x0', alt: 'Construction Brand 7' },
  { src: 'https://cdn.dribbble.com/userupload/17477813/file/original-b55bfea0dc06b00077808a2f3ff208d7.jpg?resize=400x0', alt: 'Construction Brand 8' },
  { src: 'https://cdn.dribbble.com/userupload/17477813/file/original-b55bfea0dc06b00077808a2f3ff208d7.jpg?resize=400x0', alt: 'Construction Brand 9' },
  
];

export default function BrandOne() {
  return (
    <>
      {/* Brand One Start */}
          {/* Swiper Slider */}
          {/* <Swiper {...swiperOptions}>
            {brandData.map((brand, index) => (
              <SwiperSlide key={index}>   
                <div className="brand-one__single">
                  <div className="brand-one__img">
                    <img src={brand.src} alt={brand.alt} width="700px" height="70px" />
                  </div>
                </div> 
              </SwiperSlide>
            ))}  
          </Swiper> */}
      {/* Brand One End */}  
    </>
  );
}
