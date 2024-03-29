import { motion } from 'framer-motion';
import HeadingTwo from './HeadingTwo';
const About = ({ switchProps }) => {
  return (
    <motion.div
      variants={switchProps}
      initial='initial'
      animate='final'
      exit='exit'
      className='bg-neutral-800 w-full h-full rounded-lg flex items-center flex-col gap-6 overflow-y-scroll'
    >
        <HeadingTwo txt="About me" />
        <div className='wrapper w-5/6 flex flex-col xxs:gap-24 xs:gap-10 md:gap-0'>
          <p className='sm:w-10/12 mx-auto xs:my-4 sm:my-8 flex-grow  md:my-12 text-center sm:text-lg md:text-lg lg:text-2xl font-thin'>
            Hello! I'm Lennart, a passionate web developer currently studying
            development and programming at Digital Career Institute (DCI). With a
            unique background in audio engineering, I bring a creative and
            innovative approach to solving problems and building engaging web
            applications. Before embarking on my journey into web development, I
            worked as an audio engineer, where I honed my skills in sound design,
            recording, and production. My passion for technology and desire to
            create led me to explore the world of coding and development, where I
            discovered my love for building web applications.
          </p>
          <div
            id='life'
            className='flex flex-col justify-evenly gap-8 xs:w-full md:w-8/12 mx-auto text-lg'
          >
            <div className='w-full flex md:justify-between xxs:flex-col md:flex-row '>
              <h3 className='inline-block text-sky-300'>Until 2021:</h3>
              <span className='font-thin'>Working as an Audio Engeneer</span>
            </div>
            <div className='w-full flex justify-between xxs:flex-col md:flex-row '>
              <h3 className='inline-block text-sky-300'>2022:</h3>
              <span className='font-thin '>
                Startet learning on{' '}
                <a
                  href='https://www.freecodecamp.org/LennartJansen'
                  className='font-bold text-green-500'
                >
                  FreeCodeCamp{' '}
                </a>
              </span>
            </div>
            <div className='w-full flex justify-between xxs:flex-col md:flex-row '>
              <h3 className='inline-block text-sky-300'>2023:</h3>
              <span className='font-thin '>
                Studying Web Development at{' '}
                <a
                  href='https://digitalcareerinstitute.org/'
                  className='font-bold text-pink-800'
                >
                  DCI
                </a>
              </span>
            </div>
            <div className='w-full flex justify-between xxs:flex-col md:flex-row'>
              <h3 className='inline-block text-sky-300'>Age: 38</h3>
              <span className='font-thin '>Located: Hamburg / Germany</span>
            </div>
            <div className='w-full flex justify-between xxs:flex-col md:flex-row'>
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
