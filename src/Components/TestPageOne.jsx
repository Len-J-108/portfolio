import { motion } from 'framer-motion';

const TestPageOne = ({ switchProps }) => {
  const style = {
    background: 'linear-gradient(to right, #2196f3, #f44336)',
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
      TestPageOne
    </motion.div>
  );
};

export default TestPageOne;
