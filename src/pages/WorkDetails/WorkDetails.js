import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const WorkDetails = () => {
    const navigate = useNavigate()
    const { workId } = useParams();
    const [workDetails, setWorkDetails] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/work/${workId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setWorkDetails(data))
    }, []);



    return (
        <div>
            <h1>{workDetails.name}</h1>
            <p>{workDetails.description}</p>
            <Link to={`/join/${workId}`}>
                <button>Join Us</button>
            </Link>
        </div>
    );
};

export default WorkDetails;