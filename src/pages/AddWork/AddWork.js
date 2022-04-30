import React from 'react';
import { useForm } from "react-hook-form";
import './AddWork.css';

const AddWork = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        fetch('http://localhost:5000/work', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    }
    return (
        <div className='addWork'>
            <h1>Please Add A Work</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='name' {...register("name", { required: true })} />
                <div className='line'></div>

                <textarea placeholder='description' {...register("description", { required: true })} />
                <div className='line'></div>

                <input placeholder='Photo URL' type='text' {...register("img")} />
                <div className='line'></div>
                <br />
                <input className='btn' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddWork;