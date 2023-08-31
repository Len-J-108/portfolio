import { motion } from 'framer-motion';

const TestPageThree = () => {
  const style = {
    background: 'linear-gradient(to top, #a80077, #66ff00)',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  // const animateProps = {
  //   initial: {
  //     opacity: '0',
  //     transition: {
  //       duration: '1',
  //     },
  //   },
  //   final: {
  //     opacity: '1',
  //     transition: {
  //       duration: '1',
  //     },
  //   },
  // };

  return (
    <motion.div
      // variants={animateProps}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={style}
    >
      TestPageThree
    </motion.div>
  );
};

export default TestPageThree;
