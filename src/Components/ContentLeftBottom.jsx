import '../Styles/Layout/flex.scss';
import '../Styles/Typo/Fonts.scss';
import { VscGithub } from 'react-icons/vsc';
import { SiLinkedin } from 'react-icons/si';
import { BsDiscord } from 'react-icons/bs';

import faceImage from '../Assets/images/faceRoundScaledDown.png';

const ContentLeftBottom = () => {
  const twClassNames = ['hidden', 'lg:block', 'backdrop-blur-md'];
  return (
    <div className={twClassNames.join(' ') + ' content-left-bottom'}>
      <div className='flex h-full justify-end items-end p-3 gap-3 relative'>
        {/* <div className='text-black self-start relative left-0 rounded-full border border-black w-16 h-16'>
          Photo */}
          <img src={faceImage} alt="face" className="face-round w-32 h-32 object-cover border-4 border-red-900 drop-shadow rounded-full grayscale self-start" />
        {/* </div> */}
        <div
          id='heading-name'
          className='fff-bodoni self-center absolute left-6 bottom-40 '
        >
          <h5 className='text-3xl text-neutral-800'>Lennart</h5>
          <h5 className='text-3xl text-neutral-800 relative left-10'>Jansen</h5>
        </div>
        <div id='heading-decrition' className='self-center relative top-14'>
          <h5 className='fff-bodoni  text-2xl text-neutral-800'>Frontend</h5>
          <h5 className='fff-bodoni  text-2xl text-neutral-800 relative left-10'>
            Developer
          </h5>
        </div>

        <a href='https://github.com/Len-J-108' target='blank'>
          <VscGithub className='text-black text-3xl' />
        </a>
        <a href='https://github.com/Len-J-108' target='blank'>
          <SiLinkedin className='text-black text-3xl' />
        </a>
        <a href='https://discord.gg/e5gvx2DB' target='blank'>
          <BsDiscord className='text-black text-3xl' />
        </a>
      </div>
    </div>
  );
};

export default ContentLeftBottom;

//
