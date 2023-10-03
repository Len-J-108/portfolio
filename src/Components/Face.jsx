import '../Styles/Layout/flex.scss';
import faceImage from '../Assets/images/faceRoundScaledDown.png';
import { GiSunglasses } from 'react-icons/gi';


const Face = () => {
  return (
    <div className="face-round"> 
      <img
        src={faceImage}
        alt='face'
        className='w-32 h-32 object-cover border-4 border-red-900 drop-shadow rounded-full grayscale self-start'
          />
          <GiSunglasses className="glasses"/>
    </div>
  );
};

export default Face;
