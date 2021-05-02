
import React from 'react';
import emailjs from 'emailjs-com';




const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_7jr038w', 'template_73b8hf3', e.target, 'user_VecmNf444YnwjfCWsmjwe')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }

    return (
        <div className='App-header'>
            <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <label>Name</label>
            <br/>
            <input type="text" name="user_name" />
            <br/>
            <label>Email</label>
            <br/>
            <input type="email" name="user_email" />
            <br/>
            <label>Message</label>
            <br/>
            <textarea name="message" />
            <br/>
            <input type="submit" value="Send" />
        </form>
        </div>
    );
};

export default Contact;