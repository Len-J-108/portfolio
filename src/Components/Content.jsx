import { BrowserRouter } from 'react-router-dom';
import ContentRight from './ContentRight';
import Navigation from './Navigation';
// import ContentLeftBottom from './ContentLeftBottom';
// import CarouselWithSwiperJS from './CarouselWithSwiperJS';
import '../Styles/Layout/grid.scss';

const Content = () => {

  return (
    <div className=''>
      {/* <BrowserRouter> */}
        {/* <CarouselWithSwiperJS />
        <ContentLeftBottom /> */}
      <Navigation />
        <ContentRight />
      {/* </BrowserRouter> */}
    </div>
  );
};

export default Content;
