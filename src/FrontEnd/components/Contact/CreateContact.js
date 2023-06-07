import React from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import contactBg from '../../../AriTechsResource/background-image/contact-bg.jpg';

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

            fetch('https://ari-techs-server.vercel.app/contacts', {
                     method: 'POST',
                     headers: {
                         'content-type': 'application/json',
                        //  authorization: `bearer ${localStorage.getItem('accessToken')}`
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
            <div className="h-auto mx-1 bg-no-repeat" style= {{  backgroundImage: "url(" + contactBg + ")" }}>
            <br/>
            <h1 className='text-center font-semibold text-3xl'>Get in charge of your IT.</h1>
            <p className='text-center font-semibold text-lg'>Fill out the contact form and someone from out team will be in touch</p>
            <div className="lg:w-[500px] mx-auto">
            <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="Enter your name" className="input input-bordered input-lg w-full mb-2 max-w-full" required />

            <input name="email" type="email" placeholder="Enter your email" className="input input-bordered input-lg w-full mb-2 max-w-full" required />
            
            <input name="mobile" type="number" placeholder="Enter your mobile no" className="input input-bordered input-lg w-full mb-2 max-w-full" required />

            <textarea name="message" className="textarea textarea-bordered input-lg h-48 w-full required" placeholder="Tell us about your company"></textarea>
            <br/>
            <input type="submit" value="Send Message" className="btn btn-primary mt-2 w-full" />
            </form>
            </div>
            </div>
    );
};

export default CreateContact;