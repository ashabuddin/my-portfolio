
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

                {/* <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="your name" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="your email" />
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Subject</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="subject" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>


                <input type="submit" value="Send" /> */}
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