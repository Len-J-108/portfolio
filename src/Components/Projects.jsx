import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import img1 from '../Assets/images/cardOneImgSmall.png';
import img2 from '../Assets/images/cardTwoImgSmall.png';
import '../Styles/Typo/Fonts.scss';

const Projects = ({ switchProps }) => {
  const projectData = [
    {
      id: 1,
      name: 'Github Profile Viewer',
      url: 'https://len-j-108.github.io/ghProfileViewer/',
      txt: 'Small project using the Github-Api to view your GH profile...',
      img: img2,
    },
    {
      id: 2,
      name: 'Happy Alpaca Page',
      url: 'https://len-j-108.github.io/tha-site/',
      txt: 'First Project for my Course,  a page for a alpacca-farm using only HTML & CSS...',
      img: img1,
    },
  ];

  return (
    <motion.div
      variants={switchProps}
      initial='initial'
      animate='final'
      exit='exit'
      // style={style}
      className='bg-neutral-800 w-full h-full rounded-lg flex items-center flex-col gap-6 overflow-y-scroll'
    >
      <h1 className="fff-bodoni sm:text-2xl md:text-5xl lg:text-6xl my-10 pb-6  px-6 border-b-2 skew-x-6 skew-y-6">My Projects</h1>
      {projectData.map(({ id, name, url, txt, img }) => {
        return (
          <ProjectCard name={name} url={url} txt={txt} key={id} img={img} />
        );
      })}
    </motion.div>
  );
};

export default Projects;
