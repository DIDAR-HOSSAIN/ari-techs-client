import React from 'react';
import contacHeaderImg from '../../../AriTechsResource/Contact-image/contact-us-writing-3d-render-260nw-1710071245.jpg';

const Contact = () => {
    return (
            <div className="w-full grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
            <div className="mt-32">
            <img className='object-center' src={contacHeaderImg} alt="" />
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="mt-32">
            <form>
            <input type="text" placeholder="Enter Your Name" className="input input-bordered input-lg w-full max-w-full" />
            <input type="text" placeholder="Enter Your Email" className="input input-bordered input-lg w-full max-w-full" />
            <input type="text" placeholder="Enter Your Subject" className="input input-bordered input-lg w-full max-w-full" />
            <textarea className="textarea textarea-bordered w-full" placeholder="Message"></textarea>
            <br/>
            <input type="submit" value="Submit"  className="btn btn-primary mt-2 w-full" />
            </form>
            </div>
            </div>
    );
};

export default Contact;