import React from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateContact = () => {
    const contact = useLoaderData();
    const navigate = useNavigate();
    const handleUpdateContact = event => {
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const email = form.email.value;
            const mobile = form.mobile.value;
            const message = form.message.value;
            const contacts = {name, email, mobile, message};
            console.log(contacts);

            fetch(`http://localhost:5000/contacts/${contact._id}`, {
                     method: 'PUT',
                     headers: {
                         'content-type': 'application/json',
                          authorization: `bearer ${localStorage.getItem('accessToken')}`
                     },
                     body: JSON.stringify(contacts)
                 })
                 .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`${name}, Request Updated Successfully`);
                    navigate('/dashboard')
                })
    }

    return (
            <div className="w-full grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
            <div className="mt-32">
            <h1>contact: {contact.length}</h1>
            <form onSubmit={handleUpdateContact} className=''>
            <input name="name" type="text" defaultValue={contact.name} className="input input-bordered input-lg w-full mb-2 max-w-full" />

            <input name="email" type="email" defaultValue={contact.email} className="input input-bordered input-lg w-full mb-2 max-w-full" />
            
            <input name="mobile" type="text" defaultValue={contact.mobile} className="input input-bordered input-lg w-full mb-2 max-w-full" />

            <textarea name="message" type="text" defaultValue={contact.message} className="textarea textarea-bordered w-full"></textarea>
            <br/>
            <input type="submit" value="Submit" className="btn btn-primary mt-2 w-full" />
            </form>
            </div>
            </div>
    );
};

export default UpdateContact;