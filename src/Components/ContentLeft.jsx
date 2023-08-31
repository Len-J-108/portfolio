import '../Styles/Components/ContentLeft.scss';

import CarouselBS from './CarouselBS';

const ContentLeft = ({ color }) => {
  const style = {
    color: color,
    border: `2px solid ${color}`,
  };
  return (
    <div className='content-left-wrapper' style={style}>
      <CarouselBS />
    </div>
  );
};

export default ContentLeft;
