import React from 'react';
import contacHeaderImg from '../../../AriTechsResource/Contact-image/contact-us-writing-3d-render-260nw-1710071245.jpg';
import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CreateContact = () => {
const navigate = useNavigate();
    const handleSubmit = event => {
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const email = form.email.value;
            const mobile = form.mobile.value;
            const message = form.message.value;
            const contacts = {name, email, mobile, message};
            console.log(contacts);

            fetch('http://localhost:5000/contacts', {
                     method: 'POST',
                     headers: {
                         'content-type': 'application/json',
                         authorization: `bearer ${localStorage.getItem('accessToken')}`
                     },
                     body: JSON.stringify(contacts)
                 })
                 .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`${name}, Request Added Successfully`);
                    navigate('/dashboard')
                })
    }

    return (
            <div className="w-6/12 mx-auto">
            {/* <div className="mt-32 justify-self-center">
            <img className='object-center' src={contacHeaderImg} alt="" />
            <span className='flex items-center text-lg font-semibold mt-4'><MapPinIcon className="h-14 w-14 text-blue-500"/>
            <p>706 Autumn ave, Brooklyn NY 11208</p>
            </span>
            <p className='text-2xl font-semibold mt-4'>Email Address</p>
            <p type="email" className='email'><a href="mailto:Aritechs@outlook.com">Aritechs@outlook.com</a></p>
            <span className='flex items-center text-lg font-semibold mt-4'><PhoneIcon className="h-8 w-8 text-blue-500"/>
            <p>+856-263-8066</p>
            </span>
            </div> */}
            <div className="mt-32">
            <form onSubmit={handleSubmit} className=''>
            <input name="name" type="text" placeholder="Enter Your Name" className="input input-bordered input-lg w-full mb-2 max-w-full" />

            <input name="email" type="email" placeholder="Enter Your Email" className="input input-bordered input-lg w-full mb-2 max-w-full" />
            
            <input name="mobile" type="text" placeholder="Enter Your Mobile No" className="input input-bordered input-lg w-full mb-2 max-w-full" />

            <textarea name="message" className="textarea textarea-bordered w-full" placeholder="Message"></textarea>
            <br/>
            <input type="submit" value="Submit" className="btn btn-primary mt-2 w-full" />
            </form>
            </div>
            </div>
    );
};

export default CreateContact;