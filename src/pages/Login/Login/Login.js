import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password);
        navigate(from, { replace: true });
    }

    return (
        <div className='login'>
            <h1>Please Log In To Be A Member</h1>
            <form onSubmit={handleLogin}>

                <input name='email' type="email" placeholder='email' />
                <div className='line'></div>
                <input name='password' type="password" placeholder='password' />
                <div className='line'></div>
                <br />
                <input className='btn' type="submit" value="Login" />
            </form>
            <p>New to Volunteer Network? Please <Link to='/register'> Register</Link> Now..</p>
        </div>
    );
};

export default Login;