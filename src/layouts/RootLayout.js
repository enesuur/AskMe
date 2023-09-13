
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import './Rootlayout.css';
export default function RootLayout() {
    const [isAuthConfirmed,setIsAuthConfirmed] = useState(false);
    return (
        <div className='root-layout'>
            <header>
                {!isAuthConfirmed && <Banner/> }
                {isAuthConfirmed && <Navbar/> }
            </header>
            <main>
                <Outlet />
            </main>

            <footer>

            </footer>
        </div>
    )
};