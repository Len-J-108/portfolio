import { Route, Routes, useLocation } from 'react-router-dom';
import Projects from './Projects';
import { AnimatePresence } from 'framer-motion';
import Abilities from './Abilities';
import About from './About';

const RoutesAnimated = () => {
  const location = useLocation();

  const switchProps = {
    initial: {
      opacity: 0,
      y: -50,
      // width: '1px',
      transition: {
        duration: 0,
        delay: 0,
      },
    },
    final: {
      opacity: 1,
      y: 0,
      // width: '100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        duration: 0.3,
        delay: 0.5,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      // width: 0,
      // height: 0,
      transition: {
        duration: 0.2,
        delay: 0,
        ease: 'easeOut',
      },
    },
  };

  return (
    // <AnimatePresence>
      <Routes location={location} key={location.key}>
        <Route path='/' element={<About switchProps={switchProps} />} />
        <Route
          path='/abilities'
          element={<Abilities switchProps={switchProps} />}
        />
        <Route
          path='/projects'
          element={<Projects switchProps={switchProps} />}
        />
      </Routes>
    // </AnimatePresence>
  );
};

export default RoutesAnimated;
