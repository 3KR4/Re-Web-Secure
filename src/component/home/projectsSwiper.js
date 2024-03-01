import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Navigation } from 'swiper/react'; // Import Navigation directly from swiper/react
import { useRef } from 'react'; // Import useRef hook

export function MySwiper(props) {
  const swiperRef = useRef(null); // Create a ref for the Swiper instance

  const goToPrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev(); // Navigate to the previous slide
    }
  };
  

  const goToNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext(); // Navigate to the next slide
    }
  };

  const page = props.nowPage.projects;

  const projectsRendering = page.map((x) => (
    <SwiperSlide key={x.id} className={x.active === true ? "box active" : "box"}>
      <img src={x.img} alt={x.name} />
      <h4>{x.name}</h4>
      <p>{x.title}</p>
    </SwiperSlide>
  ));

  return (
    <Swiper
      className="projectsHolder"
      slidesPerView={4}
      spaceBetween={10}
      slidesPerGroup={5}
      loop={true}
      loopFillGroupWithBlank={true}
      navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }} // Navigation configuration
      ref={swiperRef} // Assign the ref to the Swiper instance
    >
      {projectsRendering}
      <div className="swiper-button-prev swiperBtn" onClick={goToPrevSlide}></div> {/* Previous button */}
      <div className="swiper-button-next swiperBtn" onClick={goToNextSlide}></div> {/* Next button */}
    </Swiper>
  );
}

export default MySwiper;
