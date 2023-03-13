import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Testimonials } from './Testimonials';
import { Tutoring } from './Tutoring';



export function Main () {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/tutoring' element={<Tutoring/>}/>
                <Route path='/testimonials' element={<Testimonials/>}/>
            </Routes>
        
        </div>
    );
}