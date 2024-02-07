
import { Link } from 'react-router-dom';
import { SlFeed } from 'react-icons/sl';
import { IoPersonOutline } from 'react-icons/io5';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { IoNotificationsOutline } from 'react-icons/io5';
import { AiOutlineMenu } from 'react-icons/ai';
import Search from './Search';
import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isVisible, setIsVisible] = useState(false);
    const [showSideBar, setShowSideBar] = useState(false);

    useEffect(() => {

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function handleMenuClick() {
        setShowSideBar(true);
    }

    return (
        <>
            <nav className='container'>
                <div>
                    <Search />
                </div>

            <ul className='nav-items'>
                <li><Link to={'/feed'} >
                    <SlFeed />
                </Link>
                </li>
                <li>
                    <Link to={'/profile'} >
                        <IoPersonOutline />
                    </Link>
                </li>
                <li>
                    <Link to={'/notifications'} >
                        <IoNotificationsOutline />
                    </Link>
                </li>
            </ul>
        </nav >
        </>
    )
};

