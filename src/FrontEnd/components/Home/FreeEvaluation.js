import React from 'react';
import getFreeEva from '../../../AriTechsResource/background-image/free-evaluation-img.jpg';
import { Link } from 'react-router-dom';


const FreeEvaluation = () => {
    return (
        <div className="hero min-h-min mt-4" style={{ backgroundImage: "url(" + getFreeEva + ")" }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Get a Free Evaluation</h1>
            <p className="mb-5">Would you like to know how to better optimize and protect your business? Click below and one of our knowledgable techs will reach out to schedule your FREE evaluation.</p>
            <Link to="/contact"><button className="btn bg-blue-600">Contact Us</button></Link>
            </div>
        </div>
        </div>
    );
};

export default FreeEvaluation;


