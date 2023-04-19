import React from 'react';
import bg1 from '../../../../AriTechsResource/background-image/bg-1.jpg';
import bg2 from '../../../../AriTechsResource/background-image/bg-img-2.png';
import bg3 from '../../../../AriTechsResource/background-image/bg-3.png';
import Service from './Service';
import { useQuery } from '@tanstack/react-query';

const Services = () => {

    const { data: services = [] } = useQuery({
        queryKey: ['services'],
        queryFn: async()=>{
            const res = await fetch('https://ari-techs-server.vercel.app/services',{
            method: 'GET',
                mode: 'cors'
        })
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className="">
            <div className="mt-4">
                <img src={bg1} className="h-72 lg:h-[500px] w-full object-cover" alt=''/>

                <div className="lg:w-4/12 mx-auto -mt-32">
                    <div className="card card-side bg-base-100 shadow-xl">

                        <hr className="lg:w-48 h-1 mx-auto my-4 bg-black border-0 rounded md:my-10 dark:bg-gray-700" />

                    <div className="card-body">
                        <h1 className="card-title text-2xl">IT Consulting & Services</h1>
                        <p className='text-justify'>Welcome to ArITech! Our team of skilled and experienced IT professionals is dedicated to providing the highest quality services to meet all of your technology needs. Whether you are looking for IT consulting, software development, IT Services, network management, or any other IT services, we have the expertise and experience to help you achieve your goals. If you have any questions or need assistance, please do not hesitate to contact us. We look forward to working with you!</p>
                    </div>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="h-52 lg:h-96 w-full mt-4" style={{ backgroundImage: "url(" + bg2 + ")" }}>
                <div className="lg:ml-72 lg:pt-14 text-white">
                <h1 className=" text-5xl font-bold">Our Services</h1>
                <p className="">Let's us take care of your IT</p>   
                </div>
            </div>
            </div>

                <div className="p-4 lg:-mt-52">
                <div className="gap-8 rounded-lg grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-fixed"
                style={{ backgroundImage: "url(" + bg3 + ")",  }}
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