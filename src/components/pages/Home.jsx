import { Link } from "react-router-dom";

import { Header } from "../header/Header";
import { QuoteCarousel } from "../carousel/QuoteCarousel";
import { Contact } from "./Contact";

import tutoring from '../../assets/tutoring.png'



export function Home () {

    let linkStyle = 'w-[90vw] md:w-[20vw] aspect-square m-2 bg-gray-300 text-5xl md:text-xl xl:text-4xl p-2'

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

                <div className='flex flex-col md:flex-row justify-between'>
                    <Link to='/tutoring' className='w-[90vw] md:w-[20vw] aspect-square m-2 bg-gray-300 text-5xl md:text-xl xl:text-4xl p-2 bg-tutoring bg-center bg-cover bg-no-repeat text-white rounded-md font-bold duration-200 hover:brightness-75'>Tutoring<br/>Services<br/>and<br/>My Teaching<br/>Philosophy</Link>
                    <Link to='/testimonials' className={linkStyle}>More<br/>Testimonials</Link>
                    <Link to='/about-me' className='w-[90vw] md:w-[20vw] aspect-square m-2 bg-gray-300 text-5xl md:text-xl xl:text-4xl p-2 bg-about-me-portrait bg-center bg-cover bg-no-repeat text-white rounded-md font-bold duration-200 hover:brightness-75'>About Me</Link>
                </div>
                <div className='my-16'></div>
                <Contact />
            </div>
        </div>
    );
}