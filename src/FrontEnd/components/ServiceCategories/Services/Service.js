import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {title, description, image} = service;
    return (
             <div className="card glass px-10 pt-8">
            <figure><img className='w-32 h-32' src={image} alt=""/></figure>
            <div className="card-body bg-white rounded-b-2xl">
                <h2 className="font-bold text-xl text-center">{title}</h2>
                {
                description.length >60 ? <p className='text-center text-lg'>{description.slice(0, 60) + '...'} <Link className='btn bg-blue-600' to={`/serviceDetail/${service._id}`}>Read More</Link></p>
                :
                <p>{description}</p>
                }
            </div>
            </div>
        
    );
};

export default Service;