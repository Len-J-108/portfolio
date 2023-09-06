import { Link } from 'react-router-dom';
import '../Styles/Layout/flex.scss';
import Logo from './Logo';

const Navigation = () => {
  return (
    <nav className='navigation flex flex-row lg:flex-col bg-neutral-800'>
      <Logo />
      <Link
        to='/'
        className='w-5/6  m-auto hover:text-orange-400 text-center hover: hover:border-orange-400 text-gray-200 py-2 px-4 border border-gray-400 rounded shadow bg-gray-800'
      >
        About
      </Link>
      <Link
        to='/abilities'
        className='w-5/6  m-auto hover:text-orange-400 text-center hover: hover:border-orange-400 text-gray-200  py-2 px-4 border border-gray-400 rounded shadow bg-gray-800'
      >
        Abilities
      </Link>
      <Link
        to='projects'
        className='w-5/6  m-auto hover:text-orange-400 text-center hover: hover:border-orange-400 text-gray-200 py-2 px-4 border border-gray-400 rounded shadow bg-gray-800'
      >
        Projects
      </Link>
    </nav>
  );
};

export default Navigation;
