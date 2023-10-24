import '../Styles/app.scss';
import ContentLeftBottom from './ContentLeftBottom';
import CarouselWithSwiperJS from './CarouselWithSwiperJS';
import ContentRight from './ContentRight';
import Navigation from './Navigation';
import '../Styles/Layout/flex.scss';

import { AnimatePresence } from 'framer-motion';

import { motion } from 'framer-motion';
import ParticleA from './ParticleA';

function App() {
  const fadeOnLoadLeft = {
    initial: {
      opacity: 0,
      x: -1000,
    },
    final: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
        delay: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const fadeOnLoadTop = {
    initial: {
      opacity: 0,
      y: -1000,
    },
    final: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        delay: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <AnimatePresence>
      <div className='w-screen h-screen flex justify-center items-center'>
        <ParticleA />
        <div className='content-container flex relative'>
          <div className='depth1 hidden xl:block'></div>
          <CarouselWithSwiperJS loader={fadeOnLoadTop} />
          <ContentLeftBottom loader={fadeOnLoadLeft} />
          <ContentRight />
          <motion.div
            variants={fadeOnLoadTop}
            initial='initial'
            animate='final'
            className='depth3'
          ></motion.div>
          <Navigation loader={fadeOnLoadTop} />
        </div>
      </div>
    </AnimatePresence>
  );
}

export default App;
