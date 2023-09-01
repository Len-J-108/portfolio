import '../Styles/Layout/grid.scss';
import LocationProvider from './LocationProvider';
import RoutesAnimated from './RoutesAnimated';

const ContentRight = () => {


  return (
    <div className='content-right'>
      <LocationProvider>
        <RoutesAnimated />
      </LocationProvider>
    </div>
  );
};

export default ContentRight;
