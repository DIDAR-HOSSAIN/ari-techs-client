import React from 'react';
import WhyUseAriTechsBg from '../../../AriTechsResource/background-image/headerBgWhyUse.jpg';
import CategoryImg1 from '../../../AriTechsResource/wua/icons/clock-img.png';
import CategoryImg2 from '../../../AriTechsResource/wua/icons/document-img.png';
import CategoryImg3 from '../../../AriTechsResource/wua/icons/calender-img.png';
import CategoryImg4 from '../../../AriTechsResource/wua/icons/dollar-img.png';

const WhyUseAriTechs = () => {
    return (
            <div className="rounded-3xl" style={{ backgroundImage: "url(" + WhyUseAriTechsBg + ")" }}>
                <br/><br/><br/>
            <h1 className='font font-extrabold text-3xl text-center'>Why Use Ari Techs</h1>
            <div className="gap-8 rounded-lg grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">

            <div className="card-body rounded-b-2xl">
            <div className="flex justify-center items-center">
            <div className="">
                <img src={CategoryImg1} className="w-32 h-32" alt="" />
            </div>
            <div className="">
            <h2 className="font-bold text-xl text-blue-600">Fast Response Times</h2>
            <p className='text-lg'>You can count on a quick response, and 24 hour</p> <p>remote support and onsite support when needed.</p> 
            </div>
            </div>
            </div>

            <div className="card-body rounded-b-2xl">
            <div className="flex justify-center items-center">
            <div className="">
                <img src={CategoryImg2} className="w-32 h-32" alt="" />
            </div>
            <div className="">
            <h2 className="font-bold text-xl text-blue-600">Qualified Techs</h2>
            <p className='text-lg'>We are experts in our field, and will get the job done the right way, the first time.</p>
            </div>
            </div>
            </div>

            <div className="card-body rounded-b-2xl">
            <div className="flex justify-center items-center">
            <div className="">
                <img src={CategoryImg3} className="w-32 h-32" alt="" />
            </div>
            <div className="">
            <h2 className="font-bold text-xl text-blue-600">Years of Experience</h2>
            <p className='text-lg'>Serving multiple industries since 2011</p>
            </div>
            </div>
            </div>

            <div className="card-body rounded-b-2xl">
            <div className="flex justify-center items-center">
            <div className="">
                <img src={CategoryImg4} className="w-32 h-32" alt="" />
            </div>
            <div className="">
            <h2 className="font-bold text-xl text-blue-600">Good Value</h2>
            <p className='text-lg'>Great rates and someone you can trust to make sure you are taken care of without overspending.</p>
            </div>
            </div>
            </div>
        
            </div>
            </div>
    );
};

export default WhyUseAriTechs;