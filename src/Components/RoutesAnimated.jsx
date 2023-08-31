import { Route, Routes, useLocation } from 'react-router-dom';
import TestPageOne from './TestPageOne';
import TestPageTwo from './TestPageTwo';
import TestPageThree from './TestPageThree';
import { AnimatePresence } from 'framer-motion';

const RoutesAnimated = () => {
  const location = useLocation();

  const switchProps = {
    initial: {
      opacity: 0,
      width: '1px',
    },
    final: {
      opacity: 1,
      width: '100%',
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      width: '1px',
      transition: {
        duration: 0,
        delay: 0,
        ease: 'easeOut',
      },
    },
  };

  return (
    <AnimatePresence>
      <Routes location={location} key={location.key}>
        <Route path='/' element={<TestPageOne switchProps={switchProps} />} />
        <Route
          path='/two'
          element={<TestPageTwo switchProps={switchProps} />}
        />
        <Route
          path='/three'
          element={<TestPageThree switchProps={switchProps} />}
        />
      </Routes>
    </AnimatePresence>
  );
};

export default RoutesAnimated;
