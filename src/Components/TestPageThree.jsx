import { motion } from 'framer-motion';

const TestPageThree = ({ switchProps }) => {
  const style = {
    background: 'linear-gradient(to top, #a80077, #66ff00)',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <motion.div
      variants={switchProps}
      initial='initial'
      animate='final'
      exit='exit'
      style={style}
    >
      TestPageThree
    </motion.div>
  );
};

export default TestPageThree;
