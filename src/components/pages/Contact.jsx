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

    useEffect(() => {
        console.log(form.current)
    }, [form.current])

    return (
        <div>
            <div className='mt-24'>Contact Me</div>
            <div>(<span className='text-red-500'>*</span>) required</div>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col'>
                <label className='mt-4'>Name<span className='text-red-500'>*</span></label>
                <input type="text" name="client_name" placeholder='your name' className='border-2' required/>
                <label className='mt-4'>Email<span className='text-red-500'>*</span></label>
                <input type="email" name="client_email" placeholder='your email' className='border-2' required/>
                <label className='mt-4'>Phone</label>
                <input type='tel' name='client_tel' placeholder='xxx-xxx-xxxx' className='border-2'/>
                <label className='mt-4'>Message<span className='text-red-500'>*</span></label>
                <textarea name="message" className='border-2' required/>
                <input type="submit" value="Send" className='mt-4 mb-16 mx-auto w-3/5 bg-black text-white rounded-md cursor-pointer'/>
            </form>
        </div>
    )
}