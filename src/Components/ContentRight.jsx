import TestPageOne from './TestPageOne';

const ContentRight = ({ color }) => {
  const style = {
    color: color,
    border: `2px solid ${color}`,
  };
  return (
    <div className='content-left-wrapper' style={style}>
      <TestPageOne />
    </div>
  );
};

export default ContentRight;
