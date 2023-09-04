import { Link } from 'react-router-dom';
import '../Styles/Layout/flex.scss';
import Logo from './Logo';

const Navigation = () => {
  return (
    <nav className='navigation flex flex-row lg:flex-col bg-orange-200'>
      <Logo />
      <Link
        to='/'
        className='m-auto hover:bg-gray-100 text-gray-200 py-2 px-4 border border-gray-400 rounded shadow bg-gray-800'
      >
        TestOne
      </Link>
      <Link
        to='/two'
        className='m-auto hover:bg-gray-100 text-gray-200  py-2 px-4 border border-gray-400 rounded shadow bg-gray-800'
      >
        TestTwo
      </Link>
      <Link
        to='projects'
        className='m-auto hover:bg-gray-100 text-gray-200 py-2 px-4 border border-gray-400 rounded shadow bg-gray-800'
      >
        Projects
      </Link>
    </nav>
  );
};

export default Navigation;
