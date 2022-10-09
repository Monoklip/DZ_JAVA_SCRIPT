import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    
    const useExactMatch = (path: string = ''): boolean =>{
        const location = useLocation();
        return path === location.pathname;
    }

    return (
        <header className="header">
            <h1>Bet company</h1>
            <nav>
                <ul className='menu'>
                    <li><Link className={useExactMatch('/') ? 'active' : ''} to={'/'}>Home</Link></li>
                    <li><Link className={useExactMatch('/sports') ? 'active' : ''} to={'/sports'}>sports</Link></li>
                    <li><Link className={useExactMatch('/tickets') ? 'active' : ''} to={'/tickets'}>tickets</Link></li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;