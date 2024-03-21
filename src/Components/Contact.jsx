import {motion} from 'framer-motion';
import cl from '../Styles/Components/contacts.module.scss';

const Contact = ({switchProps }) => {
// uses Daisy UI
  return (
    <motion.div 
      variants={switchProps}
      initial='initial'
      animate='final'
      exit='exit'
      className="bg-neutral-800 h-full flex justify-center" >
      <div className='bg-neutral-800 p-5'>
        <p className="my-10 text-center text-2xl" >Feel free to reach out to me...</p>
        <form 
          action="https://api.web3forms.com/submit" 
          method="POST" 
          className="flex flex-col gap-5 items-center" >
          <input 
            type="hidden" 
            name="access_key" 
            value="a3c1580d-78dc-4880-ac1e-8449f5cda9eb"/>
          <input 
            type="text" 
            name="name" 
            id="name" 
            minLength="3" 
            maxLength="30" 
            placeholder="Name" 
            required 
            className="input input-ghost input-primary w-3/4" />
          <input 
            type="text" 
            name="email" 
            id="email" 
            minLength="6" 
            maxLength="30" 
            placeholder="Email" 
            required 
            className="input input-ghost input-primary w-3/4" />
          <textarea 
            name="message" 
            rows="7" 
            cols="25" 
            placeholder="Message" 
            required 
            className="textarea textarea-ghost textarea-warning w-3/4" >
            </textarea>
          <input type="hidden" name="redirect" value="https://web3forms.com/success" />
          <button type="submit" className="btn btn-outline btn-accent w-3/4">Send</button>
        </form>
      </div>
    </motion.div>
  )
}

export default Contact
