import testImageOne from '../Assets/images/carouselLeft/test/lightning-2222412.jpg';
import testImageTwo from '../Assets/images/carouselLeft/test/thunder-4963719.jpg';
import testImageThree from '../Assets/images/carouselLeft/test/thunderstorm-4375844.jpg';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function CarouselBS() {
  return (
    <Carousel
      fade
      controls={false}
      indicators={false}
      interval={8000}
      pause='hover'
    >
      <Carousel.Item>
        <img src={testImageOne} alt='' />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={testImageTwo} alt='' />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={testImageThree} alt='' />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBS;
