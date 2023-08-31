// import TestPageOne from './TestPageOne';
// import TestPageTwo from './TestPageTwo';
// import TestPageThree from './TestPageThree';
import '../Styles/Components/ContentRight.scss';
// import { Route, Routes, useLocation } from 'react-router-dom';
// import { AnimatePresence } from 'framer-motion';
import LocationProvider from './LocationProvider';
import RoutesAnimated from './RoutesAnimated';
// import { AnimatePresence } from 'framer-motion';

const ContentRight = ({ color }) => {
  const style = {
    color: color,
    border: `2px solid ${color}`,
  };

  return (
    <div className='content-right-wrapper' style={style}>
        <LocationProvider>
          <RoutesAnimated />
        </LocationProvider>
    </div>
  );
};

export default ContentRight;
