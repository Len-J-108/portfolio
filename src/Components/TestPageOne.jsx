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
  // const animateProps = {
  //   initial: {
  //     opacity: '0',
  //     transition: {},
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
      TestPageOne
    </motion.div>
  );
};

export default TestPageOne;
