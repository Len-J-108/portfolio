import { motion } from 'framer-motion';

const TestPageThree = () => {
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
      variants={animateProps}
      initial='initial'
      animate='final'
      exit='end'
      style={style}
    >
      TestPageThree
    </motion.div>
  );
};

export default TestPageThree;
