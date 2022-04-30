import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../logo.png';
import './Header.css';
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <nav>
                <div className='logo'>
                    <Link to='/'>logo</Link>
                </div>

                <div className='menu'>
                    <Link to='/'>Home</Link>
                    <Link to='/donation'>donation</Link>
                    <Link to='/events'>events</Link>
                    <Link to='/blog'>blog</Link>
                    {
                        user &&
                        <>
                            <Link to='/addWork'>Add Work</Link>
                            <Link to='/manageWork'>Manage Work</Link>
                        </>
                    }
                    {
                        user ?
                            <button className='signOutBtn' onClick={handleSignOut}>Sign Out</button>
                            :
                            <Link to='/login'>Login</Link>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Header;