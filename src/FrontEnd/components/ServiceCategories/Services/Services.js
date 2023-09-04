import React from 'react';
import headerImage from '../../../../AriTechsResource/background-image/header-img.png';
import headerImage2 from '../../../../AriTechsResource/background-image/header2bg.jpg';
import Service from './Service';
import { useQuery } from '@tanstack/react-query';


const Services = () => {

    const { data: services = [] } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await fetch('https://ari-techs-server.vercel.app/services', {
                method: 'GET',
                mode: 'cors'
            })
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className="">

            <div className="hero h-[70vh]" style={{ backgroundImage: "url(" + headerImage2 + ")" }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-4xl">
                        <h1 className="mb-5 text-5xl font-bold">IT Consulting & Services</h1>
                        <p className="mb-5 text-xl">We are New York based IT service provider. Our team of skilled and experienced IT professionals is dedicated to providing the highest quality services to meet all of your technology needs.</p>
                    </div>
                </div>
            </div>

<<<<<<< HEAD
                <div className="p-4">
=======
            <div className="justify-center items-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className='w-full'>
                    <h1 className="text-6xl font-bold text-blue-600 p-4">IT Consulting & Services</h1>
                    <p className="text-2xl p-4">We are New York based IT service provider. Our team of skilled and experienced IT professionals is dedicated to providing the highest quality services to meet all of your technology needs.</p>
                </div>
                <div className="w-full">
                    <img src={headerImage} className="" alt="" />
                </div>
            </div>

            <div className="flex flex-col w-full border-opacity-50">
                <div className="divider text-blue-600 text-bold text-2xl">We Provide</div>
            </div>

            <div className="p-4">
>>>>>>> 8b2fff5d63a05ea92f49e240baeb20efabc51d97
                <div className="gap-8 rounded-lg grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                >

                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Services;