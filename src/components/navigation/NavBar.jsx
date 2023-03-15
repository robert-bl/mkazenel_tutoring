import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { NavButton } from './NavButton';


export function NavBar () {

    const [navScrolled, setNavScrolled] = useState(false)
    const [activePage, setActivePage] = useState('/')
    const location = useLocation()

    useEffect(() => {
        setActivePage(location.pathname)
    }, [location])

    const changeBackground = () => {
        window.scrollY > 80 ? setNavScrolled(true) : setNavScrolled(false)
    }
        

    useEffect(() => {
        window.addEventListener('scroll', changeBackground)
        return () => window.removeEventListener('scroll', changeBackground)
    },[])


    let navStyling = `flex justify-between fixed top-0 w-screen ${navScrolled === true ? 'text-black border-black bg-white' : 'text-white border-white bg-black'} border-b-2 transition-colors duration-1000 p-4 z-10`

    return (
        <div className={navStyling}>
            <div className='text-4xl'>
                <NavButton name='Michael Kazenel' linkUrl='/' activePage={null}/>
            </div>
            <div className='flex justify-between box-border'>
                <NavButton name='Home' linkUrl='/' activePage={activePage}/>
                <NavButton name='Tutoring' linkUrl='/tutoring' activePage={activePage}/>
                <NavButton name='Testimonials' linkUrl='/testimonials' activePage={activePage}/>
                <NavButton name='About Me' linkUrl='/about-me' activePage={activePage}/>
                <NavButton name='Contact Me' linkUrl='/contact' activePage={activePage}/>
            </div>
        </div>
    );
}
