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
        <CarouselWithSwiperJS />
        <ContentLeftBottom />
        <ContentRight />
        <Navigation />
      </div>
    </div>
  );
}

export default App;
