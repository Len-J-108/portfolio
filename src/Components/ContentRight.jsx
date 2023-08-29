import TestPageOne from './TestPageOne';
import '../Styles/Components/ContentRight.scss'

const ContentRight = ({ color }) => {
  const style = {
    color: color,
    border: `2px solid ${color}`,
  };
  return (
    <div className='content-right-wrapper' style={style}>
      {/* <TestPageOne /> */}
    </div>
  );
};

export default ContentRight;
