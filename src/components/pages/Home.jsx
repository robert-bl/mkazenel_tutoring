import { Link } from "react-router-dom";

import { Header } from "../header/Header";
import { QuoteCarousel } from "../carousel/QuoteCarousel";
import { Contact } from "./Contact";


export function Home () {
    return (
        <div>
            <Header />
            <div className='mt-16 animate-fade-in'>
                <div className='text-2xl text-center'>A little about myself</div>
                <div>I tutor mostly middle and high school students in math and physics, including AP Calculus, AP Physics, and Math SAT Prep. I teach in-person in the Canton MA area and virtually via Zoom. 
                <br></br>
                <br></br>
                I enjoy sharing with students my enthusiasm for math and physics and helping students improve their skill and confidence.
                </div>
                <div className='text-2xl text-center'>
                    Testimonials
                </div>

                <QuoteCarousel />

                <div className='flex'>
                    <Link to='/testimonials'>See more Testimonials</Link>
                    <Link to='/tutoring'>Learn more about my tutoring philosophy</Link>
                    <Link to='/about-me'>Learn more about me</Link>

                </div>

                <div className='text-2xl text-center'>Get In Touch</div>
                <Contact />
            </div>
        </div>
    );
}