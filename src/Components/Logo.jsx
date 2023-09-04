import NavLogo from '../Assets/images/logo1.svg';
import '../Styles/Components/Logo.scss';

const Logo = () => {
  return (
    <div>
      {/* <img src={NavLogo} alt='logo' className="w-8 text-slate-100" /> */}
      <div className='initials'>
        <span className='initial i-one'>L</span>
        <span className='initial i-two'>J</span>
      </div>
    </div>
  );
};

export default Logo;
