import React, { useEffect, useState } from 'react';
import Work from '../Work/Work';
import './Works.css';

const Works = () => {
    const [works, setWorks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/work')
            .then(res => res.json())
            .then(data => setWorks(data))
    }, [])
    return (
        <div>
            <h1>I Grow By Helping People In Need</h1>
            <div className='works'>
                {
                    works.map(work => <Work
                        key={work._id}
                        work={work}
                    ></Work>)
                }
            </div>
        </div>
    );
};

export default Works;