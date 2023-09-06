import '../Styles/app.scss';
import ContentLeftBottom from './ContentLeftBottom';
import CarouselWithSwiperJS from './CarouselWithSwiperJS';
import ContentRight from './ContentRight';
import Navigation from './Navigation';
import '../Styles/Layout/flex.scss';

function App() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='content-container flex relative'>
        <div className='depth1'></div>
        <CarouselWithSwiperJS />
        <ContentLeftBottom />
        <ContentRight />
        <div className='depth3'></div>
        <Navigation />
      </div>
    </div>
  );
}

export default App;
