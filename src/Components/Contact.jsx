import {motion} from 'framer-motion';
import cl from '../Styles/Components/contacts.module.scss';

const Contact = () => {

  return (
    <motion.div className="bg-neutral-800 h-full flex justify-center" >
      <div className='border border-red-500 bg-neutral-800'>
        <p>Here you can reach out to me...</p>
        <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-5" >
          <input type="hidden" name="access_key" value="a3c1580d-78dc-4880-ac1e-8449f5cda9eb" className="text-black" />
          <label htmlFor="name">Your Name: </label>
          <input type="text" name="name" id="name" minLength="3" maxLength="30" required className="text-black" />
          <label htmlFor="email">Your Email:</label>
          <input type="text" name="email" id="email" minLength="6" maxLength="30" required className="text-black" />
          <textarea name="message" rows="7" cols="25" required className="text-black" ></textarea>
          <input type="hidden" name="redirect" value="https://web3forms.com/success" />
          <button type="submit">Send</button>
        </form>
      </div>
    </motion.div>
  )
}

export default Contact
