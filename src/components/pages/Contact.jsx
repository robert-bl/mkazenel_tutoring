import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

export function Contact () {

    const form = useRef()
    const navigate = useNavigate()

    const sendEmail = (e) => {
        e.preventDefault()
        console.log(form.current)
        emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            result.text === 'OK' ? navigate('/email-sent') : alert('Something went wrong. Please try again later')
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div>
            <div className='text-2xl text-center'>Get In Touch</div>
            <div className='my-12'>Let me know how to reach you and I'll get back to you right away. It would be great to chat!
            <br/><br/>
            In the MESSAGE box, describe briefly your situation and what you're looking for.  Thanks!</div>
            <div className='text-red-500'>* <span className='text-black italic text-sm'>required field</span></div>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col'>
                <label className='mt-4'>Name<span className='text-red-500'>*</span></label>
                <input type="text" name="client_name" placeholder='your name' className='border-2 h-10 p-2' required/>
                <label className='mt-4'>Email<span className='text-red-500'>*</span></label>
                <input type="email" name="client_email" placeholder='your email' className='border-2 h-10 p-2' required/>
                <label className='mt-4'>Phone</label>
                <input type='tel' name='client_tel' placeholder='xxx-xxx-xxxx' className='border-2 h-10 p-2'/>
                <label className='mt-4'>Message<span className='text-red-500'>*</span></label>
                <textarea name="message" placeholder='your message here' className='border-2 h-36 p-2' required/>
                <input type="submit" value="Send" className='mt-4 mb-16 w-2/5 h-16 bg-black text-white rounded-md cursor-pointer'/>
            </form>
        </div>
    )
}