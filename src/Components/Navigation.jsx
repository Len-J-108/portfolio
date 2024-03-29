import { NavLink } from 'react-router-dom';
import '../Styles/Layout/flex.scss';
import Logo from './Logo';

import { motion } from 'framer-motion';

const navs = ['about', 'contact', 'abilities', 'projects'];

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
    'transition-transform',
  ];

  return (
    <motion.nav
      variants={loader}
      initial='initial'
      animate='final'
      id='written-name'
      className='navigation flex flex-row lg:flex-col bg-neutral-800 border-2 border-neutral-600'>
      <Logo />
      {navs.map((item, i)=> {
        return (
          <NavLink
            key={i}
            to={`/${item}`}
            className={({ isActive }) =>
              isActive
                ? navLinkStyles.join(' ') + ' border-green-500'
                : navLinkStyles.join(' ')
            }>
            {item[0].toUpperCase() + item.slice(1)}
          </NavLink>
        )
      })}
    </motion.nav>
  );
};

export default Navigation;
