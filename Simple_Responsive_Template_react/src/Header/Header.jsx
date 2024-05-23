import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
    const [isNavVisible, setIsNavVisible] = useState(window.innerWidth > 735);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 735 && !isNavVisible) {
                setIsNavVisible(true);
            } else if (window.innerWidth <= 735 && isNavVisible) {
                setIsNavVisible(false);
            }
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isNavVisible]);

    const toggleNavVisibility = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <header>
            <h1>My Website</h1>
            <button className='showNav' onClick={toggleNavVisibility}>
                <i className='jzf-ic jzf--burger-bar'></i>
            </button>
            <nav className={isNavVisible ? 'visible' : 'hidden'}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
