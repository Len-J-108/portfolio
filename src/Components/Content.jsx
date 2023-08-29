import '../Styles/Components/Content.scss';
import ContentLeft from './ContentLeft';
import ContentRight from './ContentRight';

const Content = ({ color }) => {
  const style = {
    color: color,
    border: `2px solid ${color}`,
  };
  return (
    <div className='content-wrapper' style={style}>
          <ContentLeft color={'green'} />
          <ContentRight color={ 'yellow'} />
    </div>
  );
};

export default Content;
