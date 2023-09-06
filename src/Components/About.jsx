import { motion } from 'framer-motion';

const About = ({ switchProps }) => {

  return (
    <motion.div
      
      variants={switchProps}
      initial='initial'
      animate='final'
      exit='exit'
      className='bg-neutral-800 w-full h-full rounded-lg flex items-center flex-col gap-6 overflow-y-scroll'
    >
      About
    </motion.div>
  );
};

export default About;
