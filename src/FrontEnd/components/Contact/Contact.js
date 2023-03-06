import React from 'react';
import contacHeaderImg from '../../../AriTechsResource/Contact-image/contact-us-writing-3d-render-260nw-1710071245.jpg';
import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';

const Contact = () => {
    return (
            <div className="w-full grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
            <div className="mt-32 justify-self-center">
            <img className='object-center' src={contacHeaderImg} alt="" />
            <span className='flex items-center text-lg font-semibold mt-4'><MapPinIcon className="h-14 w-14 text-blue-500"/>
            <p>SA-TOWER, GEC, Circle Panchlaish, Chattogram</p>
            </span>
            <p className='text-2xl font-semibold mt-4'>Email Address</p>
            <p type="email" className='email'><a href="mailto:Aritechs@outlook.com">Aritechs@outlook.com</a></p>
            <span className='flex items-center text-lg font-semibold mt-4'><PhoneIcon className="h-8 w-8 text-blue-500"/>
            <p>+18143008937</p>
            </span>
            </div>
            <div className="mt-32">
            <form className=''>
            <input type="text" placeholder="Enter Your Name" className="input input-bordered input-lg w-full mb-2 max-w-full" />

            <input type="text" placeholder="Enter Your Email" className="input input-bordered input-lg w-full mb-2 max-w-full" />
            
            <input type="text" placeholder="Enter Your Subject" className="input input-bordered input-lg w-full mb-2 max-w-full" />

            <textarea className="textarea textarea-bordered w-full" placeholder="Message"></textarea>
            <br/>
            <input type="submit" value="Submit"  className="btn btn-primary mt-2 w-full" />
            </form>
            </div>
            </div>
    );
};

export default Contact;