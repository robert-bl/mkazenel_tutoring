import { Route, Routes } from 'react-router-dom';

import { Contact } from './Contact';
import { AboutMe } from './AboutMe'
import { EmailConfirm } from './EmailConfirm';
import { Home } from './Home';
import ScrollToTop from '../navigation/ScrollToTop';
import { Testimonials } from './Testimonials';
import { Tutoring } from './Tutoring';



export function Main () {
    return (
        <div className='w-11/12 md:w-3/5 mx-auto mt-24'>
            <ScrollToTop>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/tutoring' element={<Tutoring/>}/>
                    <Route path='/testimonials' element={<Testimonials/>}/>
                    <Route path='/about-me' element={<AboutMe/>}/>
                    <Route path='/contact' element={<Contact/>} />
                    <Route path='/email-sent' element={<EmailConfirm/>}/>
                </Routes>
            </ScrollToTop>
        </div>
    );
}