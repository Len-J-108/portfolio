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

import { IoIosCheckmark, IoIosArrowDropdown } from 'react-icons/io';

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
    { id: 8, name: 'Responsible Design', img: responsibleLogo },
  ];

  return (
    <motion.div
      variants={switchProps}
      initial='initial'
      animate='final'
      exit='exit'
      className='bg-neutral-800 w-full h-full rounded-lg flex items-center flex-col gap-12 overflow-y-scroll'
    >
      <h2>Abilities</h2>
      {abilitiesData.map(({ id, name, img }) => (
        <div className='ability-card w-3/6 flex gap-5 items-center justify-between' key={id}>
          <span>{name}</span>
          <img src={img} alt={name} className='w-24' />
          {/* <IoIosCheckmark /> */}
          <IoIosArrowDropdown className="w-24 text-5xl text-orange-400" />
        </div>
      ))}
    </motion.div>
  );
};

export default Abilities;
