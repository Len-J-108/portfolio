import '../Styles/Components/headingWithBg.scss';

const HeadingWithBg = () => {
  return (
    <>
      <div className='text-container'>
        <span className='text rotate-1'>Lennart</span>
        <span className='text rotate-2'>Jansen</span>
      </div>
      <div className="wheel-container"></div>
      <div className='wheel'></div>
    </>
  );
};

export default HeadingWithBg;
