import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Work.css';

const Work = ({ work }) => {
    const { _id, img, name } = work;
    const navigate = useNavigate();
    const navigateToWorkDetails = () => {
        navigate(`/work/${_id}`);
    }
    return (
        <div className='work'>
            <img width='200px' src={img} alt="" />
            <h2>{name}</h2>
            <button onClick={() => navigateToWorkDetails(_id)}>Show Details</button>
        </div>
    );
};

export default Work;