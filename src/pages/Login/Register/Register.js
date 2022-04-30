import React from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);

    }
    return (
        <div className='register'>
            <h1>Please Log In To Be A Member</h1>
            <form onSubmit={handleRegister}>
                <input name='name' type="text" placeholder='Username' />
                <div className='line'></div>
                <input name='email' type="email" placeholder='email' />
                <div className='line'></div>
                <input name='password' type="password" placeholder='password' />
                <div className='line'></div>
                <br />
                <input className='btn' type="submit" value="Register" />
            </form>
            <p>Already a member of Volunteer Network? Please <Link to='/login'> login</Link> Now..</p>
        </div>
    );
};

export default Register;