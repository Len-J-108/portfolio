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

  // const animateProps = {
  //   initial: {
  //     opacity: '0',
  //     transition: {
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
      TestPageTwo
    </motion.div>
  );
};

export default TestPageTwo;
