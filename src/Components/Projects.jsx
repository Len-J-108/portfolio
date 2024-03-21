import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import img1 from '../Assets/images/cardOneImgSmall.png';
import img2 from '../Assets/images/cardTwoImgSmall.png';
import img3 from '../Assets/images/five.png';
import img4 from '../Assets/images/quizapp.png';
import '../Styles/Typo/Fonts.scss';
import HeadingTwo from './HeadingTwo';

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
    {
      id: 3,
      name: 'Rock-Paper-Scissor CLI',
      url: 'https://github.com/Len-J-108/RockPaperScissorsCLI',
      txt: 'CLI game of "Rock Paper Scissors" to be played in the terminal...',
      img: img3,
    },
    {
      id: 4,
      name: 'Quiz App',
      url: 'https://github.com/Len-J-108/QuizappClient',
      txt: 'A Quiz to test your common knowledge...',
      img: img4,
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
      <HeadingTwo txt="Projects" />
      {projectData.reverse().map(({ id, name, url, txt, img }) => {
        return (
          <ProjectCard name={name} url={url} txt={txt} key={id} img={img} />
        );
      })}
    </motion.div>
  );
};

export default Projects;
