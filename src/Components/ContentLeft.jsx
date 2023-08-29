import '../Styles/Components/ContentLeft.scss';

const ContentLeft = ({ color }) => {
  const style = {
    color: color,
    border: `2px solid ${color}`,
  };
  return (
    <div className='content-left-wrapper' style={style}>
      ContentLeft
    </div>
  );
};

export default ContentLeft;
