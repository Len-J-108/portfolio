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
      <h2 className='fff-bodoni sm:text-xs md:text-5xl lg:text-6xl mt-10 pb-6  px-6 border-b-2 skew-x-6 skew-y-6'>
        About me
      </h2>
      <div className='wrapper w-5/6'>
        <p className='w-10/12 mx-auto my-12 text-center md:text-lg lg:text-2xl font-thin'>
          Hi. My Name is Lennart Jansen from Hamburg. A have a background as an
          Audio Engeneer. Recently i discovered my passion with programming and
          web-development. After going the sel-taught route at first i decided
          to join a WebDev Course at DCI in january this year.
        </p>
        <div id='life' className='flex flex-col w-8/12 h-96 mx-auto justify-evenly text-lg'>
          <div className='w-full flex justify-between'>
            <h3 className='inline-block text-sky-300'>Until 2021:</h3>
            <span className='font-thin'>Working as an Audio Engeneer</span>
          </div>
          <div className='w-full flex justify-between'>
            <h3 className='inline-block text-sky-300'>2022:</h3>
            <span className='font-thin '>
              Startet learning on FreeCodeCamp
            </span>
          </div>
          <div className='w-full flex justify-between'>
            <h3 className='inline-block text-sky-300'>2023:</h3>
            <span className='font-thin '>Studying Web Development at DCI</span>
          </div>
          <div className='w-full flex justify-between'>
            <h3 className='inline-block text-sky-300'>Age: 38</h3>
            <span className='font-thin '>Located: Hamburg / Germany</span>
          </div>
          <div className='w-full flex justify-between'>
            <h3 className='inline-block text-sky-300'>Languages:</h3>
            <ul className='font-thin'>
              <li>English (fluently)</li>
              <li>German (mother tongue)</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
