import React from 'react';
import '../assets/contact.css';

function    Contact() {
  return (
  
  <>
  <header>
    <h1>Contact us</h1>
  </header>
  <div id="form">
    <div className="fish" id="fish" />
    <div className="fish" id="fish2" />
    <form id="waterform" method="post">
      <div className="formgroup" id="name-form">
        <label htmlFor="name">Your name*</label>
        <input type="text" id="name" name="name" />
      </div>
      <div className="formgroup" id="email-form">
        <label htmlFor="email">Your e-mail*</label>
        <input type="email" id="email" name="email" />
      </div>
      <div className="formgroup" id="message-form">
        <label htmlFor="message">Your message</label>
        <textarea id="message" name="message" defaultValue={""} />
      </div>
      <input type="submit" defaultValue="Send your message!" />
    </form>
  </div>
</>


  );
}o

export default Contact;
