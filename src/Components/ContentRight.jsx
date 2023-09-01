import '../Styles/Layout/flex.scss';
import LocationProvider from './LocationProvider';
import RoutesAnimated from './RoutesAnimated';

const ContentRight = () => {
  return (
    <div className="item-content-right">
      <LocationProvider>
        <RoutesAnimated />
      </LocationProvider>
    </div>
  );
};

export default ContentRight;
