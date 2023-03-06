import React from 'react';

const Service = ({service}) => {
    const {title, image, description} = service;
    return (
             <div className="card glass">
            <figure><img className='w-full h-64' src={image} alt=""/></figure>
            <div className="card-body bg-white rounded-b-2xl">
                <h2 className="card-title">{title}</h2>
                <p className='text-justify'>{description}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Submit</button>
                </div>
            </div>
            </div>
        
    );
};

export default Service;