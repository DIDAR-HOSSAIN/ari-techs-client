import React from 'react';
import category1 from '../../../AriTechsResource/Category-image/it-project.jpg';
import category2 from '../../../AriTechsResource/Category-image/it-relocation service.jpg';
import category3 from '../../../AriTechsResource/Category-image/it-suport.jpg';
import Service from './Service';

const Services = () => {
    const serviceData = [
        {
            id: 1,
            image: category1,
            title: 'the quick brown fox jumps over the lazy dog',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi dicta molestiae quod aliquid maxime, voluptates nisi soluta natus atque perferendis cupiditate dolore debitis! Voluptate pariatur iusto voluptates corrupti laborum impedit.'
        },
        {
            id: 2,
            image: category2,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi dicta molestiae quod aliquid maxime, voluptates nisi soluta natus atque perferendis cupiditate dolore debitis! Voluptate pariatur iusto voluptates corrupti laborum impedit.'
        },
        {
            id: 3,
            image: category3,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi dicta molestiae quod aliquid maxime, voluptates nisi soluta natus atque perferendis cupiditate dolore debitis! Voluptate pariatur iusto voluptates corrupti laborum impedit.'
        }
    ]
    return (
        <div className=''>
            <h1 className='text-center text-4xl text-white bg-black mt-4'>Our Services</h1>
           <div className="mt-4 gap-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            
            {
                serviceData.map(service => <Service
                key={service.id}
                service={service}
                ></Service>)
            }

           </div>

        </div>
    );
};

export default Services;