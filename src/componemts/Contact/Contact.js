
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
            <input type="text" class="form-control" id="exampleFormControlInput1" name="user_name" />
            <br/>
            <label>Email</label>
            <br/>
            <input type="email" class="form-control" id="exampleFormControlInput1" name="user_email" />
            <br/>
            <label>Message</label>
            <br/>
            <textarea class="form-control" id="exampleFormControlInput1" rows="3" name="message" />
            <br/>
            <input className='btn btn-primary' type="submit" value="Send Email" />
            </form>
        </div>
    );
};

export default Contact;