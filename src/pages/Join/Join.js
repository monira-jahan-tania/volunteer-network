import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import './Join.css';

const Join = () => {
    const { workId } = useParams();
    const [user] = useAuthState(auth);
    const [workDetails, setWorkDetails] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/work/${workId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setWorkDetails(data))
    }, []);

    return (
        <div className='join'>
            <h1>Join In Our Volunteer Network</h1>
            <form>
                <input name='name' type="name" value={user?.displayName} placeholder='name' />
                <div className='line'></div>

                <input name='email' type="email" value={user?.email} placeholder='email' />
                <div className='line'></div>

                <input name='work' type="name" value={workDetails.name} placeholder='work' />
                <div className='line'></div>
                <br />
                <input className='btn' type="submit" value="Join" />
            </form>
        </div>
    );
};

export default Join;