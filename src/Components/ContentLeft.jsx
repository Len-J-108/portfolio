import '../Styles/Components/ContentLeft.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import PureCarousel from './PureCarousel';

const ContentLeft = ({ color }) => {
  const style = {
    color: color,
    border: `2px solid ${color}`,
  };
  return (
    <div className='content-left-wrapper' style={style}>
      <PureCarousel />
    </div>
  );
};

export default ContentLeft;
