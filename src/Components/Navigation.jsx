import { Link } from 'react-router-dom';
import '../Styles/Layout/flex.scss';
import Logo from './Logo';

import { motion } from 'framer-motion';


const Navigation = ({loader}) => {
  return (
    <motion.nav
      variants={loader}
      initial='initial'
      animate='final'
      id='written-name'
      className='navigation flex flex-row lg:flex-col bg-neutral-800'
    >
      <Logo />
      <Link
        to='/'
        className='w-5/6  m-auto hover:text-orange-400 text-center hover: hover:border-orange-400 text-gray-200 py-2 border border-gray-400 rounded shadow bg-inherit'
      >
        About
      </Link>
      <Link
        to='/abilities'
        className='w-5/6  m-auto hover:text-orange-400 text-center hover: hover:border-orange-400 text-gray-200 py-2 border border-gray-400 rounded shadow bg-inherit'
      >
        Abilities
      </Link>
      <Link
        to='projects'
        className='w-5/6  m-auto hover:text-orange-400 text-center hover: hover:border-orange-400 text-gray-200 py-2 border border-gray-400 rounded shadow bg-inherit'
      >
        Projects
      </Link>
    </motion.nav>
    
  );
};

export default Navigation;
