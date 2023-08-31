import '../Styles/Components/ContentLeft.scss';
import CarouselWithSwiperJS from './CarouselWithSwiperJS';

// import CarouselBS from './CarouselBS';

const ContentLeft = ({ color }) => {
  const style = {
    color: color,
    border: `2px solid ${color}`,
  };
  return (
    <div className='content-left-wrapper' style={style}>
      {/* <CarouselBS /> */}
      <CarouselWithSwiperJS />
    </div>
  );
};

export default ContentLeft;
