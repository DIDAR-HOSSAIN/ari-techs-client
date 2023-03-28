import React from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import contactBg from '../../../AriTechsResource/background-image/contact-bg.png';

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
            <div className="h-96" style={{ backgroundImage: "url(" + contactBg + ")" }}>
            <br/>
            <div className="w-6/12 mx-auto">
            <form onSubmit={handleSubmit} className=''>
            <input name="name" type="text" placeholder="Enter Your Name" className="input input-bordered input-lg w-full mb-2 max-w-full" required />

            <input name="email" type="email" placeholder="Enter Your Email" className="input input-bordered input-lg w-full mb-2 max-w-full" required />
            
            <input name="mobile" type="number" placeholder="Enter Your Mobile No" className="input input-bordered input-lg w-full mb-2 max-w-full" required />

            <textarea name="message" className="textarea textarea-bordered input-lg w-full required" placeholder="Message"></textarea>
            <br/>
            <input type="submit" value="Submit" className="btn btn-primary mt-2 w-full" />
            </form>
            </div>
            </div>
    );
};

export default CreateContact;