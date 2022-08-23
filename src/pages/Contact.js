import React, { useRef } from 'react'
import './contact.css';
import emailjs from '@emailjs/browser';
import Footer from './Footer';

export default function Contact() {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c7vrepp', 'template_82iq63n', form.current, 'SDLGhJl3iIlTAbFok')
      .then((result) => {
        console.log(result.text);
        e.target.reset()
        alert("message sent successfuly")
      }, (error) => {
        console.log(error.text);
      });
  };



  return (
    <>
      <div className="main_page">
        <div className="img">
          <h1>CONTACT.</h1>
          <h3>Lets have a chat</h3>
          <p>
            I'd love if you reached out to me. Even if it's just to
            say"Hey!". <br /> Don't hesitate!Drop me a line and I'll get
            back to you ASAP!
          </p>
        </div>
        <form ref={form} className="contact_form" onSubmit={sendEmail}>
          <label htmlFor="YourName">Your Name</label>
          <input type="text" id='YourName' name='user_name' />

          <label htmlFor="Email">Email</label>
          <input type="email" id='Email' name='user_email' />

          <label htmlFor="message">Message</label>
          <textarea className='textArea' name="message" id="message" cols="30" rows="10" placeholder='Type your message here'></textarea>

          <button className='submitbutton' type='submit'>SUBMIT</button>


          

        </form>
        <Footer/>

      </div>

    </>
  )
}
