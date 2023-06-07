// import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetail = () => {
    const services = useLoaderData();
    const {image, title, description} = services;

//    const { data: services = [] } = useQuery({
//         queryKey: ['services'],
//         queryFn: async()=>{
//             const res = await fetch('https://ari-techs-server.vercel.app/services',{
//             method: 'GET',
//                 mode: 'cors'
//         })
//             const data = await res.json();
//             return data;
//         }
//     })

    return (
        <div>
            <div className="card glass">
            <figure><img className='w-96 h-96 ' src={image} alt=""/></figure>
            <div className="card-body bg-white rounded-b-2xl">
                <h2 className="font-bold text-4xl text-center">{title}</h2>
                <p className='text-2xl text-justify'>{description}</p>
                <div className="card-actions justify-center">
                    <Link to="/contact"><button className="btn bg-blue-600">Contact Us</button></Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ServiceDetail;