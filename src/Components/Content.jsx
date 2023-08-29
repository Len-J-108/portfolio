import { BrowserRouter } from 'react-router-dom';
import '../Styles/Components/Content.scss';
import ContentLeft from './ContentLeft';
import ContentRight from './ContentRight';
import Navigation from './Navigation';

const Content = ({ color }) => {
  const style = {
    color: color,
    border: `2px solid ${color}`,
  };
  return (
    <div className='content-wrapper' style={style}>
      <BrowserRouter>
        <Navigation />
        <ContentLeft color={'green'} />
        <ContentRight color={'yellow'} />
      </BrowserRouter>
    </div>
  );
};

export default Content;
