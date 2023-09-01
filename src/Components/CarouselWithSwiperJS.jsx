// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import '../Styles/Layout/grid.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// import img1 from '../Assets/images/carouselLeft/img1.png';
import img1 from '../Assets/images/carouselLeft/img1.png';

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

export default function CarouselWithSwiperJS() {
  const imageStyles = ['h-full', 'w-full', 'object-cover'];

  return (
    <div className='carousel-grid'>
      <Swiper
        spaceBetween={30}
        speed={3000}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect='fade'
        className='mySwiper h-full w-full'
      >
        <SwiperSlide>
          <img
            className={imageStyles.join(' ')}
            // src='https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg'
            src={img1}
            alt='image slide 1'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={imageStyles.join(' ')}
            // src='https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg'
            src={img1}
            alt='image slide 2'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
