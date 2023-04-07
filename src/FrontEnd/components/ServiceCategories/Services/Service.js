import React from 'react';
import ReactReadMoreReadLess from "react-read-more-read-less";
import service from "./service.css";

const Service = ({service}) => {
    const {title, description, image} = service;
    return (
             <div className="card glass">
            <figure><img className='w-full h-64 ' src={image} alt=""/></figure>
            <div className="card-body bg-white rounded-b-2xl">
                <h2 className="card-title">{title}</h2>
                <ReactReadMoreReadLess
                charLimit={60}
                readMoreClassName ="readMoreClassName"
                readLessClassName ="readLessClassName"
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
            >
                {description}
            </ReactReadMoreReadLess>
                {/* <div className="card-actions justify-end">
                <button className="btn btn-primary">Submit</button>
                </div> */}
            </div>
            </div>
        
    );
};

export default Service;