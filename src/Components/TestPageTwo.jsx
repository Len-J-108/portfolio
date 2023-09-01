import { motion } from 'framer-motion';

const TestPageTwo = ({ switchProps }) => {
  const style = {
    background: 'linear-gradient(to top, #ff4b1f, #ff9068)',
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

export default TestPageTwo;
