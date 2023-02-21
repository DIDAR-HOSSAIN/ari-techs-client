import React from 'react';

const Service = ({service}) => {
    const {title, image, description} = service
    return (
        <div className="card glass">
            <figure><img className='w-full h-64' src={image} h-10 alt=""/></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Submit</button>
                </div>
            </div>
            </div>
    );
};

export default Service;