import { Header } from "../header/Header";

export function Home () {
    return (
        <div>
            <Header />
            <div className='container mt-16'>
                <div className='text-2xl text-center'>A little about myself</div>
                <div>I tutor mostly middle and high school students in math and physics, including AP Calculus, AP Physics, and Math SAT Prep. I teach in-person in the Canton MA area and virtually via Zoom. 
                <br></br>
                <br></br>
                I enjoy sharing with students my enthusiasm for math and physics and helping students improve their skill and confidence.</div>
                <div className='text-red-600'>Tutoring Sevices Link</div>
                <div className='text-red-600'>About Me Link</div>
                <div className='text-2xl text-center'>Testimonials</div>
                <div className='italic'>"I was struggling with algebra in school and Michael was able to teach me in a way that helped me finally understand the concepts that I couldn't figure out for so long." 
                <br></br>-- Student</div>
                <div className='italic'>"Our teens found it very valuable to work though each step of complex math and physics problems with such a knowledgeable educator."
                <br></br>-- Parent</div>
                <div className='text-red-600'>View All Testimonials Link</div>
                <div className='text-2xl text-center'>Get In Touch</div>
                <div className='text-red-600'>Contact Link</div>
            </div>
        </div>
    );
}