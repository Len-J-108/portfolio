import { motion } from 'framer-motion';

const TestPageOne = () => {
  const style = {
    background: 'linear-gradient(to right, #2196f3, #f44336)',
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
        ease: 'linear',
        // duration: '1',
        // delay: '.1',
      },
    },
    final: {
      opacity: '1',
      width: '100%',
      transition: {
        ease: 'linear',
        duration: '1',
        // delay: '.1',
      },
    },
    end: {
      width: 0,
      transition: {
        ease: 'linear',
        duration: '.1',
        // delay: '.1',
      },
    },
  };
  return (
    <motion.div
      variants={animateProps}
      initial='initial'
      animate='final'
      exit='end'
      style={style}
    >
      TestPageOne
    </motion.div>
  );
};

export default TestPageOne;
