import { useState, useEffect } from 'react';
import { NavButton } from './NavButton';


export function NavBar () {

    const [navScrolled, setNavScrolled] = useState(false)
    const [page, setPage] = useState('/')

    const changeBackground = () => {
        window.scrollY > 80 ? setNavScrolled(true) : setNavScrolled(false)
    }

    const changePage = () => {
        console.log(window.location.pathname)
        // window.location.pathname !== page ? setPage(window.location.pathname) : null
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackground)
        return () => window.removeEventListener('scroll', changeBackground)
    },[])

    useEffect(() => {
        window.addEventListener('popstate', changePage)
        return () => window.removeEventListener('popstate', changePage)
    }, [])
    

    let navStyling = `flex justify-between fixed top-0 w-screen ${navScrolled === true ? 'text-black' : 'text-white'} ${navScrolled === true ? 'bg-white' : 'bg-black'} transition-colors duration-1000 p-4 z-10`

    return (
        <div className={navStyling}>
            <div className='text-4xl'>Michael Kazenel</div>
            <div className='flex justify-between'>
                <NavButton name='Home' linkUrl='/'/>
                <NavButton name='Tutoring' linkUrl='/tutoring'/>
                <NavButton name='Testimonials' linkUrl='/testimonials'/>
                <NavButton name='About Me' linkUrl='/about-me'/>
                <NavButton name='Contact Me' linkUrl='/contact'/>
            </div>
        </div>
    );
}
