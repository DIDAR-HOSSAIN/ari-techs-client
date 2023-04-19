import React from 'react';
import {
    toast
} from 'react-hot-toast';
import {
    useLoaderData,
    useNavigate
} from 'react-router-dom';

const UpdateService = () => {
    const service = useLoaderData();
    // const {title, description, image} = service;
    const navigate = useNavigate();
    const handleUpdateService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const image = form.image.value;
        const services = {
            title,
            description,
            image
        };
        console.log(services);

        fetch(`https://ari-techs-server.vercel.app/services/${service._id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(services)
            })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success(`${title}, Request Updated Successfully`);
                navigate('/dashboard')
            })
    }
    return ( <
        div className = "w-full grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1" >
        <
        div className = "mt-32" >
        <
        h1 > service: {
            service.length
        } < /h1> <
        form onSubmit = {
            handleUpdateService
        }
        className = '' >
        <
        input name = "name"
        type = "text"
        defaultValue = {
            service.title
        }
        className = "input input-bordered input-lg w-full mb-2 max-w-full" / >

        <
        input name = "email"
        type = "email"
        defaultValue = {
            service.description
        }
        className = "input input-bordered input-lg w-full mb-2 max-w-full" / >

        <
        input type = "file"
        defaultValue = {
            service.image
        }
        className = "file-input w-full max-w-xs" / >

        <
        br / >
        <
        input type = "submit"
        value = "Update"
        className = "btn btn-primary mt-2 w-full" / >
        <
        /form> <
        /div> <
        /div>
    );
};

export default UpdateService;