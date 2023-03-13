import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export function Contact () {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div>
            <div className='mt-24'>Contact Me</div>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col'>
                <label>Name</label>
                <input type="text" name="client_name" className='border-2'/>
                <label>Email</label>
                <input type="email" name="client_email" className='border-2'/>
                <label>Message</label>
                <textarea name="message" className='border-2'/>
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}