import { motion } from 'framer-motion';
import AbilitySingle from '../Styles/Components/AbilitySingle';
import abilitiesData from '../utils/abilitiesData';

const Abilities = ({ switchProps }) => {

  return (
    <motion.div
      variants={switchProps}
      initial='initial'
      animate='final'
      exit='exit'
      className='bg-neutral-800 w-full h-full rounded-lg flex items-start flex-col gap-4 overflow-y-scroll'
    >
      <h2 className='fff-bodoni sm:text-2xl md:text-5xl lg:text-6xl my-10 mx-auto pb-6  px-6 border-b-2 skew-x-6 skew-y-6'>Abilities</h2>
      <section className='flex xxs:flex-col xxs:items-center sm:flex-row sm:flex-wrap gap-10 w-5/6 mx-auto py-10 justify-around'>
        {abilitiesData.map(({ id, name, img }) => (
          <div
            key={id}
            className='w-full mt-40 border-b border-neutral-600 pb-10'>
              <AbilitySingle img={img} name={name} />
          </div>
        ))}
      </section>
    </motion.div>
  );
};

export default Abilities;
