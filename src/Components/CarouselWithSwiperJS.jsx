// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import '../Styles/Layout/flex.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// import img1 from '../Assets/images/carouselLeft/img1.png';
import img1 from '../Assets/images/carouselLeft/img1.png';
import img2 from '../Assets/images/carouselLeft/rainbowBg.jpg';
import img4 from '../Assets/images/carouselLeft/yellowBg.jpg';
import img5 from '../Assets/images/carouselLeft/abstractBg.png';
import img6 from '../Assets/images/carouselLeft/linesBg.jpg';
import img7 from '../Assets/images/carouselLeft/cubesBg.jpg';

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

export default function CarouselWithSwiperJS() {
  const imageStyles = ['h-full', 'w-full', 'object-cover'];

  return (
    <div className='carousella hidden lg:block'>
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
            alt='slide 1'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={imageStyles.join(' ')}
            // src='https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg'
            src={img2}
            alt='slide 2'
          />
        </SwiperSlide>{' '}
        <SwiperSlide>
          <img
            className={imageStyles.join(' ')}
            // src='https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg'
            src={img4}
            alt='slide 4'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={imageStyles.join(' ')}
            // src='https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg'
            src={img5}
            alt='slide 5'
          />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img
            className={imageStyles.join(' ')}
            // src='https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg'
            src={img6}
            alt='slide 6'
          />
        </SwiperSlide> */}
        <SwiperSlide>
          <img
            className={imageStyles.join(' ')}
            // src='https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg'
            src={img7}
            alt='slide 7'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
