import { AnimatePresence } from 'framer-motion';

const LocationProvider = ({ children }) => {
  // Animate Prescence needs to be here in LocationProvider because otherwise theres an error.
  return <AnimatePresence>{children}</AnimatePresence>;
};

export default LocationProvider;
