
import { NavBar } from '../navigation/NavBar';
import portrait from '../../assets/michael_portrait.png'

export function Header () {
    return (
        <div className='container mx-auto'>
            <div className='flex justify-center mt-40'>
                <div className='animate-fade-in-right'>
                    <img src={portrait}/>
                </div>
                <div className='container sm:mt-16 ml-4 text-4xl animate-fade-in-left'>
                    <div>Hi, I'm Michael Kazenel.</div>
                    <div>I tutor math and physics.</div>
                </div>
            </div>
        </div>
    );
}