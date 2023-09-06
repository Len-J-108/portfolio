import { motion } from 'framer-motion';

import { BsArrowRightCircle } from 'react-icons/bs';

const GreenStart = ({ switchProps }) => {
  return (
    <motion.div
      variants={switchProps}
      initial='initial'
      animate='final'
      className='bg-black w-full h-full rounded-lg flex justify-end items-center'
    >
      <BsArrowRightCircle className="text-green-500 text-7xl relative right-8 motion-safe:animate-bounce hover:text-red-500" />
    </motion.div>
  );
};

export default GreenStart;
