import { Link } from 'react-router-dom';
import '../Styles/Components/Navigation.scss';
import '../Styles/Layout/grid.scss';

const Navigation = () => {
  return (
    <nav className='nav-container nav-component'>
      <Link to='/' className='idiot'>
        TestOne
      </Link>
      <Link to='/two' className='idiot'>
        TestTwo
      </Link>
      <Link to='three' className='idiot'>
        TestThree
      </Link>
    </nav>
  );
};

export default Navigation;
