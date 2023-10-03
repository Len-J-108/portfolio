import { Link, NavLink } from 'react-router-dom';
import '../Styles/Layout/flex.scss';
import Logo from './Logo';

import { motion } from 'framer-motion';

const Navigation = ({ loader }) => {
  const navLinkStyles = [
    'w-5/6',
    'm-auto',
    'hover:text-orange-400',
    'text-center',
    'hover:border-orange-400',
    'text-gray-200',
    'py-2',
    'border',
    'border-gray-400',
    'rounded',
    'shadow',
    'bg-inherit',
    'active:scale-110',
    'transition-transform'
  ];

  return (
    <motion.nav
      variants={loader}
      initial='initial'
      animate='final'
      id='written-name'
      className='navigation flex flex-row lg:flex-col bg-neutral-800'
    >
      <Logo />
      <NavLink
        to='/about'
        className={({ isActive }) =>
          isActive
            ? navLinkStyles.join(' ') + ' border-green-500'
            : navLinkStyles.join(' ')
        }
      >
        About
      </NavLink>
      <NavLink
        to='/abilities'
        className={({ isActive }) =>
          isActive
            ? navLinkStyles.join(' ') + ' border-green-500'
            : navLinkStyles.join(' ')
        }
      >
        Abilities
      </NavLink>
      <NavLink
        to='projects'
        className={({ isActive }) =>
          isActive
            ? navLinkStyles.join(' ') + ' border-green-500'
            : navLinkStyles.join(' ')
        }
      >
        Projects
      </NavLink>
    </motion.nav>
  );
};

export default Navigation;
