import { motion } from 'framer-motion';

const About = ({ switchProps }) => {
  return (
    <motion.div
      variants={switchProps}
      initial='initial'
      animate='final'
      exit='exit'
      className='bg-neutral-800 w-full h-full rounded-lg flex items-center flex-col gap-6 overflow-y-scroll'
    >
      <h2>About me:</h2>
      <div className='wrapper border-t-2 w-4/6'>
        <p className='w-10/12 mx-5 my-12 text-center'>
          Hi. My Name is Lennart Jansen from Hamburg. A have a background as an
          Audio Engeneer. Recently i discovered my passion with programming and
          web-development. After going the sel-taught route at first i decided
          to join a WebDev Course at DCI in january this year.
        </p>
        <h3>Until 2021:</h3>
        <span>Working as an Audio Engeneer</span>
        <h3>2022</h3>
        <span>startet learning on FreeCodeCamp & CodeCademy </span>
        <h3>2023:</h3>
        <span>Studying Web Development at DCI</span>
        <h3>Age: 38</h3>
        <span>Located: Hamburg / Germany</span>
        <h3>Languages:</h3>
        <ul>
          <li>English (fluently)</li>
          <li>German (mother tongue)</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default About;
