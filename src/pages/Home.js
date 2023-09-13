import { useState } from 'react';
import './Home.css';

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);
    const [inputType, setInputType] = useState('password');
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log('Form Gönderildi:', formData);
    }

    function handleFormChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    function togglePasswordVisibility() {
        setIsVisible(!isVisible);
        setInputType(isVisible ? 'password' : 'text');
    }

    return (
        <section className="home container">
            <div className='home-title'>
                Ask. Chat. Repeat.
                <span>Anonymously!</span>
            </div>
            <div className='login'>
                <form onSubmit={handleFormSubmit}>
                    <label>
                        Email
                        <span className='input-container'>
                            <input type='email' placeholder='Email' name='email' onChange={handleFormChange} />
                            <svg fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" >
                                <path d="M19.875 4.5H4.125c-1.036 0-1.875.84-1.875 1.875v11.25c0 1.035.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875V6.375c0-1.036-.84-1.875-1.875-1.875Z">
                                </path>
                                <path d="M5.25 7.5 12 12.75l6.75-5.25">
                                </path>
                            </svg>
                        </span>
                    </label>

                    <label>
                        Password
                        <span className='input-container'>
                            <input type={inputType} placeholder='Password' name='password' onChange={handleFormChange} />
                            <span className='password-toggle' onClick={togglePasswordVisibility}>
                                {isVisible ? (
                                    <svg width="46" height="46" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"></path><path d="M14.12 14.12a3 3 0 1 1-4.24-4.24"></path><path d="m1 1 22 22"></path><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"></path></svg>

                                ) : (
                                    <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" >
                                    </path>
                                        <path d="M18.507 6.618C16.457 5.213 14.264 4.5 11.99 4.5c-2.048 0-4.045.61-5.934 1.804C4.149 7.51 2.28 9.704.75 12c1.238 2.063 2.933 4.183 4.697 5.4 2.024 1.393 4.225 2.1 6.542 2.1 2.297 0 4.493-.706 6.53-2.1 1.792-1.228 3.499-3.346 4.731-5.4-1.237-2.036-2.948-4.151-4.743-5.382ZM12 16.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Z">
                                        </path>
                                    </svg>
                                )}
                            </span>
                        </span>
                    </label>
                    <button >Login</button>
                    <hr />
                    <div className='login-social'>
                        <button className='login-google'>
                            <svg  viewBox="0 0 488 512" stroke='currentColor'>
                                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                            </svg>
                            <span>Login with google</span>
                        </button>
                        <button className='login-twitter'>
                            <svg  viewBox="0 0 512 512" stroke='currentColor'>
                                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                            </svg>
                            <span>Login with twitter</span>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}
