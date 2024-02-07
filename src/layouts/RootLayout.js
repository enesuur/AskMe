
import { Outlet } from 'react-router-dom';
import { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import './Rootlayout.css';
export default function RootLayout() {

    const authContext = useContext(AuthContext);
    return (
        <div className='root-layout'>
            <header>
                {!authContext.isAuthConfirmed && <Banner/> }
                {authContext.isAuthConfirmed && <Navbar/> }
                {console.log(authContext.isAuthConfirmed)}
            </header>
            <main>
                <Outlet />
            </main>

            <footer>

            </footer>
        </div>
    )
};