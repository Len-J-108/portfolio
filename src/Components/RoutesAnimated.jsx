import { Route, Routes, useLocation } from 'react-router-dom';
import TestPageOne from './TestPageOne';
import TestPageTwo from './TestPageTwo';
import TestPageThree from './TestPageThree';

const RoutesAnimated = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.key}>
      <Route path='/' element={<TestPageOne />} />
      <Route path='/two' element={<TestPageTwo />} />
      <Route path='/three' element={<TestPageThree />} />
    </Routes>
  );
};

export default RoutesAnimated;
