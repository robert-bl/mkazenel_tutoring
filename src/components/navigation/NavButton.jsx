import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export function NavButton ({ name, linkUrl, activePage }) {

    let buttonStyle = `mx-4 p-1 my-auto hover:text-gray-400 duration-300 border ${linkUrl === activePage ? 'border-inherit' : 'border-transparent'}`

    return (
        <div className={buttonStyle}>
            <Link to={linkUrl}>{name}</Link>
        </div>
    );
}
