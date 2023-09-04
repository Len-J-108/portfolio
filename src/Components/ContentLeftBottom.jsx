import '../Styles/Layout/flex.scss';
import { VscGithub } from 'react-icons/vsc';
import { SiLinkedin } from 'react-icons/si';
import { BsDiscord } from 'react-icons/bs';
const ContentLeftBottom = () => {
  const twClassNames = ['hidden', 'lg:block', 'backdrop-blur-md'];
  return (
    <div className={twClassNames.join(' ') + ' content-left-bottom'}>
      <div className='flex h-full justify-end items-end p-3 gap-3'>
        <div className='text-black self-start absolute left-0 rounded-full border border-black w-16 h-16'>
          Photo
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
