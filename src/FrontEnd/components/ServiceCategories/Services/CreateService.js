import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CreateService = () => {
    const {register, handleSubmit, formState: {errors} } = useForm();
    const navigate = useNavigate();
    const imageHostApi = process.env.REACT_APP_imgbb_api;
    console.log(imageHostApi)

    const handleAddService = data =>{
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostApi}`
        fetch(url,{
            method: 'POST',
            body: formData
        })
        .then(res =>res.json())
        .then(imgData =>{
            if(imgData.success){
            console.log(imgData.data.url);
            const serviceCategory = {
                title: data.title,
                description: data.description,
                image: imgData.data.url,
            }
            
            //save doctor information to database

                 fetch('https://ari-techs-server.vercel.app/services', {
                     method: 'POST',
                     headers: {
                         'content-type': 'application/json',
                         authorization: `bearer ${localStorage.getItem('accessToken')}`
                     },
                     body: JSON.stringify(serviceCategory)
                 })
                 .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`${data.title}, Service Category Added Successfully`);
                    navigate('/dashboard')
                })
            }
        })
        
        
    }

    return (
        <div className=''>
            <h1 className='font-extrabold text-4xl text-accent'>Add Service Category</h1>
            <form onSubmit={handleSubmit(handleAddService)}>
            <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text text-xl">Service Title?</span>
            </label>
            <input type="text" {...register("title")} placeholder="Title" className="input input-bordered w-full max-w-xs" />
            {errors.title && <p className='text-red-500'>errors.title.message</p>}
            </div>

            <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text text-xl">Description?</span>
            </label>
            <input type="text" {...register("description")} placeholder="Description" className="input input-bordered w-full max-w-xs" />
            {errors.description && <p className='text-red-500'><err></err>errors.description.message</p>}
            </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text text-xl">Image?</span>
            </label>
            <input type="file" {...register("image")} className="input input-bordered w-full max-w-xs" />
            </div>

            <input className='btn btn-accent' value="Add Service" type="submit" />
            </form>
        </div>
    );
};

export default CreateService;