import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import img1 from '../Assets/images/cardOneImgSmall.png';
import img2 from '../Assets/images/cardTwoImgSmall.png';

const Projects = ({ switchProps }) => {
  const projectData = [
    {
      id: 1,
      name: 'Happy Alpaca Page',
      url: 'https://len-j-108.github.io/tha-site/',
      txt: 'First Project for my Course,  a page for a alpacca-farm using only HTML & CSS...',
      img: img1,
    },
    {
      id: 2,
      name: 'Github Profile Viewer',
      url: 'https://len-j-108.github.io/ghProfileViewer/',
      txt: 'Small project using the Github-Api to view your GH profile...',
      img: img2,
    },
  ];

  return (
    <motion.div
      variants={switchProps}
      initial='initial'
      animate='final'
      exit='exit'
      // style={style}
      className='bg-indigo-950 w-full h-full border-2 border-orange-200 rounded-lg flex items-center flex-col gap-6 overflow-y-scroll'
    >
      <h1>My Projects</h1>
      {projectData.map(({ id, name, url, txt, img }) => {
        return (
          <ProjectCard name={name} url={url} txt={txt} key={id} img={img} />
        );
      })}
      {/* <ProjectCard
        name='Happy Alpaca Page'
        url='https://len-j-108.github.io/tha-site/'
        img={img1}
      />
      <ProjectCard
        name='Github Profile Viewer'
        url='https://len-j-108.github.io/ghProfileViewer/'
        img={img2}
      /> */}
    </motion.div>
  );
};

export default Projects;
