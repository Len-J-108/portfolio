import { motion } from 'framer-motion';

const TestPageTwo = () => {
  const style = {
    background: 'linear-gradient(to top, #ff4b1f, #ff9068)',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const animateProps = {
    initial: {
      opacity: '0',
      width: '1px',
      transition: {
        duration: '1',
        delay: '.1',
      },
    },
    final: {
      opacity: '1',
      width: '100%',
      transition: {
        duration: '1',
        delay: '.1',
      },
    },
  };
  return (
    <motion.div
      variants={animateProps}
      initial='initial'
      animate='final'
      exit='intial'
      style={style}
    >
      TestPageTwo
    </motion.div>
  );
};

export default TestPageTwo;
