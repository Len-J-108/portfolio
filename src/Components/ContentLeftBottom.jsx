import '../Styles/Layout/flex.scss';

const ContentLeftBottom = () => {
  const twClassNames = [
    'bg-lime-200',
    'hidden',
    'lg:block',
    // 'bg-opacity-50',
    // 'md:flex',
    // 'sm:hidden',
  ];
  return (
    <div className={twClassNames.join(' ') + ' content-left-bottom'}></div>
  );
};

export default ContentLeftBottom;
