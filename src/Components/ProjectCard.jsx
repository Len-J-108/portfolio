import { Navigate } from 'react-router-dom';
import '../Styles/Typo/Fonts.scss';
const ProjectCard = ({ name, url, img, txt }) => {
  const handler = () => {
    <Navigate to='/test' replace={true} />;
  };

  return (
    <div className='fff-baskerville card rounded-xl xs:w-10/12 sm:w-8/12 md:w-6/12 bg-neutral-400 text-neutral-800 my-10'>
      <img
        src={img}
        alt='project one'
        className='card-img w-100 rounded-t-xl shadow-xl'
      />
      <h3 className='text-center xs:my-6 md:my-8'>{name}</h3>
      <p className='fff-josephine text-center w-10/12  mx-auto'>{txt}</p>
      <a
        href={url}
        target='blank'
        className='relative inline-flex items-center justify-center px-5 
         py-1 mx-8 my-8 overflow-hidden font-medium text-indigo-600 transition
          duration-300 ease-out rounded-full shadow-xl group hover:ring-1
           hover:ring-purple-500 '
      >
        <span className='absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700'></span>
        <span className='absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease'></span>
        <span className='relative text-white'>Visit</span>
      </a>
    </div>
  );
};

export default ProjectCard;
