import { Link } from 'react-router-dom';
import '../Styles/Layout/flex.scss';


const Navigation = () => {
  return (
    <nav className='navigation flex flex-row lg:flex-col bg-cyan-900'>
      <Link to='/' className='drop-shadow-md m-auto border-2 rounded-md p-2 bg-orange-950'>
        TestOne
      </Link>
      <Link to='/two' className='drop-shadow-md m-auto border-2 rounded-md p-2 bg-orange-950'>
        TestTwo
      </Link>
      <Link to='three' className='drop-shadow-md m-auto border-2 rounded-md p-2 bg-orange-950'>
        TestThree
      </Link>
    </nav>
  );
};

export default Navigation;
