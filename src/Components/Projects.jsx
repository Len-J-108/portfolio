import { motion } from 'framer-motion';

const Projects = ({ switchProps }) => {
  

  return (
    <motion.div
      variants={switchProps}
      initial='initial'
      animate='final'
      exit='exit'
      // style={style}
      className="bg-indigo-950 w-full h-full border-2 border-orange-200 rounded-lg"
    >
      Projects
    </motion.div>
  );
};

export default Projects;
