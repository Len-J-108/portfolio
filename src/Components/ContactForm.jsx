
const ContactForm = () => {
  return (
    <form 
        action="https://formsubmit.co/lennart.official.jansen@gmail.com"
        method="POST"
        className="form-container bg-inherit d-flex"
        // className="bg-neutral-800"
        >
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required className="input"/>
        <label htmlFor="name">email</label>
        <input type="email" id="email" name="email" required className="input" />
        <label htmlFor="name">message</label>
        <textarea name="" id="" cols="30" rows="10" required className="input"></textarea>
        <button type="submit">send...</button>
    </form>
  )
}

export default ContactForm