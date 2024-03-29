import { motion } from 'framer-motion';
import AbilitySingle from '../Styles/Components/AbilitySingle';
import abilitiesData from '../utils/abilitiesData';
import HeadingTwo from './HeadingTwo';

const Abilities = ({ switchProps }) => {

  return (
    <motion.div
      variants={switchProps}
      initial='initial'
      animate='final'
      exit='exit'
      className='bg-neutral-800 w-full h-full rounded-lg flex items-start flex-col gap-4 overflow-y-scroll'
    >
      <section className='flex xxs:flex-col xxs:items-center sm:flex-row sm:flex-wrap gap-10 w-5/6 mx-auto py-10 justify-around'>
      <HeadingTwo txt="Tech-Stack" />
        {abilitiesData.map(({ id, name, img, txt }) => (
          <div
            key={id}
            className='w-full border-b border-neutral-600 h-fit'>
              <AbilitySingle img={img} name={name} id={id} txt={txt}/>
          </div>
        ))}
      </section>
    </motion.div>
  );
};

export default Abilities;
