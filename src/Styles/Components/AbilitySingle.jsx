import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; 
import { useEffect } from 'react';


const AbilitySingle = ({img, name}) => {

  const control = useAnimation();
  const {ref, inView} = useInView();

  const scrollVariant = {
    visible: {opacity: 1, scale: 1, transition: {duration: .5}},
    hidden: {opacity: 0, scale: 0},
  }

  useEffect(()=>{
    if (inView)control.start("visible");
    else control.start("hidden");
  }, [control, inView])


  return (
    <motion.div 
    ref={ref}
    variants={scrollVariant}
    initial="hidden"
    animate={control}
      className='w-full flex flex-col-reverse gap-12 justify-start items-center'
      >
    <h3 className='w-2/5 text-center text-2xl tracking-wide'>{name}</h3>
      <img src={img} className='w-1/5 saturate-30 m-auto' />
     </motion.div>
  )
}

export default AbilitySingle