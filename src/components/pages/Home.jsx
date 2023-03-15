import { Link } from "react-router-dom";

import { Header } from "../header/Header";
import { QuoteCarousel } from "../carousel/QuoteCarousel";
import { Contact } from "./Contact";

let linkStyle = 'h-[30vw] md:h-[20vw] h-[30vw] md:w-[20vw] m-2 bg-gray-300'

export function Home () {
    return (
        <div>
            <Header />
            <div className='mt-16 animate-fade-in'>

                <div>I tutor mostly middle and high school students in math and physics, including AP Calculus, AP Physics, and Math SAT Prep. I teach in-person in the Canton MA area and virtually via Zoom. 
                <br></br>
                <br></br>
                I enjoy sharing with students my enthusiasm for math and physics and helping students improve their skill and confidence.
                </div>

                <QuoteCarousel />

                <div className='flex justify-between'>
                    <Link to='/tutoring' className={linkStyle}>My tutoring services and philosophy</Link>
                    <Link to='/testimonials' className={linkStyle}>See more Testimonials</Link>
                    <Link to='/about-me' className={linkStyle}>Learn more about me</Link>

                </div>

                <div className='text-2xl text-center'>Get In Touch</div>
                <Contact />
            </div>
        </div>
    );
}