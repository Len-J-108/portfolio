import { motion } from 'framer-motion';

import css3Logo from '../Assets/images/abilities/css3.svg.png';
import html5Logo from '../Assets/images/abilities/html5.png';
import jsLogo from '../Assets/images/abilities/js.png';
import reactLogo from '../Assets/images/abilities/react.svg.png';
import bootstrapLogo from '../Assets/images/abilities/bootstrap.svg.png';
import gitLogo from '../Assets/images/abilities/git.svg.png';
import tailwindLogo from '../Assets/images/abilities/tailwind.svg';
import uiuxLogo from '../Assets/images/abilities/uiux.svg';
import responsibleLogo from '../Assets/images/abilities/responsible.jpg';

import { IoIosArrowDropdown } from 'react-icons/io';

const Abilities = ({ switchProps }) => {
  const abilitiesData = [
    { id: 0, name: 'CSS3', img: css3Logo },
    { id: 1, name: 'HTML5', img: html5Logo },
    { id: 2, name: 'Javascript', img: jsLogo },
    { id: 3, name: 'React', img: reactLogo },
    { id: 4, name: 'Bootstrap', img: bootstrapLogo },
    { id: 5, name: 'Git', img: gitLogo },
    { id: 6, name: 'Tailwind', img: tailwindLogo },
    { id: 7, name: 'UI / UX', img: uiuxLogo },
    {
      id: 8,
      name: 'Responsible Design',
      img: responsibleLogo,
    },
  ];

  return (
    <motion.div
      variants={switchProps}
      initial='initial'
      animate='final'
      exit='exit'
      className='bg-neutral-800 w-full h-full rounded-lg flex items-start flex-col gap-4 overflow-y-scroll'
    >
      <h2 className='fff-bodoni sm:text-2xl md:text-5xl lg:text-6xl my-10 mx-auto pb-6  px-6 border-b-2 skew-x-6 skew-y-6'>Abilities</h2>
      {/* <h3>Front End</h3> */}
      <section className='flex xxs:flex-col xxs:items-center sm:flex-row sm:flex-wrap gap-10 w-5/6 mx-auto justify-around'>
        {abilitiesData.map(({ id, name, img }) => (
          <div
            key={id}
            className='w-2/6 flex flex-row-reverse gap-4 justify-center items-center'
          >
            <span className='w-2/5'>{name}</span>
            <img src={img} className='w-20' />
          </div>
        ))}
      </section>
    </motion.div>
  );
};

export default Abilities;
