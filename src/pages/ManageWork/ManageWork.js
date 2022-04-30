import React, { useEffect, useState } from 'react';
import './ManageWork.css';

const ManageWork = () => {
    const [works, setWorks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/work')
            .then(res => res.json())
            .then(data => setWorks(data))
    }, []);

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure to delete this item?');
        if (proceed) {
            fetch(`http://localhost:5000/work/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    const remaining = works.filter(work => work._id !== id);
                    setWorks(remaining);
                })

        }
    }
    return (
        <div >
            <h1>Manage Accorting To Your Wish</h1>
            <div className='manageWork'>
                {
                    works.map(work => <div key={work._id} className='delete-work'><h2>{work.name}</h2> <button onClick={() => handleDelete(work._id)}>Delete</button></div>)
                }
            </div>
        </div>
    );
};

export default ManageWork;