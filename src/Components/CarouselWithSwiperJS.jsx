// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

export default function CarouselWithSwiperJS() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        speed={3000}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect='fade'
        className='mySwiper'
      >
        <SwiperSlide>
          <img
            className='object-fill w-full h-96'
            src='https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg'
            alt='image slide 1'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='object-fill w-full h-96'
            src='https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg'
            alt='image slide 2'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='object-fill w-full h-96'
            src='https://cdn.pixabay.com/photo/2022/07/26/03/35/jogger-7344979__340.jpg'
            alt='image slide 3'
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
