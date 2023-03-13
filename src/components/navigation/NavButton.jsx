import { Link } from 'react-router-dom';

export function NavButton ({ name, linkUrl }) {
    return (
        <div className='mx-4 my-auto'>
            <Link to={linkUrl}>{name}</Link>
        </div>
    );
}
