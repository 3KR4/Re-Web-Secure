import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

export function MySwiper(props) {
  const page = props.nowPage.projects;

  const projectsRendering = page.map((x) => (
    <SwiperSlide key={x.id} className='box'>
      <img src={x.img} alt={x.name} />
      <h4>{x.name}</h4>
      <p>{x.title}</p>
    </SwiperSlide>
  ));

  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      pagination={{ el: '.swiper-pagination', clickable: true }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_container projectsHolder"
    >
      {projectsRendering}

      <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
          <KeyboardArrowLeftIcon className='icon'/>
          </div>
          <div className="swiper-button-next slider-arrow">
            <KeyboardArrowRightIcon className='icon'/>
          </div>

          <div className="swiper-pagination"></div>
        </div>
    </Swiper>
  );
}

export default MySwiper;
